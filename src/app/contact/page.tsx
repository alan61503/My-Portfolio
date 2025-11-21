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
    <div
      style={{
        position: "relative",
        width: "100%",
        background: "linear-gradient(135deg, #03060f 0%, #050815 35%, #070b1d 100%)",
        minHeight: "100vh",
        padding: "5rem 0 4rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.22), transparent 50%), radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.18), transparent 45%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      <Column
        fillWidth
        gap="xl"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
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
                  <Flex
                    key={detail.label}
                    gap="m"
                    vertical="center"
                    padding="m"
                    radius="m"
                    style={{
                      border: "1px solid rgba(59, 130, 246, 0.25)",
                      background: "rgba(8, 12, 32, 0.8)",
                    }}
                  >
                    <Flex
                      horizontal="center"
                      vertical="center"
                      radius="m"
                      style={{
                        width: 40,
                        height: 40,
                        background: "rgba(37, 99, 235, 0.25)",
                      }}
                    >
                      <Icon name={detail.icon} size="s" onBackground="brand-strong" />
                    </Flex>
                    <Column gap="4">
                      <Text variant="label-default-s" onBackground="neutral-medium">
                        {detail.label}
                      </Text>
                      {detail.href ? (
                        <Button
                          href={detail.href}
                          variant="tertiary"
                          size="s"
                          prefixIcon={detail.icon}
                        >
                          {detail.value}
                        </Button>
                      ) : (
                        <Text variant="body-default-m">{detail.value}</Text>
                      )}
                    </Column>
                  </Flex>
                ))}
              </Column>

              <Flex gap="m" wrap>
                {actions.map((action) => (
                  <Button
                    key={action.label}
                    href={action.href}
                    variant="secondary"
                    size="m"
                    prefixIcon={action.icon}
                  >
                    {action.label}
                  </Button>
                ))}
              </Flex>
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
                    />

                    <Input
                      id="phone"
                      label="Phone number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Optional"
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
                        style={{
                          width: "100%",
                          padding: "var(--spacing-m)",
                          borderRadius: "var(--static-radius-m)",
                          border: "1px solid rgba(59, 130, 246, 0.4)",
                          backgroundColor: "rgba(2, 4, 14, 0.9)",
                          color: "var(--neutral-on-background-strong)",
                          fontSize: "var(--body-default-m-font-size)",
                          fontFamily: "var(--font-body)",
                          resize: "vertical",
                          outline: "none",
                          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                        }}
                        placeholder="Share context, goals, or timelines so we can dive straight in."
                        onFocus={(event) => {
                          event.currentTarget.style.borderColor = "rgba(14, 165, 233, 0.7)";
                          event.currentTarget.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.25)";
                        }}
                        onBlur={(event) => {
                          event.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.4)";
                          event.currentTarget.style.boxShadow = "none";
                        }}
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
