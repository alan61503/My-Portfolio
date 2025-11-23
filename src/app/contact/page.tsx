"use client";

import React, { useState } from "react";
import { Column, Flex, Heading, Text, Input, Button, RevealFx, Icon } from "@once-ui-system/core";
import { person } from "@/resources";

const heroParagraph = `I partner with founders and product teams who need sharp interfaces and applied AI/ML execution. If you’re building something bold and want a hands-on engineer, let’s make it real.`;

const contactDetails = [
  {
    icon: "home" as const,
    label: "Location",
    value: person.location ?? "India",
  },
  {
    icon: "email" as const,
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
  },
];

const actions = [
  { label: "GitHub", icon: "github" as const, href: "https://github.com/alan61503" },
  { label: "LinkedIn", icon: "linkedin" as const, href: "https://www.linkedin.com/in/alan-chris-disilva/" },
  { label: "Email", icon: "email" as const, href: `mailto:${person.email}` },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <div className="page-wrapper contact-wrapper">
      <div className="contact-overlay-radial" />
      <div className="contact-overlay-grid" />

      <Column fillWidth gap="xl" className="contact-inner">
        <RevealFx translateY="8" delay={0.1}>
          <Column gap="s" align="center" horizontal="center" style={{ textAlign: "center" }}>
            <Text variant="label-default-s" onBackground="accent-medium" style={{ letterSpacing: "0.18em" }}>
              CONTACT
            </Text>
            <Heading variant="display-strong-l" align="center">
              Crafted for dark mode experiences
            </Heading>
            <Column maxWidth="m">
              <Text variant="body-default-l" onBackground="neutral-medium" align="center">
                {heroParagraph}
              </Text>
            </Column>
          </Column>
        </RevealFx>

        <RevealFx translateY="8" delay={0.2}>
          <Flex
            fillWidth
            gap="xl"
            wrap
            style={{ alignItems: "stretch" }}
          >
            <Column
              gap="l"
              padding="xl"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              style={{
                flex: "1 1 360px",
                minWidth: 320,
                background: "rgba(4, 7, 20, 0.92)",
                borderColor: "rgba(37, 99, 235, 0.3)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(18px)",
              }}
            >
              <Column gap="m">
                {contactDetails.map((detail) => (
                  <Flex key={detail.label} gap="m" vertical="center" className="contact-panel contact-panel--info">
                    <Flex horizontal="center" vertical="center" radius="m" style={{ width: 40, height: 40, background: 'rgba(37,99,235,0.18)' }}>
                      <Icon name={detail.icon} size="s" onBackground="brand-strong" />
                    </Flex>
                    <Column gap="4">
                      <Text variant="label-default-s" onBackground="neutral-medium">
                        {detail.label}
                      </Text>
                      {detail.href ? (
                        <a href={detail.href} className="contact-note" rel="noreferrer">
                          {detail.value}
                        </a>
                      ) : (
                        <Text variant="body-default-m">{detail.value}</Text>
                      )}
                    </Column>
                  </Flex>
                ))}
              </Column>

              <div className="contact-actions" style={{ marginTop: 12 }}>
                {actions.map((action) => (
                  <Button key={action.label} href={action.href} size="m" variant="secondary" prefixIcon={action.icon}>
                    {action.label}
                  </Button>
                ))}
              </div>
            </Column>

            <Column
              gap="l"
              padding="xl"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              style={{
                flex: "1 1 420px",
                minWidth: 320,
                background: "rgba(3, 5, 18, 0.95)",
                borderColor: "rgba(37, 99, 235, 0.3)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(18px)",
              }}
            >
              {submitted ? (
                <Column gap="l" horizontal="center" vertical="center" paddingY="xl">
                  <Icon name="rocket" size="l" onBackground="brand-strong" />
                  <Heading variant="heading-strong-l" align="center">
                    Message sent
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium" align="center">
                    Thanks for reaching out. I’ll follow up shortly to plan the next steps together.
                  </Text>
                  <Button variant="tertiary" size="m" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </Column>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Column gap="l">
                    <Flex gap="m" wrap>
                      <Column gap="8" style={{ flex: "1 1 200px", minWidth: 200 }}>
                        <Input
                            id="firstName"
                            label="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="contact-input"
                          />
                      </Column>
                      <Column gap="8" style={{ flex: "1 1 200px", minWidth: 200 }}>
                        <Input
                          id="lastName"
                          label="Last name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="contact-input"
                        />
                      </Column>
                    </Flex>

                    <Input
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="contact-input"
                    />

                    <Input
                      id="phone"
                      label="Phone number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Optional"
                      className="contact-input"
                    />

                    <Column gap="8">
                      <Text variant="label-default-s" onBackground="neutral-strong">
                        Project details
                      </Text>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="contact-textarea"
                        placeholder="Share context, goals, or timelines so we can dive straight in."
                      />
                    </Column>

                    <Flex horizontal="end" paddingTop="m">
                      <Button type="submit" size="l" variant="primary" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send message"}
                      </Button>
                    </Flex>
                  </Column>
                </form>
              )}
            </Column>
          </Flex>
        </RevealFx>
      </Column>
    </div>
  );
}
