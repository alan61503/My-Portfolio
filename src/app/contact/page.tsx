"use client";

import React, { useState } from "react";
import { Badge, Button, Column, Flex, Heading, Icon, IconButton, Input, RevealFx, Text } from "@once-ui-system/core";

import { about, person, social } from "@/resources";

const contactHighlights = [
  { icon: "email" as const, label: "Email", value: person.email, href: `mailto:${person.email}` },
  { icon: "calendar" as const, label: "15‑min call", value: "Book on Cal.com", href: about.calendar?.link ?? "https://cal.com" },
  { icon: "home" as const, label: "Based in", value: person.location ?? "India" },
];

// Get GitHub and LinkedIn from social array
const githubLink = social.find((s) => s.name === "GitHub")?.link;
const linkedinLink = social.find((s) => s.name === "LinkedIn")?.link;

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Contact form:", formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData(initialFormState);
    }, 1200);
  };

  return (
    <Column 
      className="contact-page"
      as="section" 
      gap="xl" 
      paddingTop="56"
      paddingBottom="40"
      paddingX="l" 
      maxWidth="l" 
      horizontal="center"
      fillWidth
      style={{
        paddingLeft: "clamp(1rem, 4vw, 2.5rem)",
        paddingRight: "clamp(1rem, 4vw, 2.5rem)",
      }}
    >
      <RevealFx translateY={6}>
        <Column 
          align="center" 
          horizontal="center" 
          gap="m" 
          fillWidth
          style={{ 
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Badge 
            background="brand-alpha-weak" 
            onBackground="brand-strong" 
            textVariant="label-default-l"
            style={{
              paddingLeft: "clamp(20px, 3vw, 32px)",
              paddingRight: "clamp(20px, 3vw, 32px)",
              paddingTop: "clamp(10px, 2vw, 14px)",
              paddingBottom: "clamp(10px, 2vw, 14px)",
              fontSize: "clamp(14px, 2vw, 16px)",
              fontWeight: 600,
              letterSpacing: "0.5px"
            }}
          >
            Contact
          </Badge>
          <Heading 
            variant="display-strong-m" 
            align="center"
            style={{ 
              textAlign: "center",
              width: "100%"
            }}
          >
            Minimal touchpoint. Maximum clarity.
          </Heading>
          <Column maxWidth="s" horizontal="center" style={{ margin: "0 auto" }}>
            <Text 
              variant="body-default-l" 
              onBackground="neutral-medium" 
              align="center"
              style={{ 
                textAlign: "center"
              }}
            >
              Drop a quick note, book a short call, or send product context. I&apos;ll reply within one business day with
              next steps.
            </Text>
          </Column>
        </Column>
      </RevealFx>

      <RevealFx translateY="8" delay={0.1}>
        <Flex
          className="contact-layout"
          gap="24"
          wrap
          horizontal="center"
          mobileDirection="column"
          fillWidth
          style={{
            alignItems: "stretch",
          }}
        >
          <Column
            className="contact-card"
            flex={1}
            gap="24"
            padding="32"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            fillWidth
            style={{ 
              minWidth: "280px",
              maxWidth: "420px",
              flexBasis: "420px",
              padding: "clamp(24px, 4vw, 32px)"
            }}
          >
            <Heading variant="heading-strong-l" style={{ fontSize: "20px", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "4px" }}>
              Ways to reach me
            </Heading>
            <Column gap="20">
              {contactHighlights.map((item) => (
                <Flex key={item.label} gap="16" vertical="center">
                  <Flex
                    horizontal="center"
                    vertical="center"
                    radius="l"
                    style={{ 
                      width: 48, 
                      height: 48, 
                      background: "var(--brand-alpha-weak)",
                      flexShrink: 0
                    }}
                  >
                    <Icon name={item.icon} size="m" onBackground="brand-strong" />
                  </Flex>
                  <Column gap="4" style={{ flex: 1, minWidth: 0 }}>
                    <Text 
                      variant="label-default-s" 
                      onBackground="neutral-medium"
                      style={{ 
                        fontSize: "12px", 
                        fontWeight: 500, 
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        opacity: 0.7
                      }}
                    >
                      {item.label}
                    </Text>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        style={{ 
                          color: "inherit", 
                          textDecoration: "none",
                          display: "block"
                        }}
                      >
                        <Text 
                          variant="body-default-m"
                          style={{ 
                            fontSize: "15px", 
                            fontWeight: 400,
                            lineHeight: "1.5",
                            wordBreak: "break-word"
                          }}
                        >
                          {item.value}
                        </Text>
                      </a>
                    ) : (
                      <Text 
                        variant="body-default-m"
                        style={{ 
                          fontSize: "15px", 
                          fontWeight: 400,
                          lineHeight: "1.5"
                        }}
                      >
                        {item.value}
                      </Text>
                    )}
                  </Column>
                </Flex>
              ))}
            </Column>
            
            {/* Social Links Section */}
            {(githubLink || linkedinLink) && (
              <Column gap="12" style={{ paddingTop: "8px" }}>
                <Text 
                  variant="label-default-s" 
                  onBackground="neutral-medium"
                  style={{ 
                    fontSize: "12px", 
                    fontWeight: 500, 
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    opacity: 0.7,
                    marginBottom: "4px"
                  }}
                >
                  Connect
                </Text>
                <Flex gap="12">
                  {githubLink && (
                    <IconButton
                      href={githubLink}
                      icon="github"
                      tooltip="GitHub"
                      size="m"
                      variant="ghost"
                      style={{
                        width: "40px",
                        height: "40px"
                      }}
                    />
                  )}
                  {linkedinLink && (
                    <IconButton
                      href={linkedinLink}
                      icon="linkedin"
                      tooltip="LinkedIn"
                      size="m"
                      variant="ghost"
                      style={{
                        width: "40px",
                        height: "40px"
                      }}
                    />
                  )}
                </Flex>
              </Column>
            )}
            
            {/* Action Buttons */}
            <Flex className="contact-actions" gap="12" wrap style={{ paddingTop: "8px" }}>
              <Button 
                href={`mailto:${person.email}`} 
                variant="primary" 
                prefixIcon="email"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "10px 20px",
                  height: "auto"
                }}
              >
                Email me
              </Button>
              <Button 
                href={about.calendar?.link ?? "https://cal.com"} 
                variant="secondary" 
                prefixIcon="calendar"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "10px 20px",
                  height: "auto"
                }}
              >
                Schedule call
              </Button>
            </Flex>
          </Column>

          <Column
            className="contact-form-card"
            flex={2}
            gap="l"
            padding="xl"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            fillWidth
            style={{ 
              minWidth: "320px",
              maxWidth: "600px",
              flexBasis: "600px",
              padding: "clamp(24px, 4vw, 32px)"
            }}
          >
            {submitted ? (
              <Column gap="m" align="center" horizontal="center">
                <Icon name="rocket" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-m" align="center">
                  Message sent
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-medium" align="center">
                  Thanks for reaching out. I&apos;ll reply shortly with the next steps.
                </Text>
                <Button variant="secondary" onClick={() => setSubmitted(false)}>
                  Send another
                </Button>
              </Column>
            ) : (
              <>
                <Heading variant="heading-strong-m">Send a quick note</Heading>
                <form onSubmit={handleSubmit}>
                  <Column gap="m">
                    <Input
                      id="name"
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Column gap="8">
                      <Text variant="label-default-s" onBackground="neutral-strong">
                        Message
                      </Text>
                      <textarea
                        name="message"
                        rows={5}
                        style={{
                          width: "100%",
                          borderRadius: "12px",
                          border: "1px solid var(--neutral-alpha-weak)",
                          background: "var(--surface-background)",
                          color: "var(--neutral-on-background)",
                          padding: "0.85rem 1rem",
                          fontSize: "1rem",
                          fontFamily: "inherit",
                        }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Share context, goals, or timelines."
                      />
                    </Column>
                    <Flex horizontal="end">
                      <Button type="submit" size="m" variant="primary" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send message"}
                      </Button>
                    </Flex>
                  </Column>
                </form>
              </>
            )}
          </Column>
        </Flex>
      </RevealFx>
    </Column>
  );
}
