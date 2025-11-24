"use client";

import React, { useState } from "react";
import { Badge, Button, Column, Flex, Heading, Icon, Input, RevealFx, Text } from "@once-ui-system/core";

import { about, person } from "@/resources";

const heroParagraph = `I partner with founders and product teams who need sharp interfaces and applied AI/ML execution. If you’re building something bold and want a hands-on engineer, let’s make it real.`;
const heroSupporting = `Clear milestones, async-friendly updates, and an obsession with polish so your release feels intentional from first demo to final deploy.`;
const scheduleCallLink = about?.calendar?.link ?? "https://cal.com";

const highlightStats = [
  {
    icon: "rocket" as const,
    label: "Avg. response time",
    value: "< 24 hours",
    detail: "Most replies land same day.",
  },
  {
    icon: "calendar" as const,
    label: "Kickoff availability",
    value: "Early Jan 2026",
    detail: "Two partner slots remain.",
  },
  {
    icon: "document" as const,
    label: "Launches shipped",
    value: "40+ products",
    detail: "From MVPs to scale-up rollouts.",
  },
];

const collaborationModes = [
  { label: "AI/ML prototyping", detail: "Rapid experimentation for new assistants." },
  { label: "Product engineering", detail: "Ship end-to-end experiences with polish." },
  { label: "Advisory & audits", detail: "Pair on architecture and velocity." },
];

const contactDetails = [
  {
    icon: "home" as const,
    label: "Location",
    value: person.location ?? "India",
  },
  {
    icon: "globe" as const,
    label: "Timezone",
    value: "IST (UTC+5:30)",
  },
  {
    icon: "email" as const,
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
  },
];

const workflowSteps = [
  {
    title: "Share context",
    detail: "Send goals, constraints, and any existing links. NDA available.",
  },
  {
    title: "Collaborative audit",
    detail: "I review the material and return options that balance scope + speed.",
  },
  {
    title: "Execution plan",
    detail: "Within 48 hours you have milestones, pricing, and kickoff date.",
  },
];

const contactChannels = [
  {
    icon: "email" as const,
    label: "Detailed brief",
    value: person.email,
    description: "Best for docs, Figma, or Loom links. Expect a same-day response.",
    href: `mailto:${person.email}`,
  },
  {
    icon: "calendar" as const,
    label: "15‑minute call",
    value: "Schedule via Cal.com",
    description: "Perfect for fast scoping or chemistry checks.",
    href: scheduleCallLink,
  },
  {
    icon: "document" as const,
    label: "Share context",
    value: "Use the form below",
    description: "Outline goals and I’ll reply with a proposed plan.",
  },
];

const actions = [
  { label: "Book intro call", icon: "calendar" as const, href: scheduleCallLink },
  { label: "GitHub", icon: "github" as const, href: "https://github.com/alan61503" },
  { label: "LinkedIn", icon: "linkedin" as const, href: "https://www.linkedin.com/in/alan-chris-disilva/" },
  { label: "Email", icon: "email" as const, href: `mailto:${person.email}` },
];

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData(initialFormState);
    }, 1500);
  };

  return (
    <div className="page-wrapper contact-wrapper page-background">
      <Column fillWidth gap="xl" className="contact-inner">
        <RevealFx translateY="6" delay={0.1}>
          <Column gap="m" align="center" horizontal="center" className="contact-hero">
            <Badge
              background="brand-alpha-weak"
              onBackground="brand-strong"
              textVariant="label-default-s"
              paddingX="12"
              paddingY="4"
            >
              Currently booking Q1 builds
            </Badge>
            <Heading variant="display-strong-l" align="center">
              Let’s move your next launch from brief to beta
            </Heading>
            <Column maxWidth="m" gap="s">
              <Text variant="body-default-l" onBackground="neutral-medium" align="center">
                {heroParagraph}
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                {heroSupporting}
              </Text>
            </Column>

            <Flex gap="m" wrap horizontal="center" className="contact-pill-group">
              {collaborationModes.map((mode) => (
                <div key={mode.label} className="contact-pill">
                  <Text variant="label-default-s">{mode.label}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {mode.detail}
                  </Text>
                </div>
              ))}
            </Flex>

            <div className="contact-highlight-grid">
              {highlightStats.map((highlight) => (
                <div key={highlight.label} className="contact-highlight">
                  <Flex gap="m" vertical="center">
                    <div className="contact-highlight__icon">
                      <Icon name={highlight.icon} size="s" onBackground="brand-strong" />
                    </div>
                    <Column gap="4">
                      <Text variant="label-default-s" onBackground="neutral-medium">
                        {highlight.label}
                      </Text>
                      <Text variant="heading-strong-s">{highlight.value}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {highlight.detail}
                      </Text>
                    </Column>
                  </Flex>
                </div>
              ))}
            </div>
          </Column>
        </RevealFx>

        <RevealFx translateY="8" delay={0.2}>
          <div className="contact-grid">
            <Column
              gap="l"
              padding="xl"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              className="contact-card contact-card--info"
            >
              <Column gap="s">
                <Heading variant="heading-strong-l">Ways to start the conversation</Heading>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Pick the channel that suits you best. I’ll meet you there.
                </Text>
              </Column>

              <Column gap="m">
                {contactDetails.map((detail) => (
                  <Flex key={detail.label} gap="m" vertical="center">
                    <div className="contact-detail__icon">
                      <Icon name={detail.icon} size="s" onBackground="brand-strong" />
                    </div>
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

              <div className="contact-timeline">
                {workflowSteps.map((step, index) => (
                  <div key={step.title} className="contact-timeline__item">
                    <span className="contact-timeline__index">{index + 1}</span>
                    <Column gap="4">
                      <Text variant="body-strong-m">{step.title}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {step.detail}
                      </Text>
                    </Column>
                  </div>
                ))}
              </div>

              <div className="contact-methods">
                {contactChannels.map((channel) => (
                  <div key={channel.label} className="contact-method">
                    <div className="contact-method__icon">
                      <Icon name={channel.icon} size="s" onBackground="brand-strong" />
                    </div>
                    <Column gap="2">
                      <Text variant="body-strong-m">{channel.label}</Text>
                      {channel.href ? (
                        <a href={channel.href} className="contact-method__value" rel="noreferrer">
                          {channel.value}
                        </a>
                      ) : (
                        <Text variant="label-default-s" onBackground="neutral-medium">
                          {channel.value}
                        </Text>
                      )}
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {channel.description}
                      </Text>
                    </Column>
                  </div>
                ))}
              </div>

              <div className="contact-actions">
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
              className="contact-card contact-card--form"
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
                    <div className="contact-form-grid">
                      <Column gap="8">
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
                      <Column gap="8">
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
                    </div>

                    <div className="contact-form-grid">
                      <Column gap="8">
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
                      </Column>
                      <Column gap="8">
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
                      </Column>
                    </div>

                    <div className="contact-form-grid">
                      <Column gap="8">
                        <Input
                          id="company"
                          label="Company or team"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Startup, studio, or solo builder"
                          className="contact-input"
                        />
                      </Column>
                      <Column gap="8">
                        <Input
                          id="projectType"
                          label="Project focus"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          placeholder="e.g. AI assistant, product revamp"
                          className="contact-input"
                        />
                      </Column>
                    </div>

                    <div className="contact-form-grid">
                      <Column gap="8">
                        <label htmlFor="budget" className="contact-label">
                          Budget range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="contact-select"
                        >
                          <option value="">Select a range</option>
                          <option value="<5k">Under $5k</option>
                          <option value="5-15k">$5k – $15k</option>
                          <option value="15-30k">$15k – $30k</option>
                          <option value="30k+">$30k+</option>
                        </select>
                      </Column>
                      <Column gap="8">
                        <Input
                          id="timeline"
                          label="Target launch / timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          placeholder="e.g. beta in February"
                          className="contact-input"
                        />
                      </Column>
                    </div>

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
                        placeholder="Share context, goals, constraints, timelines, or links so we can dive straight in."
                      />
                      <Text variant="body-default-xs" onBackground="neutral-weak">
                        I only see what you share here. NDAs are available on request.
                      </Text>
                    </Column>

                    <Flex horizontal="space-between" vertical="center" wrap gap="m" paddingTop="m">
                      <Text variant="label-default-s" onBackground="neutral-medium">
                        You’ll get a reply within one business day.
                      </Text>
                      <Button type="submit" size="l" variant="primary" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send message"}
                      </Button>
                    </Flex>
                  </Column>
                </form>
              )}
            </Column>
          </div>
        </RevealFx>
      </Column>
    </div>
  );
}
