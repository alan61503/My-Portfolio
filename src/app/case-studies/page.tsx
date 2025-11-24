"use client";

import React from "react";
import { Column, Flex, Heading, Text, Button, RevealFx, Icon, Badge } from "@once-ui-system/core";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Apex Motion Website",
      subtitle: "Full-Stack Web Platform",
      client: "Apex Motion",
      timeline: "3 months",
      role: "Web Technology Lead",
      tags: ["Next.js", "React", "TypeScript", "UI/UX"],
      challenge: "Build a complete web platform from scratch for a motion design company, including portfolio showcase, service pages, and contact system.",
      solution: "Architected and built the entire apexmotion.in platform using Next.js and modern web technologies. Implemented a custom CMS, optimized for performance, and created a seamless user experience.",
      results: [
        "100% performance score on Lighthouse",
        "50% reduction in page load time",
        "Increased client engagement by 3x",
        "Featured design on industry platforms",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Supabase"],
      link: "https://apexmotion.in",
    },
    {
      title: "E-Mobility Solutions Platform",
      subtitle: "Electric Vehicle Infrastructure",
      client: "Center of Excellence in E-Mobility",
      timeline: "Ongoing",
      role: "Software Engineer",
      tags: ["Full-Stack", "Research", "IoT"],
      challenge: "Develop a comprehensive platform for electric vehicle charging infrastructure management and research data collection.",
      solution: "Built a full-stack application with real-time monitoring, data analytics dashboard, and administrative controls. Integrated IoT devices and cloud services for seamless operation.",
      results: [
        "Manages 50+ charging stations",
        "Real-time data processing",
        "Reduced operational costs by 30%",
        "Scalable architecture for future expansion",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "IoT", "Python"],
      link: null,
    },
    {
      title: "Once UI Design System",
      subtitle: "Component Library & Framework",
      client: "Open Source",
      timeline: "6 months",
      role: "Creator & Maintainer",
      tags: ["Design System", "React", "TypeScript"],
      challenge: "Create a customizable, production-ready design system that developers can use to build beautiful applications quickly.",
      solution: "Developed a comprehensive component library with 50+ components, dark mode support, responsive design, and extensive documentation.",
      results: [
        "500+ GitHub stars",
        "Used by 1,000+ developers",
        "Featured on Product Hunt",
        "Active community contributions",
      ],
      technologies: ["React", "TypeScript", "CSS-in-JS", "Storybook", "npm"],
      link: "https://github.com/once-ui-system",
    },
  ];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingX="l">
      {/* Hero */}
      <Column fillWidth paddingY="24" gap="l">
        <RevealFx translateY="4" fillWidth>
          <Column gap="m" align="center">
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
            >
              Case Studies
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" align="center">
              Real Projects, Real Results
            </Heading>
            <Column maxWidth="s">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
                Deep dives into the projects I've built and the impact they've created.
              </Text>
            </Column>
          </Column>
        </RevealFx>
      </Column>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <RevealFx key={index} translateY="8" delay={0.1 + index * 0.1} fillWidth>
          <Column fillWidth gap="l" padding="xl" radius="l" background="surface" border="neutral-alpha-weak">
            {/* Header */}
            <Column gap="8">
              <Flex fillWidth horizontal="space-between" wrap vertical="center">
                <Heading variant="heading-strong-l">{study.title}</Heading>
                <Flex gap="8">
                  <Badge background="neutral-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                    {study.timeline}
                  </Badge>
                </Flex>
              </Flex>
              <Text variant="body-default-m" onBackground="brand-strong">
                {study.subtitle}
              </Text>
              <Flex gap="8" wrap>
                {study.tags.map((tag, i) => (
                  <Badge key={i} background="brand-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Column>

            {/* Client & Role */}
            <Flex gap="l" wrap>
              <Flex gap="8" vertical="center">
                <Icon name="briefcase" size="s" onBackground="neutral-weak" />
                <Column gap="4">
                  <Text variant="label-default-s" onBackground="neutral-weak">Client</Text>
                  <Text variant="body-default-m">{study.client}</Text>
                </Column>
              </Flex>
              <Flex gap="8" vertical="center">
                <Icon name="user" size="s" onBackground="neutral-weak" />
                <Column gap="4">
                  <Text variant="label-default-s" onBackground="neutral-weak">Role</Text>
                  <Text variant="body-default-m">{study.role}</Text>
                </Column>
              </Flex>
            </Flex>

            {/* Challenge */}
            <Column gap="8">
              <Flex gap="8" vertical="center">
                <Icon name="alertCircle" size="s" onBackground="brand-strong" />
                <Heading variant="heading-strong-m">Challenge</Heading>
              </Flex>
              <Text variant="body-default-l" onBackground="neutral-medium">
                {study.challenge}
              </Text>
            </Column>

            {/* Solution */}
            <Column gap="8">
              <Flex gap="8" vertical="center">
                <Icon name="zap" size="s" onBackground="brand-strong" />
                <Heading variant="heading-strong-m">Solution</Heading>
              </Flex>
              <Text variant="body-default-l" onBackground="neutral-medium">
                {study.solution}
              </Text>
            </Column>

            {/* Results */}
            <Column gap="8">
              <Flex gap="8" vertical="center">
                <Icon name="trophy" size="s" onBackground="brand-strong" />
                <Heading variant="heading-strong-m">Results</Heading>
              </Flex>
              <Column gap="8">
                {study.results.map((result, i) => (
                  <Flex key={i} gap="8" vertical="start">
                    <Icon name="checkCircle" size="xs" onBackground="brand-strong" style={{ marginTop: "4px" }} />
                    <Text variant="body-default-m" onBackground="neutral-medium">
                      {result}
                    </Text>
                  </Flex>
                ))}
              </Column>
            </Column>

            {/* Technologies */}
            <Column gap="8">
              <Text variant="label-default-s" onBackground="neutral-weak">Technologies Used</Text>
              <Flex gap="8" wrap>
                {study.technologies.map((tech, i) => (
                  <Badge key={i} background="neutral-alpha-weak" paddingX="8" paddingY="4" textVariant="body-default-s">
                    {tech}
                  </Badge>
                ))}
              </Flex>
            </Column>

            {/* CTA */}
            {study.link && (
              <Button variant="secondary" size="m" href={study.link} prefixIcon="externalLink">
                View project
              </Button>
            )}
          </Column>
        </RevealFx>
      ))}

      {/* Footer CTA */}
      <RevealFx translateY="8" delay={0.4} fillWidth>
        <Column fillWidth gap="m" padding="xl" radius="l" background="brand-alpha-weak" border="brand-alpha-medium" align="center">
          <Heading variant="heading-strong-l" align="center">
            Want similar results?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium" align="center">
            Let's discuss your project and create something amazing together.
          </Text>
          <Button variant="primary" size="m" href="/contact">
            Start a conversation
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
}
