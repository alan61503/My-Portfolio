"use client";

import React from "react";
import { Heading, Flex, Text, Button, Column, Schema } from "@once-ui-system/core";
import { ContactSection, FeaturedWork, HeroSpotlight, WhatIDoSection } from "@/components";
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
      </Column>

      <FeaturedWork />
      <ContactSection />
    </Column>
  );
}
