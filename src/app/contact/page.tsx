"use client";

import React, { useState } from "react";
import { 
  Column, 
  Flex, 
  Heading, 
  Text, 
  Input, 
  Button,
  RevealFx
} from "@once-ui-system/core";
import { person } from "@/resources";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <Column 
      maxWidth="m" 
      horizontal="center" 
      paddingX="l" 
      paddingY="xl"
      gap="2xl"
    >
      {/* Hero Section */}
      <RevealFx translateY="8" delay={0.1}>
        <Column 
          fillWidth 
          horizontal="center" 
          align="center" 
          gap="m"
          paddingY="l"
        >
          <Heading 
            variant="display-strong-xl"
            align="center"
          >
            Get in Touch
          </Heading>
          <Column maxWidth={24}>
            <Text
              variant="body-default-l"
              onBackground="neutral-medium"
              align="center"
            >
              Let's discuss your next project or just say hello.
            </Text>
          </Column>
        </Column>
      </RevealFx>

      {/* Contact Options */}
      <RevealFx translateY="8" delay={0.2}>
        <Flex 
          fillWidth 
          gap="m" 
          wrap
          horizontal="center"
        >
          <Button
            href={`mailto:${person.email}`}
            variant="secondary"
            size="l"
            prefixIcon="email"
          >
            Email
          </Button>
          <Button
            href="https://www.linkedin.com/in/alan-chris-disilva/"
            variant="secondary"
            size="l"
            prefixIcon="linkedin"
          >
            LinkedIn
          </Button>
          <Button
            href="https://github.com/alan61503"
            variant="secondary"
            size="l"
            prefixIcon="github"
          >
            GitHub
          </Button>
        </Flex>
      </RevealFx>

      {/* Divider */}
      <Column fillWidth paddingY="m">
        <div style={{
          width: "100%",
          height: "1px",
          background: "var(--neutral-alpha-weak)"
        }} />
      </Column>

      {/* Contact Form */}
      <RevealFx translateY="8" delay={0.3}>
        <Column
          fillWidth
          gap="xl"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          {submitted ? (
            <Column 
              padding="xl" 
              radius="l"
              border="neutral-alpha-weak"
              gap="m"
              horizontal="center"
              align="center"
            >
              <Heading variant="heading-strong-l" align="center">
                Message Sent ✓
              </Heading>
              <Column maxWidth={24}>
                <Text variant="body-default-m" onBackground="neutral-medium" align="center">
                  Thanks for reaching out. I'll get back to you soon.
                </Text>
              </Column>
              <Button
                variant="tertiary"
                size="m"
                onClick={() => setSubmitted(false)}
              >
                Send Another
              </Button>
            </Column>
          ) : (
            <form onSubmit={handleSubmit}>
              <Column gap="l">
                <Input
                  id="contact-name"
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  id="contact-email"
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Column gap="8">
                  <Text variant="label-default-s" onBackground="neutral-strong">
                    Message
                  </Text>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      minHeight: 140,
                      padding: "var(--spacing-m)",
                      borderRadius: "var(--static-radius-m)",
                      border: "1px solid var(--neutral-alpha-weak)",
                      backgroundColor: "var(--surface-background)",
                      color: "var(--neutral-on-background)",
                      fontSize: "var(--body-default-m-font-size)",
                      lineHeight: "var(--body-default-m-line-height)",
                      fontFamily: "var(--font-body)",
                      resize: "vertical",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                      e.target.style.borderColor = "var(--neutral-alpha-medium)";
                    }}
                    onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                      e.target.style.borderColor = "var(--neutral-alpha-weak)";
                    }}
                  />
                </Column>
                <Button
                  type="submit"
                  size="l"
                  variant="primary"
                  fillWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </Column>
            </form>
          )}
        </Column>
      </RevealFx>
    </Column>
  );
}
