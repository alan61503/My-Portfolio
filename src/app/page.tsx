"use client";

import React from "react";
import Link from "next/link";
import {
  Heading,
  Flex,
  Text,
  Button,
  Column,
  Badge,
  Row,
  Schema,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";

const stats = [
  { label: "Projects", value: "47+", detail: "shipped with intention" },
  { label: "Clients", value: "32", detail: "partnerships" },
  { label: "Commits", value: "5.2k+", detail: "kept in flow" },
];

const skillFocus = [
  {
    title: "Product Engineering",
    copy: "Modular web platforms built with performance budgets and a brand-first lens.",
    stack: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    title: "Intelligent Interfaces",
    copy: "Calm UIs that pair thoughtful microcopy with ML powered automation.",
    stack: ["Python", "OpenAI", "Edge runtimes"],
  },
  {
    title: "Systems Thinking",
    copy: "Documentation, governance, and deployment guardrails set from day one.",
    stack: ["Design tokens", "CI/CD", "Storybook"],
  },
];

const projects = [
  {
    title: "PDF Splitter",
    summary: "Colour-aware print prep that quietly saves paper for teams on tight turnarounds.",
    href: "/work/pdf-divider-smart-printing",
    tags: ["Next.js", "Automation"],
  },
  {
    title: "Figma to Code Pipeline",
    summary: "Opinionated bridge between handoff decks and production-grade components.",
    href: "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
    tags: ["React", "Tooling"],
  },
  {
    title: "Once UI",
    summary: "A lean design system tailored for founders that need to ship polished demos fast.",
    href: "/work/building-once-ui-a-customizable-design-system",
    tags: ["Design System", "TypeScript"],
  },
];

export default function Home() {
  return (
    <Column maxWidth="l" gap="xl" paddingX="l" paddingY="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column gap="m">
        <Heading variant="display-strong-l" wrap="balance">
          {home.headline}
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
          {home.subline}
        </Text>
        <Flex gap="m" wrap>
          <Button href={about.path} size="m" variant="secondary" arrowIcon>
            About Me
          </Button>
          <Button href="/work" size="m" variant="tertiary" arrowIcon>
            View Work
          </Button>
        </Flex>
      </Column>

      <Row gap="m" wrap>
        {stats.map((stat) => (
          <Column
            key={stat.label}
            flex={1}
            minWidth={200}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            gap="xs"
          >
            <Text variant="label-default-s" onBackground="neutral-medium">
              {stat.label}
            </Text>
            <Heading variant="display-strong-m">{stat.value}</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {stat.detail}
            </Text>
          </Column>
        ))}
      </Row>

      <Column gap="m">
        <Heading variant="display-strong-s">Focus Areas</Heading>
        <Column gap="m">
          {skillFocus.map((skill) => (
            <Column
              key={skill.title}
              padding="l"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
              gap="s"
            >
              <Heading variant="heading-strong-m">{skill.title}</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {skill.copy}
              </Text>
              <Row gap="s" wrap>
                {skill.stack.map((item) => (
                  <Badge key={item} background="neutral-alpha-weak" textVariant="label-default-s">
                    {item}
                  </Badge>
                ))}
              </Row>
            </Column>
          ))}
        </Column>
      </Column>

      <Column gap="m">
        <Heading variant="display-strong-s">Selected Work</Heading>
        <Column gap="m">
          {projects.map((project) => (
            <Link key={project.title} href={project.href} style={{ textDecoration: "none" }}>
              <Column
                padding="l"
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
                gap="s"
              >
                <Heading variant="heading-strong-m">{project.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {project.summary}
                </Text>
                <Row gap="s">
                  {project.tags.map((tag) => (
                    <Badge key={tag} background="brand-alpha-weak" onBackground="brand-strong" textVariant="label-default-s">
                      {tag}
                    </Badge>
                  ))}
                </Row>
              </Column>
            </Link>
          ))}
        </Column>
      </Column>

      <Column
        padding="xl"
        radius="l"
        border="neutral-alpha-weak"
        background="brand-alpha-weak"
        gap="m"
        align="center"
      >
        <Heading variant="display-strong-m" align="center">
          Have a product brief or a restless idea?
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="brand-medium">
          I work with UK-based teams and global founders that value calm delivery, concise comms, and
          measured craftsmanship.
        </Text>
        <Flex gap="m" wrap horizontal="center">
          <Button href={`mailto:${person.email}`} size="m" prefixIcon="mail">
            Email Me
          </Button>
          <Button href={about.calendar?.link ?? about.path} size="m" variant="tertiary" arrowIcon>
            Book a Call
          </Button>
        </Flex>
      </Column>
    </Column>
  );
}
