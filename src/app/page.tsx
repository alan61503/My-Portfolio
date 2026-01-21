"use client";

import React from "react";
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
import { ContactSection, HeroSpotlight, WhatIDoSection } from "@/components";
import { home, about, person, baseURL } from "@/resources";


export default function Home() {
  return (
    <Column fillWidth gap="xl">
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

      <HeroSpotlight>
        <Column maxWidth="l" paddingX="l" paddingTop="xl" paddingBottom="xl" gap="xl">
          <Column gap="m" paddingLeft="xl" paddingRight="m">
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
        </Column>
      </HeroSpotlight>

      <Column maxWidth="l" paddingX="l" paddingY="xl" gap="xl">
        <WhatIDoSection />

        <Column gap="m">
          <Heading variant="display-strong-s">Core Expertise</Heading>
          <Column gap="m">
            <Column gap="s" padding="l" radius="l" border="neutral-alpha-weak" background="surface">
              <Heading variant="heading-strong-m">Development</Heading>
              <Row gap="s" wrap>
                {[
                  "Full-stack Web Development",
                  "REST APIs & Backend Systems",
                  "Scalable Frontend Architecture",
                ].map((item) => (
                  <Badge key={item} background="neutral-alpha-weak" textVariant="label-default-s">
                    {item}
                  </Badge>
                ))}
              </Row>
            </Column>

            <Column gap="s" padding="l" radius="l" border="neutral-alpha-weak" background="surface">
              <Heading variant="heading-strong-m">AI / ML</Heading>
              <Row gap="s" wrap>
                {[
                  "Applied Machine Learning",
                  "Model Integration & Inference",
                  "Data-driven Feature Design",
                ].map((item) => (
                  <Badge key={item} background="neutral-alpha-weak" textVariant="label-default-s">
                    {item}
                  </Badge>
                ))}
              </Row>
            </Column>

            <Column gap="s" padding="l" radius="l" border="neutral-alpha-weak" background="surface">
              <Heading variant="heading-strong-m">Tools & Stack</Heading>
              <Row gap="s" wrap>
                {[
                  "Next.js, React, TypeScript",
                  "Tailwind CSS",
                  "Supabase, PostgreSQL",
                  "Python, NumPy, ML libraries",
                ].map((item) => (
                  <Badge key={item} background="neutral-alpha-weak" textVariant="label-default-s">
                    {item}
                  </Badge>
                ))}
              </Row>
            </Column>
          </Column>
        </Column>

        <Column gap="m">
          <Heading variant="display-strong-s">Selected Work</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            A few projects that reflect my focus on real-world problem solving and clean engineering.
          </Text>
          <Column gap="m">
            {[
              {
                title: "Apex Motion",
                summary:
                  "Built and scaled the apexmotion.in platform end-to-end, unifying product storytelling, performance, and deployment automation.",
                href: "/work/apex-motion",
              },
              {
                title: "PDF Splitter",
                summary:
                  "Colour-aware print prep that quietly saves paper for teams on tight turnarounds.",
                href: "/work/pdf-divider-smart-printing",
              },
              {
                title: "Digital Twin Research",
                summary:
                  "Research initiative focused on digital twinning for an electric two‑wheeler, aligning data pipelines, simulation, and real‑world telemetry.",
                href: "/work/digital-twinning-electric-two-wheeler",
              },
            ].map((project) => (
              <Column
                key={project.title}
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
                <Flex>
                  <Button href={project.href} size="s" variant="tertiary" arrowIcon>
                    View Case Study
                  </Button>
                </Flex>
              </Column>
            ))}
          </Column>
        </Column>

      </Column>
      <ContactSection />
    </Column>
  );
}
