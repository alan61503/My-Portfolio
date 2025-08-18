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
          overflow: "hidden",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
          border: "1px solid rgba(6, 182, 212, 0.1)"
        }}
      >
        {/* Background Effects */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: 0
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
              maxWidth: "600px",
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
        <Flex 
          fillWidth 
          gap="xl" 
          mobileDirection="column"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Contact Form */}
          <Column flex={2} gap="m">
            <form onSubmit={handleSubmit}>
              <Column gap="m">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  size="l"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  size="l"
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
                    borderRadius: "8px",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    lineHeight: "1.5",
                    fontFamily: "inherit",
                    resize: "vertical",
                    outline: "none",
                    transition: "all 0.2s ease"
                  }}
                  onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                    e.target.style.borderColor = "rgba(6, 182, 212, 0.6)";
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  }}
                  onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                    e.target.style.borderColor = "rgba(6, 182, 212, 0.2)";
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
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
          <Column flex={1} gap="l">
            <Heading variant="heading-strong-m" marginBottom="m">
              Get in Touch
            </Heading>
            
            <Column gap="m">
              <Flex gap="m" vertical="center">
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#06B6D4",
                  flexShrink: 0
                }} />
                <Column gap={8}>
                  <Text variant="body-strong-s">Alan Chris Dsilva</Text>
                </Column>
              </Flex>

              <Flex gap="m" vertical="center">
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#06B6D4",
                  flexShrink: 0
                }} />
                <Text variant="body-strong-s" style={{ textAlign: "left" }}>
                  Devadan Hall,<br />
                  Christ University,<br />
                  Bangalore
                </Text>
              </Flex>

              <Flex gap="m" vertical="center">
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#06B6D4",
                  flexShrink: 0
                }} />
                <Text variant="body-default-s">
                  <a 
                    href="tel:+917558864498"
                    style={{ 
                      color: "inherit", 
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = "#06B6D4";
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
                  backgroundColor: "#06B6D4",
                  flexShrink: 0
                }} />
                <Text variant="body-default-s">
                  <a 
                    href="mailto:alanchrisdisilva@email.com"
                    style={{ 
                      color: "inherit", 
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.currentTarget.style.color = "#06B6D4";
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
          </Column>
        </Flex>
      </Column>
    </RevealFx>
  );
}; 