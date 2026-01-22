"use client";

import React from "react";
import { Column, Flex, Heading, Text, Button, RevealFx, Icon, Badge } from "@once-ui-system/core";
import { person } from "@/resources";

export default function Services() {
  const services = [
    {
      icon: "code",
      title: "Full-Stack Development",
      description: "End-to-end web application development using React, Next.js, Node.js, and modern databases. From concept to deployment.",
      features: ["Custom Web Apps", "API Development", "Database Design", "Cloud Deployment"],
      pricing: "Project-based",
    },
    {
      icon: "cpu",
      title: "AI/ML Solutions",
      description: "Intelligent systems powered by machine learning. Data analysis, predictive models, and AI integration for your business.",
      features: ["ML Model Development", "Data Analysis", "AI Integration", "Model Optimization"],
      pricing: "Consultation required",
    },
    {
      icon: "palette",
      title: "UI/UX Design & Development",
      description: "Beautiful, intuitive interfaces that users love. Design systems, component libraries, and pixel-perfect implementations.",
      features: ["Design Systems", "Responsive Design", "Component Libraries", "Prototyping"],
      pricing: "Project-based",
    },
    {
      icon: "server",
      title: "Backend Architecture",
      description: "Scalable server infrastructure, RESTful APIs, microservices, and database optimization for high-performance applications.",
      features: ["API Design", "Microservices", "Database Optimization", "Performance Tuning"],
      pricing: "Hourly/Project",
    },
    {
      icon: "zap",
      title: "Performance Optimization",
      description: "Speed up your existing applications. Code reviews, performance audits, and optimization strategies.",
      features: ["Code Review", "Performance Audit", "SEO Optimization", "Load Time Reduction"],
      pricing: "Hourly",
    },
    {
      icon: "users",
      title: "Technical Consulting",
      description: "Strategic technical guidance for your projects. Architecture decisions, tech stack selection, and best practices.",
      features: ["Tech Strategy", "Code Architecture", "Team Training", "Project Planning"],
      pricing: "Hourly/Retainer",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We discuss your goals, requirements, and vision for the project.",
    },
    {
      step: "02",
      title: "Planning",
      description: "I create a detailed roadmap with timelines, milestones, and deliverables.",
    },
    {
      step: "03",
      title: "Development",
      description: "Regular updates and iterations as I bring your project to life.",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Launch, deployment, and ongoing support to ensure success.",
    },
  ];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingX="l">
      {/* Hero Section */}
      <Column fillWidth paddingY="24" gap="l">
        <RevealFx translateY="4" fillWidth>
          <Column gap="m" align="center">
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
              What I Offer
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" align="center">
              Services & Expertise
            </Heading>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              align="center"
              maxWidth="s"
            >
              From full-stack development to AI/ML solutions, I help bring your ideas to life with quality and precision.
            </Text>
          </Column>
        </RevealFx>
      </Column>

      {/* Services Grid */}
      <Column fillWidth gap="l">
        {services.map((service, index) => (
          <RevealFx key={index} translateY="8" delay={0.1 + index * 0.05} fillWidth>
            <Column
              fillWidth
              gap="l"
              padding="xl"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
            >
              <Flex gap="12" vertical="center">
                <Flex
                  padding="12"
                  radius="m"
                  background="brand-alpha-weak"
                  style={{ minWidth: "48px", minHeight: "48px" }}
                  horizontal="center"
                  vertical="center"
                >
                  <Icon name={service.icon as any} size="m" onBackground="brand-strong" />
                </Flex>
                <Column gap="4" fillWidth>
                  <Heading variant="heading-strong-l">{service.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {service.pricing}
                  </Text>
                </Column>
              </Flex>

              <Text variant="body-default-l" onBackground="neutral-medium">
                {service.description}
              </Text>

              <Flex gap="8" wrap>
                {service.features.map((feature, i) => (
                  <Badge
                    key={i}
                    background="neutral-alpha-weak"
                    paddingX="12"
                     paddingY="4"
                    textVariant="body-default-s"
                  >
                    {feature}
                  </Badge>
                ))}
              </Flex>
            </Column>
          </RevealFx>
        ))}
      </Column>

      {/* Process */}
      <RevealFx translateY="8" delay={0.4} fillWidth>
        <Column fillWidth gap="l">
          <Column gap="8" align="center">
            <Heading variant="heading-strong-l" align="center">
              How We Work Together
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium" align="center" maxWidth="s">
              A streamlined process to ensure your project is delivered on time and exceeds expectations.
            </Text>
          </Column>

          <Flex fillWidth gap="m" wrap>
            {process.map((item, index) => (
              <Column
                key={index}
                gap="m"
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ flex: "1 1 220px", minWidth: "220px" }}
              >
                <Badge
                  background="brand-alpha-weak"
                  paddingX="12"
                   paddingY="4"
                  textVariant="heading-default-s"
                  style={{ width: "fit-content" }}
                >
                  {item.step}
                </Badge>
                <Heading variant="heading-strong-m">{item.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {item.description}
                </Text>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* CTA */}
      <RevealFx translateY="8" delay={0.5} fillWidth>
        <Column
          fillWidth
          gap="m"
          padding="xl"
          radius="l"
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          align="center"
        >
          <Heading variant="heading-strong-l" align="center">
            Ready to start your project?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium" align="center">
            Let&apos;s discuss how I can help you achieve your goals.
          </Text>
          <Flex gap="8" wrap horizontal="center">
            <Button variant="secondary" size="m" href="/work">
              View my work
            </Button>
          </Flex>
        </Column>
      </RevealFx>
    </Column>
  );
}
