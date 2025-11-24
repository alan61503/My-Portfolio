"use client";

import React from "react";
import { Column, Flex, Heading, Text, RevealFx, Icon, Badge } from "@once-ui-system/core";

export default function Achievements() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: "award",
      color: "brand",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2024",
      icon: "award",
      color: "brand",
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: "award",
      color: "brand",
    },
  ];

  const awards = [
    {
      title: "Best Innovation Award",
      event: "University Tech Fest 2024",
      description: "For developing an AI-powered solution for real-time traffic optimization",
      icon: "trophy",
    },
    {
      title: "Open Source Contributor",
      event: "Hacktoberfest 2024",
      description: "Completed 25+ merged pull requests across multiple open source projects",
      icon: "github",
    },
    {
      title: "Dean's List",
      event: "Christ University",
      description: "Achieved academic excellence with GPA above 9.0 for 4 consecutive semesters",
      icon: "school",
    },
  ];

  const projects = [
    {
      metric: "10,000+",
      label: "Users Reached",
      icon: "users",
    },
    {
      metric: "50+",
      label: "Projects Completed",
      icon: "code",
    },
    {
      metric: "500+",
      label: "GitHub Stars",
      icon: "star",
    },
    {
      metric: "95%",
      label: "Client Satisfaction",
      icon: "heart",
    },
  ];

  const skills = [
    {
      category: "Problem Solving",
      achievements: [
        "Solved 500+ LeetCode problems",
        "Competitive programming on CodeChef (3★)",
        "Participated in 10+ hackathons",
      ],
    },
    {
      category: "Leadership",
      achievements: [
        "Led technical team of 5 developers",
        "Mentored 20+ junior developers",
        "Organized university tech workshops",
      ],
    },
    {
      category: "Communication",
      achievements: [
        "Published 15+ technical articles",
        "50,000+ readers across platforms",
        "Speaker at university tech events",
      ],
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Web Technology Lead",
      company: "Apex Motion",
      achievement: "Built complete web platform from scratch",
    },
    {
      year: "2024",
      title: "Software Engineer",
      company: "Center of Excellence in E-Mobility",
      achievement: "Developed full-stack EV infrastructure platform",
    },
    {
      year: "2024",
      title: "SDE Intern",
      company: "Matrix BMS Technologies",
      achievement: "Contributed to enterprise application development",
    },
    {
      year: "2023",
      title: "Started University",
      company: "Christ University",
      achievement: "BTech CSE (Hons. AIML)",
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
              Achievements
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" align="center">
              Milestones & Recognition
            </Heading>
            <Column maxWidth="s">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
                Certifications, awards, and achievements that showcase my journey and growth.
              </Text>
            </Column>
          </Column>
        </RevealFx>
      </Column>

      {/* Stats Grid */}
      <RevealFx translateY="8" delay={0.1} fillWidth>
        <Flex gap="m" wrap fillWidth>
          {projects.map((project, index) => (
            <Column
              key={index}
              gap="8"
              padding="xl"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              align="center"
              style={{ flex: "1 1 200px", minWidth: "200px" }}
            >
              <Icon name={project.icon as any} size="l" onBackground="brand-strong" />
              <Heading variant="display-strong-s">{project.metric}</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium" align="center">
                {project.label}
              </Text>
            </Column>
          ))}
        </Flex>
      </RevealFx>

      {/* Certifications */}
      <RevealFx translateY="8" delay={0.2} fillWidth>
        <Column fillWidth gap="l">
          <Flex gap="8" vertical="center">
            <Icon name="award" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Certifications</Heading>
          </Flex>
          <Flex gap="m" wrap fillWidth>
            {certifications.map((cert, index) => (
              <Column
                key={index}
                gap="m"
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ flex: "1 1 280px", minWidth: "280px" }}
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
                    <Icon name={cert.icon as any} size="m" onBackground="brand-strong" />
                  </Flex>
                  <Column gap="4" fillWidth>
                    <Heading variant="heading-strong-m">{cert.title}</Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {cert.issuer} • {cert.date}
                    </Text>
                  </Column>
                </Flex>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Awards & Recognition */}
      <RevealFx translateY="8" delay={0.3} fillWidth>
        <Column fillWidth gap="l">
          <Flex gap="8" vertical="center">
            <Icon name="trophy" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Awards & Recognition</Heading>
          </Flex>
          <Column gap="m">
            {awards.map((award, index) => (
              <Column
                key={index}
                gap="m"
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
              >
                <Flex gap="12" vertical="center">
                  <Icon name={award.icon as any} size="m" onBackground="brand-strong" />
                  <Column gap="4" fillWidth>
                    <Heading variant="heading-strong-m">{award.title}</Heading>
                    <Text variant="body-default-s" onBackground="brand-strong">
                      {award.event}
                    </Text>
                  </Column>
                </Flex>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  {award.description}
                </Text>
              </Column>
            ))}
          </Column>
        </Column>
      </RevealFx>

      {/* Skills & Achievements */}
      <RevealFx translateY="8" delay={0.4} fillWidth>
        <Column fillWidth gap="l">
          <Flex gap="8" vertical="center">
            <Icon name="star" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Skills & Notable Achievements</Heading>
          </Flex>
          <Flex gap="m" wrap fillWidth>
            {skills.map((skill, index) => (
              <Column
                key={index}
                gap="m"
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ flex: "1 1 280px", minWidth: "280px" }}
              >
                <Badge
                  background="brand-alpha-weak"
                  paddingX="12"
                  paddingY="8"
                  textVariant="heading-default-s"
                  style={{ width: "fit-content" }}
                >
                  {skill.category}
                </Badge>
                <Column gap="8">
                  {skill.achievements.map((achievement, i) => (
                    <Flex key={i} gap="8" vertical="start">
                      <Icon name="checkCircle" size="xs" onBackground="brand-strong" style={{ marginTop: "4px" }} />
                      <Text variant="body-default-s" onBackground="neutral-medium">
                        {achievement}
                      </Text>
                    </Flex>
                  ))}
                </Column>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Career Timeline */}
      <RevealFx translateY="8" delay={0.5} fillWidth>
        <Column fillWidth gap="l" padding="xl" radius="l" background="surface" border="neutral-alpha-weak">
          <Flex gap="8" vertical="center">
            <Icon name="calendar" size="m" onBackground="brand-strong" />
            <Heading variant="heading-strong-l">Career Timeline</Heading>
          </Flex>
          <Column gap="l" paddingLeft="l">
            {timeline.map((item, index) => (
              <Flex key={index} gap="m" vertical="start">
                <Badge
                  background="brand-alpha-weak"
                  paddingX="12"
                  paddingY="8"
                  textVariant="heading-default-s"
                  style={{ minWidth: "80px" }}
                >
                  {item.year}
                </Badge>
                <Column gap="4" fillWidth>
                  <Heading variant="heading-strong-m">{item.title}</Heading>
                  <Text variant="body-default-m" onBackground="brand-strong">
                    {item.company}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    {item.achievement}
                  </Text>
                </Column>
              </Flex>
            ))}
          </Column>
        </Column>
      </RevealFx>
    </Column>
  );
}
