"use client";

import React from "react";
import { Column, Flex, Heading, Text, Button, RevealFx, Icon, Badge, Row } from "@once-ui-system/core";
import { person, about } from "@/resources";

export default function Resume() {
  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "TensorFlow", "PyTorch"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
    tools: ["Git", "Docker", "AWS", "Figma", "Vercel", "Linux"],
  };

  const achievements = [
    "Built full-stack applications serving 10,000+ users",
    "Implemented ML models with 95%+ accuracy",
    "Open source contributor with 500+ stars across projects",
    "Published technical articles read by 50,000+ developers",
  ];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingX="l">
      {/* Header Section */}
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
              Professional Resume
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" align="center">
              {person.name}
            </Heading>
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              align="center"
            >
              {person.role}
            </Text>
            
            {/* Contact Info */}
            <Flex gap="12" wrap horizontal="center" paddingTop="8">
              <Flex gap="4" vertical="center">
                <Icon name="email" size="xs" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {person.email}
                </Text>
              </Flex>
              <Flex gap="4" vertical="center">
                <Icon name="home" size="xs" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {person.location}
                </Text>
              </Flex>
            </Flex>

            {/* Download Button */}
            <Button
              variant="primary"
              size="m"
              prefixIcon="download"
              onClick={() => window.print()}
            >
              Download PDF
            </Button>
          </Column>
        </RevealFx>
      </Column>

      {/* Professional Summary */}
      <RevealFx translateY="8" delay={0.1} fillWidth>
        <Column
          fillWidth
          gap="m"
          padding="xl"
          radius="l"
          background="surface"
          border="neutral-alpha-weak"
        >
          <Flex gap="8" vertical="center">
            <Icon name="user" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Professional Summary</Heading>
          </Flex>
          <Text variant="body-default-l" onBackground="neutral-medium">
            {about.intro.description}
          </Text>
        </Column>
      </RevealFx>

      {/* Work Experience */}
      {about.work.display && (
        <RevealFx translateY="8" delay={0.2} fillWidth>
          <Column fillWidth gap="l">
            <Flex gap="8" vertical="center">
              <Icon name="briefcase" size="m" onBackground="brand-strong" />
              <Heading variant="heading-strong-l">{about.work.title}</Heading>
            </Flex>
            
            <Column gap="l">
              {about.work.experiences.map((experience, index) => (
                <Column
                  key={index}
                  fillWidth
                  gap="m"
                  padding="xl"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
                >
                  <Column gap="8">
                    <Flex fillWidth horizontal="space-between" wrap>
                      <Heading variant="heading-strong-m">{experience.company}</Heading>
                      <Badge
                        background="neutral-alpha-weak"
                        paddingX="8"
                        paddingY="4"
                        textVariant="label-default-s"
                      >
                        {experience.timeframe}
                      </Badge>
                    </Flex>
                    <Text variant="body-default-m" onBackground="brand-strong">
                      {experience.role}
                    </Text>
                  </Column>
                  
                  <Column gap="8" paddingLeft="12">
                    {experience.achievements.map((achievement, i) => (
                      <Flex key={i} gap="8" vertical="start">
                        <Text variant="body-default-s" onBackground="brand-strong" style={{ marginTop: "4px" }}>
                          •
                        </Text>
                        <Text variant="body-default-m" onBackground="neutral-medium">
                          {achievement}
                        </Text>
                      </Flex>
                    ))}
                  </Column>
                </Column>
              ))}
            </Column>
          </Column>
        </RevealFx>
      )}

      {/* Education */}
      {about.studies.display && (
        <RevealFx translateY="8" delay={0.3} fillWidth>
          <Column fillWidth gap="l">
            <Flex gap="8" vertical="center">
              <Icon name="school" size="m" onBackground="brand-strong" />
              <Heading variant="heading-strong-l">{about.studies.title}</Heading>
            </Flex>
            
            <Column gap="m">
              {about.studies.institutions.map((institution, index) => (
                <Column
                  key={index}
                  fillWidth
                  gap="8"
                  padding="xl"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-weak"
                >
                  <Heading variant="heading-strong-m">{institution.name}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </Column>
        </RevealFx>
      )}

      {/* Technical Skills */}
      <RevealFx translateY="8" delay={0.4} fillWidth>
        <Column fillWidth gap="l">
          <Flex gap="8" vertical="center">
            <Icon name="code" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Technical Skills</Heading>
          </Flex>
          
          <Column
            fillWidth
            gap="l"
            padding="xl"
            radius="l"
            background="surface"
            border="neutral-alpha-weak"
          >
            <Column gap="m">
              <Column gap="8">
                <Text variant="label-default-m" onBackground="brand-strong">
                  Languages
                </Text>
                <Flex gap="8" wrap>
                  {skills.languages.map((skill, index) => (
                    <Badge
                      key={index}
                      background="neutral-alpha-weak"
                      paddingX="12"
                      paddingY="6"
                      textVariant="body-default-s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Column>

              <Column gap="8">
                <Text variant="label-default-m" onBackground="brand-strong">
                  Frameworks & Libraries
                </Text>
                <Flex gap="8" wrap>
                  {skills.frameworks.map((skill, index) => (
                    <Badge
                      key={index}
                      background="neutral-alpha-weak"
                      paddingX="12"
                      paddingY="6"
                      textVariant="body-default-s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Column>

              <Column gap="8">
                <Text variant="label-default-m" onBackground="brand-strong">
                  Databases
                </Text>
                <Flex gap="8" wrap>
                  {skills.databases.map((skill, index) => (
                    <Badge
                      key={index}
                      background="neutral-alpha-weak"
                      paddingX="12"
                      paddingY="6"
                      textVariant="body-default-s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Column>

              <Column gap="8">
                <Text variant="label-default-m" onBackground="brand-strong">
                  Tools & Platforms
                </Text>
                <Flex gap="8" wrap>
                  {skills.tools.map((skill, index) => (
                    <Badge
                      key={index}
                      background="neutral-alpha-weak"
                      paddingX="12"
                      paddingY="6"
                      textVariant="body-default-s"
                    >
                      {skill}
                    </Badge>
                  ))}
                </Flex>
              </Column>
            </Column>
          </Column>
        </Column>
      </RevealFx>

      {/* Languages */}
      {person.languages && person.languages.length > 0 && (
        <RevealFx translateY="8" delay={0.5} fillWidth>
          <Column fillWidth gap="l">
            <Flex gap="8" vertical="center">
              <Icon name="globe" size="m" onBackground="brand-strong" />
              <Heading variant="heading-strong-l">Languages</Heading>
            </Flex>
            
            <Column
              fillWidth
              padding="xl"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
            >
              <Flex gap="8" wrap>
                {person.languages.map((language, index) => (
                  <Badge
                    key={index}
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="6"
                    textVariant="body-default-m"
                  >
                    {language}
                  </Badge>
                ))}
              </Flex>
            </Column>
          </Column>
        </RevealFx>
      )}

      {/* Key Achievements */}
      <RevealFx translateY="8" delay={0.6} fillWidth>
        <Column fillWidth gap="l">
          <Flex gap="8" vertical="center">
            <Icon name="trophy" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Key Achievements</Heading>
          </Flex>
          
          <Column
            fillWidth
            gap="m"
            padding="xl"
            radius="l"
            background="surface"
            border="neutral-alpha-weak"
          >
            {achievements.map((achievement, index) => (
              <Flex key={index} gap="8" vertical="start">
                <Icon name="checkCircle" size="s" onBackground="brand-strong" style={{ marginTop: "4px" }} />
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {achievement}
                </Text>
              </Flex>
            ))}
          </Column>
        </Column>
      </RevealFx>

      {/* Footer CTA */}
      <RevealFx translateY="8" delay={0.7} fillWidth>
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
            Let's work together
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium" align="center">
            Interested in collaborating? Get in touch to discuss your next project.
          </Text>
          <Flex gap="8" wrap horizontal="center">
            <Button
              variant="primary"
              size="m"
              href="/contact"
            >
              Contact me
            </Button>
            <Button
              variant="secondary"
              size="m"
              href="https://github.com/alan61503"
              prefixIcon="github"
            >
              View GitHub
            </Button>
          </Flex>
        </Column>
      </RevealFx>
    </Column>
  );
}
