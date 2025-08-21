"use client";

import React, { useState } from "react";
import { 
  Column, 
  Flex, 
  Heading, 
  Text, 
  Input, 
  Button, 
  IconButton,
  Background,
  RevealFx
} from "@once-ui-system/core";
import { person, social } from "@/resources";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
  };

  return (
    <RevealFx translateY="16" delay={0.8}>
      <Column
        fillWidth
        padding="xl"
        radius="l"
        marginBottom="m"
        horizontal="center"
        align="center"
        background="surface"
        border="neutral-alpha-weak"
        style={{
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background Effects */}
        <Background
          top="0"
          position="absolute"
          mask={{
            x: 50,
            y: 0,
            radius: 100,
            cursor: false
          }}
          gradient={{
            display: true,
            opacity: 30,
            x: 50,
            y: 0,
            width: 100,
            height: 100,
            tilt: 0,
            colorStart: "brand-background-strong",
            colorEnd: "static-transparent",
          }}
          dots={{
            display: true,
            opacity: 20,
            size: "2",
            color: "brand-on-background-weak",
          }}
        />

        {/* Section Header */}
        <Column horizontal="center" align="center" marginBottom="xl">
          <Heading 
            marginBottom="m" 
            variant="display-strong-s"
            style={{ position: "relative", zIndex: 1 }}
          >
            Let's Connect
          </Heading>
          <Text
            style={{
              position: "relative",
              maxWidth: "var(--responsive-width-s)",
              zIndex: 1,
              textAlign: "center"
            }}
            wrap="balance"
            onBackground="neutral-medium"
            variant="body-default-l"
          >
            Have a project in mind or just want to chat? I'd love to hear from you.
          </Text>
        </Column>

        {/* Contact Form and Info */}
        <Flex fillWidth gap="xl" mobileDirection="column" style={{ position: "relative", zIndex: 1 }}>
          {/* Contact Form */}
          <Column flex={2} gap="m">
            <form onSubmit={handleSubmit}>
              <Column gap="m">
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  size={2}
                />
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  size={2}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    minHeight: 120,
                    padding: 12,
                    borderRadius: "var(--static-radius-m)",
                    border: "1px solid var(--neutral-alpha-medium)",
                    backgroundColor: "var(--surface-background)",
                    color: "var(--neutral-on-background)",
                    fontSize: "var(--body-default-m-font-size)",
                    lineHeight: "var(--body-default-m-line-height)",
                    fontFamily: "var(--font-body)",
                    resize: "vertical",
                    outline: "none",
                    transition: "border-color 0.2s ease"
                  }}
                  onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                    e.target.style.borderColor = "var(--brand-alpha-strong)";
                  }}
                  onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                    e.target.style.borderColor = "var(--neutral-alpha-medium)";
                  }}
                />
                <Button
                  type="submit"
                  size="l"
                  variant="primary"
                  fillWidth
                  style={{ marginTop: 8 }}
                >
                  Send Message
                </Button>
              </Column>
            </form>
          </Column>
          {/* Contact Information */}
          <Column flex={1} gap="l" align="center" horizontal="center" style={{ textAlign: "center", width: "100%", justifyContent: "center" }}>
            <Heading variant="heading-strong-m" marginBottom="m" style={{ textAlign: "center", margin: "0 auto" }}>
              Get in Touch
            </Heading>
            <Column gap="m" style={{ alignItems: "center" }}>
              <Flex gap="m" vertical="center">
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--brand-background-strong)",
                  flexShrink: 0
                }} />
                <Column gap="4">
                  <Text variant="body-strong-m">Alan Chris Dsilva</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Software Engineer
                  </Text>
                </Column>
              </Flex>

              <Flex gap="m" vertical="center">
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--brand-background-strong)",
                  flexShrink: 0
                }} />
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Devadan Hall, Christ University, Bangalore
                </Text>
              </Flex>

              <Flex gap="m" vertical="center">
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--brand-background-strong)",
                  flexShrink: 0
                }} />
                <Text variant="body-default-m">
                  <a 
                    href="tel:+917558864498"
                    style={{ 
                      color: "inherit", 
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = "var(--brand-on-background)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = "inherit";
                    }}
                  >
                    +91 75588 64498
                  </a>
                </Text>
              </Flex>

              <Flex gap="m" vertical="center">
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--brand-background-strong)",
                  flexShrink: 0
                }} />
                <Text variant="body-default-m">
                  <a 
                    href="mailto:alan@email.com"
                    style={{ 
                      color: "inherit", 
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = "var(--brand-on-background)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = "inherit";
                    }}
                  >
                    alanchrisdisilva@email.com
                  </a>
                </Text>
              </Flex>
            </Column>

            {/* Social Media Icons removed as requested */}
          </Column>
        </Flex>
      </Column>
    </RevealFx>
  );
}; 