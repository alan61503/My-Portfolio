"use client";

import React from "react";
import Link from "next/link";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";

export default function Home() {
  const skills = [
    { name: "React & Next.js", icon: "react", color: "#61DAFB" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "Python & AI/ML", icon: "python", color: "#3776AB" },
    { name: "Node.js", icon: "nodejs", color: "#339933" },
  ];

  const featuredProjects = [
    {
      title: "Once UI Design System",
      description: "A customizable design system built with React and TypeScript",
      href: "/work/building-once-ui-a-customizable-design-system",
      tags: ["React", "TypeScript", "Design System"],
    },
    {
      title: "Portfolio Builder",
      description: "Simple yet powerful portfolio builder for developers",
      href: "/work/simple-portfolio-builder",
      tags: ["Next.js", "React", "UI/UX"],
    },
    {
      title: "Figma to Code Pipeline",
      description: "Automate design handovers with intelligent code generation",
      href: "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
      tags: ["Automation", "Design", "React"],
    },
  ];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingX="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section */}
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Flex gap="12" wrap>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Flex gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar
                      marginRight="8"
                      style={{ marginLeft: "-0.75rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
              <Button
                id="contact"
                data-border="rounded"
                href="/contact"
                variant="primary"
                size="m"
                weight="default"
              >
                Get in touch
              </Button>
            </Flex>
          </RevealFx>
        </Column>
      </Column>

      {/* Skills Section */}
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="l" paddingY="xl">
          <Heading variant="display-strong-s" align="center">
            Technologies I work with
          </Heading>
          <Flex
            fillWidth
            gap="m"
            wrap
            horizontal="center"
          >
            {skills.map((skill, index) => (
              <Column
                key={index}
                padding="l"
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
                gap="m"
                style={{
                  flex: "1 1 200px",
                  minWidth: "200px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Flex vertical="center" gap="m">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: `${skill.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text variant="heading-strong-l" style={{ color: skill.color }}>
                      {skill.icon === "react" && "⚛️"}
                      {skill.icon === "typescript" && "TS"}
                      {skill.icon === "python" && "🐍"}
                      {skill.icon === "nodejs" && "📦"}
                    </Text>
                  </div>
                  <Text variant="body-strong-m">{skill.name}</Text>
                </Flex>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Featured Projects Section */}
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth gap="l" paddingY="xl">
          <Flex fillWidth horizontal="space-between" vertical="center" wrap>
            <Heading variant="display-strong-s">Featured Projects</Heading>
            <Button
              href="/work"
              variant="tertiary"
              size="m"
              arrowIcon
            >
              View all projects
            </Button>
          </Flex>
          <Flex
            fillWidth
            gap="l"
            wrap
          >
            {featuredProjects.map((project, index) => (
              <Link key={index} href={project.href} style={{ textDecoration: "none", flex: "1 1 300px", minWidth: "300px" }}>
                <Column
                  padding="xl"
                  radius="l"
                  border="neutral-alpha-weak"
                  background="surface"
                  gap="m"
                  fillWidth
                  style={{
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.borderColor = "var(--brand-alpha-medium)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "var(--neutral-alpha-weak)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Heading variant="heading-strong-l">{project.title}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {project.description}
                  </Text>
                  <Flex gap="8" wrap>
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        background="brand-alpha-weak"
                        onBackground="brand-strong"
                        textVariant="label-default-s"
                        paddingX="8"
                        paddingY="4"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                </Column>
              </Link>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* CTA Section */}
      <RevealFx translateY="16" delay={1}>
        <Column
          fillWidth
          padding="xl"
          radius="l"
          background="brand-alpha-weak"
          gap="l"
          horizontal="center"
          align="center"
          style={{
            marginTop: "var(--spacing-xl)",
            marginBottom: "var(--spacing-xl)",
          }}
        >
          <Heading variant="display-strong-m" align="center">
            Let's work together
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="brand-medium"
            align="center"
            maxWidth="s"
          >
            Have a project in mind? Let's discuss how we can create something amazing together.
          </Text>
          <Flex gap="m" wrap>
            <Button
              href="/contact"
              variant="primary"
              size="l"
              arrowIcon
            >
              Get in touch
            </Button>
            <Button
              href={`mailto:${person.email}`}
              variant="secondary"
              size="l"
            >
              Send email
            </Button>
          </Flex>
        </Column>
      </RevealFx>
    </Column>
  );
}
