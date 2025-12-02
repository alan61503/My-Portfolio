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
