"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Badge,
  Icon,
} from "@once-ui-system/core";
import { useState } from "react";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  year?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  year,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Column 
      fillWidth 
      gap="m" 
      padding="l" 
      radius="l" 
      background="surface" 
      border="neutral-alpha-weak"
      style={{
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered 
          ? "0 20px 40px rgba(0,0,0,0.15)" 
          : "0 4px 12px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel with Overlay */}
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "8px" }}>
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content Section */}
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        gap="l"
      >
        {/* Title Column */}
        {title && (
          <Column flex={5} gap="8">
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
            {avatars?.length > 0 && (
              <Flex gap="8" vertical="center">
                <AvatarGroup avatars={avatars} size="s" reverse />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {avatars.length} {avatars.length === 1 ? 'Contributor' : 'Contributors'}
                </Text>
              </Flex>
            )}
          </Column>
        )}

        {/* Description & Actions Column */}
        {(description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-l" onBackground="neutral-medium">
                {description}
              </Text>
            )}

            {/* Action Buttons */}
            <Flex gap="12" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ 
                    margin: "0", 
                    width: "fit-content",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: "var(--brand-alpha-weak)",
                    transition: "all 0.2s ease",
                  }}
                  href={href}
                >
                  <Flex gap="8" vertical="center">
                    <Icon name="book" size="xs" />
                    <Text variant="body-default-s" onBackground="brand-strong">
                      Case Study
                    </Text>
                  </Flex>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="externalLink"
                  style={{ 
                    margin: "0", 
                    width: "fit-content",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: "var(--neutral-alpha-weak)",
                    transition: "all 0.2s ease",
                  }}
                  href={link}
                >
                  <Flex gap="8" vertical="center">
                    <Icon name="globe" size="xs" />
                    <Text variant="body-default-s">
                      Live Project
                    </Text>
                  </Flex>
                </SmartLink>
              )}
            </Flex>

            {/* Stats/Badges */}
            <Flex gap="8" wrap>
              <Badge background="brand-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                Featured
              </Badge>
              {year && (
                <Badge background="neutral-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                  {year}
                </Badge>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
