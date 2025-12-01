"use client";

import React, { useState } from "react";
import { Badge, Button, Column, Flex, Heading, Icon, Input, RevealFx, Text } from "@once-ui-system/core";

import { about, person } from "@/resources";

const contactHighlights = [
  { icon: "email" as const, label: "Email", value: person.email, href: `mailto:${person.email}` },
  { icon: "calendar" as const, label: "15‑min call", value: "Book on Cal.com", href: about.calendar?.link ?? "https://cal.com" },
  { icon: "home" as const, label: "Based in", value: person.location ?? "India" },
];

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
    <Column as="section" gap="xl" paddingY="40" paddingX="l" maxWidth="m" horizontal="center">
      <RevealFx translateY="6">
        <Column align="center" horizontal="center" gap="m" textAlign="center">
          <Badge background="brand-alpha-weak" onBackground="brand-strong" textVariant="label-default-s">
            Contact
          </Badge>
          <Heading variant="display-strong-m" align="center">
            Minimal touchpoint. Maximum clarity.
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium" align="center" maxWidth="s">
            Drop a quick note, book a short call, or send product context. I’ll reply within one business day with
            next steps.
          </Text>
        </Column>
      </RevealFx>

      <RevealFx translateY="8" delay={0.1}>
        <Flex
          gap="l"
          wrap
          style={{
            alignItems: "stretch",
          }}
        >
          <Column
            flex={1}
            gap="m"
            padding="xl"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ minWidth: 280 }}
          >
            <Heading variant="heading-strong-m">Ways to reach me</Heading>
            <Column gap="m">
              {contactHighlights.map((item) => (
                <Flex key={item.label} gap="m" vertical="center">
                  <Flex
                    horizontal="center"
                    vertical="center"
                    radius="l"
                    style={{ width: 44, height: 44, background: "var(--brand-alpha-weak)" }}
                  >
                    <Icon name={item.icon} size="s" onBackground="brand-strong" />
                  </Flex>
                  <Column gap="2">
                    <Text variant="label-default-s" onBackground="neutral-medium">
                      {item.label}
                    </Text>
                    {item.href ? (
                      <a href={item.href} style={{ color: "inherit", textDecoration: "none" }}>
                        <Text variant="body-default-m">{item.value}</Text>
                      </a>
                    ) : (
                      <Text variant="body-default-m">{item.value}</Text>
                    )}
                  </Column>
                </Flex>
              ))}
            </Column>
            <Flex gap="m" wrap>
              <Button href={`mailto:${person.email}`} variant="primary" prefixIcon="email">
                Email me
              </Button>
              <Button href={about.calendar?.link ?? "https://cal.com"} variant="secondary" prefixIcon="calendar">
                Schedule call
              </Button>
            </Flex>
          </Column>

          <Column
            flex={2}
            gap="l"
            padding="xl"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ minWidth: 320 }}
          >
            {submitted ? (
              <Column gap="m" align="center" horizontal="center">
                <Icon name="rocket" size="l" onBackground="brand-strong" />
                <Heading variant="heading-strong-m" align="center">
                  Message sent
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-medium" align="center">
                  Thanks for reaching out. I’ll reply shortly with the next steps.
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
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
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

                    <Input
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(0,0,0,0.1)",
                        borderRadius: "var(--radius-l)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                    />

                    <Flex direction="column" gap="8">
                      <Text variant="label-default-s" onBackground="neutral-strong">
                        Tell me about your project
                      </Text>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={8}
                        placeholder="Describe your project, goals, timeline, and any specific requirements..."
                        style={{
                          width: "100%",
                          padding: "var(--static-space-16)",
                          fontSize: "var(--font-size-m)",
                          lineHeight: "var(--line-height-m)",
                          background: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(0,0,0,0.1)",
                          borderRadius: "var(--radius-l)",
                          color: "var(--on-background-neutral-strong)",
                          fontFamily: "inherit",
                          resize: "vertical",
                          transition: "all 0.2s ease",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--input-border-active)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(139, 92, 246, 0.1), 0 4px 12px rgba(0,0,0,0.1)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                        }}
                      />
                    </Flex>
                  </Flex>

                  <Button
                    type="submit"
                    size="l"
                    variant="primary"
                    disabled={isSubmitting}
                    fillWidth
                    style={{
                      background: "linear-gradient(135deg, var(--brand-background-strong) 0%, var(--brand-background-medium) 100%)",
                      boxShadow: "0 8px 24px rgba(139, 92, 246, 0.3)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(139, 92, 246, 0.4)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(139, 92, 246, 0.3)";
                    }}
                  >
                    {isSubmitting ? (
                      <Flex gap="s" vertical="center">
                        <div style={{
                          width: "16px",
                          height: "16px",
                          border: "2px solid var(--on-background-brand-strong)",
                          borderTop: "2px solid transparent",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                        }} />
                        Sending...
                      </Flex>
                    ) : (
                      <Flex gap="s" vertical="center">
                        <Icon name="send" size="s" onBackground="brand-strong" />
                        Send Message
                      </Flex>
                    )}
                  </Button>
                </Flex>
              </form>
            )}
          </Flex>

          {/* Contact Info & Social */}
          <Flex
            fillWidth
            direction="column"
            gap="l"
            style={{ flex: "1", minWidth: "300px" }}
          >
            {/* Contact Methods */}
            <Flex
              direction="column"
              gap="m"
              padding="xl"
              border="neutral-medium"
              borderStyle="solid"
              radius="xl"
              background="surface"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <Flex gap="m" vertical="center">
                <Icon name="mail" size="m" onBackground="brand-strong" />
                <Heading variant="heading-strong-l">Get In Touch</Heading>
              </Flex>

              <Flex direction="column" gap="l">
                <Flex
                  padding="l"
                  border="neutral-medium"
                  borderStyle="solid"
                  radius="l"
                  background="surface"
                  gap="m"
                  vertical="center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(139, 92, 246, 0.15)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                  }}
                  onClick={() => window.location.href = `mailto:${person.email}`}
                >
                  <Flex
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "linear-gradient(135deg, var(--brand-background-strong) 0%, var(--brand-background-medium) 100%)",
                      borderRadius: "var(--radius-l)",
                      flexShrink: 0,
                    }}
                    vertical="center"
                    horizontal="center"
                  >
                    <Icon name="mail" size="l" onBackground="brand-strong" />
                  </Flex>
                  <Flex direction="column" gap="4">
                    <Text variant="label-default-s" onBackground="neutral-medium">
                      Email
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-strong" style={{ fontWeight: 500 }}>
                      {person.email}
                    </Text>
                  </Flex>
                </Flex>

                {person.location && (
                  <Flex
                    padding="l"
                    border="neutral-medium"
                    borderStyle="solid"
                    radius="l"
                    background="surface"
                    gap="m"
                    vertical="center"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                      transition: "all 0.2s ease",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(99, 102, 241, 0.15)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                    }}
                  >
                    <Flex
                      style={{
                        width: "56px",
                        height: "56px",
                        background: "linear-gradient(135deg, var(--accent-background-strong) 0%, var(--accent-background-medium) 100%)",
                        borderRadius: "var(--radius-l)",
                        flexShrink: 0,
                      }}
                      vertical="center"
                      horizontal="center"
                    >
                      <Icon name="globe" size="l" onBackground="accent-strong" />
                    </Flex>
                    <Flex direction="column" gap="4">
                      <Text variant="label-default-s" onBackground="neutral-medium">
                        Location
                      </Text>
                      <Text variant="body-default-m" onBackground="neutral-strong" style={{ fontWeight: 500 }}>
                        {person.location}
                      </Text>
                    </Flex>
                  </Flex>
                )}
              </Flex>
            </Flex>

            {social && social.length > 0 && (
              <Flex
                direction="column"
                gap="m"
                padding="xl"
                border="neutral-medium"
                borderStyle="solid"
                radius="xl"
                background="surface"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <Flex gap="m" vertical="center">
                  <Icon name="link" size="m" onBackground="brand-strong" />
                  <Heading variant="heading-strong-l">Connect Online</Heading>
                </Flex>
                <Flex gap="m" wrap>
                  {social.map((link) => (
                    <Button
                      key={link.name}
                      href={link.link}
                      size="l"
                      variant="tertiary"
                      prefixIcon={link.icon}
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)",
                        border: "1px solid rgba(0,0,0,0.1)",
                        transition: "all 0.2s ease",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
                      }}
                    >
                      {link.name}
                    </Button>
                  ))}
                </Flex>
              </Flex>
            )}
          </Flex>
        </Flex>
      </RevealFx>

      {/* Floating Decorative Elements */}
      <RevealFx translateY="12" delay={0.2}>
        <Flex
          style={{
            marginTop: "var(--static-space-48)",
            opacity: 0.4,
          }}
          gap="l"
        >
          <div style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--brand-background-strong) 0%, var(--brand-background-medium) 100%)",
            animation: "float 3s ease-in-out infinite",
          }} />
          <div style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent-background-strong) 0%, var(--accent-background-medium) 100%)",
            animation: "float 4s ease-in-out infinite reverse",
          }} />
          <div style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--success-background-strong) 0%, var(--success-background-medium) 100%)",
            animation: "float 2.5s ease-in-out infinite",
          }} />
          <div style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--warning-background-strong) 0%, var(--warning-background-medium) 100%)",
            animation: "float 3.5s ease-in-out infinite reverse",
          }} />
        </Flex>
      </RevealFx>
    </Flex>
  );
}