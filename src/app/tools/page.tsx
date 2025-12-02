"use client";

import React from "react";
import { Column, Flex, Heading, Text, RevealFx, Icon, Badge } from "@once-ui-system/core";

export default function Tools() {
  const tools = {
    development: [
      { name: "VS Code", icon: "code", description: "Primary code editor with custom extensions" },
      { name: "Git & GitHub", icon: "github", description: "Version control and collaboration" },
      { name: "Postman", icon: "server", description: "API testing and development" },
      { name: "Docker", icon: "package", description: "Containerization and deployment" },
    ],
    design: [
      { name: "Figma", icon: "palette", description: "UI/UX design and prototyping" },
      { name: "Adobe XD", icon: "layout", description: "Design and wireframing" },
      { name: "Framer", icon: "zap", description: "Interactive prototypes" },
    ],
    frontend: [
      { name: "React", icon: "code", description: "Component-based UI library" },
      { name: "Next.js", icon: "zap", description: "React framework with SSR" },
      { name: "TypeScript", icon: "file", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", icon: "palette", description: "Utility-first CSS framework" },
      { name: "Once UI", icon: "layout", description: "Custom design system" },
    ],
    backend: [
      { name: "Node.js", icon: "server", description: "JavaScript runtime" },
      { name: "Express", icon: "server", description: "Web application framework" },
      { name: "Python", icon: "cpu", description: "Backend and ML development" },
      { name: "PostgreSQL", icon: "database", description: "Relational database" },
      { name: "MongoDB", icon: "database", description: "NoSQL database" },
      { name: "Redis", icon: "zap", description: "In-memory data store" },
    ],
    aiml: [
      { name: "TensorFlow", icon: "cpu", description: "ML framework" },
      { name: "PyTorch", icon: "cpu", description: "Deep learning library" },
      { name: "Scikit-learn", icon: "cpu", description: "ML algorithms" },
      { name: "Pandas", icon: "file", description: "Data manipulation" },
      { name: "NumPy", icon: "file", description: "Numerical computing" },
    ],
    cloud: [
      { name: "Vercel", icon: "globe", description: "Frontend deployment" },
      { name: "AWS", icon: "server", description: "Cloud infrastructure" },
      { name: "Supabase", icon: "database", description: "Backend as a service" },
      { name: "Firebase", icon: "zap", description: "App development platform" },
    ],
  };

  const hardware = {
    laptop: "MacBook Pro / Custom PC",
    monitor: "Dual 27\" 4K displays",
    keyboard: "Mechanical keyboard (Custom build)",
    mouse: "Logitech MX Master 3",
    audio: "Sony WH-1000XM5",
  };

  const workflow = [
    "Plan and research before coding",
    "Write clean, maintainable code",
    "Test thoroughly (unit + integration)",
    "Code reviews and pair programming",
    "Continuous deployment and monitoring",
    "Regular refactoring and optimization",
  ];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingX="l">
      {/* Hero */}
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
              My Arsenal
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" align="center">
              Tools & Setup
            </Heading>
            <Column maxWidth="s">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
                The tools, technologies, and workflows that power my development process.
              </Text>
            </Column>
          </Column>
        </RevealFx>
      </Column>

      {/* Development Tools */}
      <RevealFx translateY="8" delay={0.1} fillWidth>
        <Column fillWidth gap="l">
          <Heading variant="heading-strong-l">Development Tools</Heading>
          <Flex gap="m" wrap fillWidth>
            {tools.development.map((tool, index) => (
              <Column
                key={index}
                gap="8"
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ flex: "1 1 200px", minWidth: "200px" }}
              >
                <Icon name={tool.icon as any} size="m" onBackground="brand-strong" />
                <Heading variant="heading-strong-m">{tool.name}</Heading>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {tool.description}
                </Text>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Design Tools */}
      <RevealFx translateY="8" delay={0.15} fillWidth>
        <Column fillWidth gap="l">
          <Heading variant="heading-strong-l">Design Tools</Heading>
          <Flex gap="m" wrap fillWidth>
            {tools.design.map((tool, index) => (
              <Column
                key={index}
                gap="8"
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ flex: "1 1 200px", minWidth: "200px" }}
              >
                <Icon name={tool.icon as any} size="m" onBackground="brand-strong" />
                <Heading variant="heading-strong-m">{tool.name}</Heading>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {tool.description}
                </Text>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Frontend Stack */}
      <RevealFx translateY="8" delay={0.2} fillWidth>
        <Column fillWidth gap="l">
          <Heading variant="heading-strong-l">Frontend Stack</Heading>
          <Flex gap="m" wrap fillWidth>
            {tools.frontend.map((tool, index) => (
              <Badge
                key={index}
                background="neutral-alpha-weak"
                paddingX="12"
                paddingY="8"
                textVariant="body-default-m"
              >
                {tool.name}
              </Badge>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Backend Stack */}
      <RevealFx translateY="8" delay={0.25} fillWidth>
        <Column fillWidth gap="l">
          <Heading variant="heading-strong-l">Backend Stack</Heading>
          <Flex gap="m" wrap fillWidth>
            {tools.backend.map((tool, index) => (
              <Badge
                key={index}
                background="neutral-alpha-weak"
                paddingX="12"
                paddingY="8"
                textVariant="body-default-m"
              >
                {tool.name}
              </Badge>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* AI/ML Tools */}
      <RevealFx translateY="8" delay={0.3} fillWidth>
        <Column fillWidth gap="l">
          <Heading variant="heading-strong-l">AI/ML Tools</Heading>
          <Flex gap="m" wrap fillWidth>
            {tools.aiml.map((tool, index) => (
              <Badge
                key={index}
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="8"
                textVariant="body-default-m"
              >
                {tool.name}
              </Badge>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Cloud & Deployment */}
      <RevealFx translateY="8" delay={0.35} fillWidth>
        <Column fillWidth gap="l">
          <Heading variant="heading-strong-l">Cloud & Deployment</Heading>
          <Flex gap="m" wrap fillWidth>
            {tools.cloud.map((tool, index) => (
              <Badge
                key={index}
                background="neutral-alpha-weak"
                paddingX="12"
                paddingY="8"
                textVariant="body-default-m"
              >
                {tool.name}
              </Badge>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Hardware Setup */}
      <RevealFx translateY="8" delay={0.4} fillWidth>
        <Column fillWidth gap="l" padding="xl" radius="l" background="surface" border="neutral-alpha-weak">
          <Flex gap="8" vertical="center">
            <Icon name="settings" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Hardware Setup</Heading>
          </Flex>
          <Column gap="m">
            {Object.entries(hardware).map(([key, value], index) => (
              <Flex key={index} gap="m" vertical="center">
                <Badge background="brand-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Badge>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {value}
                </Text>
              </Flex>
            ))}
          </Column>
        </Column>
      </RevealFx>

      {/* Workflow */}
      <RevealFx translateY="8" delay={0.45} fillWidth>
        <Column fillWidth gap="l" padding="xl" radius="l" background="surface" border="neutral-alpha-weak">
          <Flex gap="8" vertical="center">
            <Icon name="zap" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Development Workflow</Heading>
          </Flex>
          <Column gap="8">
            {workflow.map((step, index) => (
              <Flex key={index} gap="8" vertical="start">
                <Badge background="brand-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                  {index + 1}
                </Badge>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {step}
                </Text>
              </Flex>
            ))}
          </Column>
        </Column>
      </RevealFx>
    </Column>
  );
}
