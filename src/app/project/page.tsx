"use client";

import React, { useState } from "react";
import { Column, Flex, Heading, Text, Button, RevealFx, Badge, Icon } from "@once-ui-system/core";
import { person } from "@/resources";

export default function Project() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Apex Motion Website",
      category: "web",
      description: "Complete web platform for a motion design company with custom CMS and portfolio showcase",
      image: "/images/projects/project-01/cover-01.jpg",
      tags: ["Next.js", "React", "TypeScript", "UI/UX"],
      stats: { performance: "100%", users: "10K+", time: "3 months" },
      link: "https://apexmotion.in",
      featured: true,
    },
    {
      title: "E-Mobility Solutions",
      category: "fullstack",
      description: "Full-stack platform for electric vehicle charging infrastructure with real-time monitoring",
      image: "/images/projects/project-01/cover-02.jpg",
      tags: ["React", "Node.js", "PostgreSQL", "IoT"],
      stats: { stations: "50+", uptime: "99.9%", cost: "-30%" },
      link: null,
      featured: true,
    },
    {
      title: "Once UI Design System",
      category: "design",
      description: "Comprehensive component library with 50+ components and dark mode support",
      image: "/images/projects/project-01/cover-03.jpg",
      tags: ["React", "TypeScript", "Design System"],
      stats: { stars: "500+", users: "1K+", components: "50+" },
      link: "https://github.com/once-ui-system",
      featured: true,
    },
    {
      title: "AI-Powered Traffic Optimizer",
      category: "ai",
      description: "Machine learning solution for real-time traffic optimization and prediction",
      image: "/images/projects/project-01/cover-04.jpg",
      tags: ["Python", "TensorFlow", "ML", "Real-time"],
      stats: { accuracy: "95%", reduced: "40%", coverage: "5 cities" },
      link: null,
      featured: false,
    },
    {
      title: "Portfolio Builder Platform",
      category: "web",
      description: "Simple yet powerful portfolio builder for developers with drag-and-drop interface",
      image: "/images/projects/project-01/image-01.jpg",
      tags: ["Next.js", "React", "Tailwind"],
      stats: { templates: "20+", users: "5K+", time: "< 10min" },
      link: "/work/simple-portfolio-builder",
      featured: false,
    },
    {
      title: "Figma to Code Pipeline",
      category: "automation",
      description: "Automated design handoffs with intelligent code generation from Figma designs",
      image: "/images/projects/project-01/image-02.jpg",
      tags: ["Automation", "Figma API", "React"],
      stats: { saved: "80%", accuracy: "92%", exports: "10K+" },
      link: "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "grid" },
    { id: "web", label: "Web", icon: "globe" },
    { id: "fullstack", label: "Full-Stack", icon: "server" },
    { id: "ai", label: "AI/ML", icon: "cpu" },
    { id: "design", label: "Design", icon: "palette" },
    { id: "automation", label: "Automation", icon: "zap" },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingX="l">
      {/* Hero Section */}
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
              Portfolio Showcase
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" align="center">
              Featured Projects
            </Heading>
            <Column maxWidth="s">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center">
                Innovative solutions built with modern technologies. From full-stack applications to AI-powered systems.
              </Text>
            </Column>
          </Column>
        </RevealFx>

        {/* Category Filter */}
        <RevealFx translateY="8" delay={0.1} fillWidth horizontal="center">
          <Flex gap="8" wrap horizontal="center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "primary" : "secondary"}
                size="m"
                prefixIcon={cat.icon as any}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </Flex>
        </RevealFx>
      </Column>

      {/* Featured Projects Grid */}
      <Column fillWidth gap="l">
        <RevealFx translateY="8" delay={0.2} fillWidth>
          <Heading variant="heading-strong-l">Featured Work</Heading>
        </RevealFx>

        {/* Large Featured Project */}
        {filteredProjects.filter(p => p.featured)[0] && (
          <RevealFx translateY="8" delay={0.25} fillWidth>
            <Column
              fillWidth
              gap="l"
              padding="xl"
              radius="l"
              background="surface"
              border="neutral-alpha-weak"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${filteredProjects.filter(p => p.featured)[0].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Column gap="m" fillWidth>
                <Flex gap="8" wrap>
                  {filteredProjects.filter(p => p.featured)[0].tags.map((tag, i) => (
                    <Badge key={i} background="brand-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                      {tag}
                    </Badge>
                  ))}
                </Flex>
                <Heading variant="display-strong-m" style={{ color: "white" }}>
                  {filteredProjects.filter(p => p.featured)[0].title}
                </Heading>
                <Text variant="body-default-l" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {filteredProjects.filter(p => p.featured)[0].description}
                </Text>
                <Flex gap="l" wrap>
                  {Object.entries(filteredProjects.filter(p => p.featured)[0].stats).map(([key, value], i) => (
                    <Column key={i} gap="4">
                      <Text variant="heading-strong-l" style={{ color: "white" }}>
                        {value}
                      </Text>
                      <Text variant="label-default-s" style={{ color: "rgba(255,255,255,0.6)", textTransform: "capitalize" }}>
                        {key}
                      </Text>
                    </Column>
                  ))}
                </Flex>
                {filteredProjects.filter(p => p.featured)[0].link && (
                  <Button
                    variant="primary"
                    size="m"
                    href={filteredProjects.filter(p => p.featured)[0].link}
                    prefixIcon="externalLink"
                    style={{ width: "fit-content" }}
                  >
                    View Project
                  </Button>
                )}
              </Column>
            </Column>
          </RevealFx>
        )}

        {/* Projects Grid */}
        <Flex gap="m" wrap fillWidth>
          {filteredProjects.map((project, index) => (
            <RevealFx key={index} translateY="8" delay={0.3 + index * 0.05} fillWidth>
              <Column
                gap="m"
                padding="l"
                radius="l"
                background="surface"
                border="neutral-alpha-weak"
                style={{ flex: "1 1 320px", minWidth: "320px", cursor: "pointer", transition: "transform 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                {/* Project Image */}
                <div
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "8px",
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Project Info */}
                <Column gap="8">
                  <Flex gap="8" wrap>
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} background="neutral-alpha-weak" paddingX="8" paddingY="4" textVariant="label-default-s">
                        {tag}
                      </Badge>
                    ))}
                  </Flex>
                  <Heading variant="heading-strong-m">{project.title}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {project.description}
                  </Text>
                </Column>

                {/* Stats */}
                <Flex gap="l" wrap>
                  {Object.entries(project.stats).slice(0, 2).map(([key, value], i) => (
                    <Column key={i} gap="4">
                      <Text variant="heading-strong-m">{value}</Text>
                      <Text variant="label-default-s" onBackground="neutral-weak" style={{ textTransform: "capitalize" }}>
                        {key}
                      </Text>
                    </Column>
                  ))}
                </Flex>

                {/* CTA */}
                {project.link && (
                  <Button
                    variant="secondary"
                    size="s"
                    href={project.link}
                    prefixIcon="arrowRight"
                    style={{ width: "100%" }}
                  >
                    View Details
                  </Button>
                )}
              </Column>
            </RevealFx>
          ))}
        </Flex>
      </Column>

      {/* Stats Section */}
      <RevealFx translateY="8" delay={0.4} fillWidth>
        <Column fillWidth gap="l" padding="xl" radius="l" background="brand-alpha-weak" border="brand-alpha-medium">
          <Column gap="8" align="center">
            <Heading variant="heading-strong-l" align="center">
              Proven Track Record
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium" align="center">
              Numbers that showcase the impact of my work
            </Text>
          </Column>
          <Flex gap="l" wrap horizontal="center">
            <Column gap="4" align="center" style={{ flex: "1 1 150px" }}>
              <Heading variant="display-strong-m">50+</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">Projects Delivered</Text>
            </Column>
            <Column gap="4" align="center" style={{ flex: "1 1 150px" }}>
              <Heading variant="display-strong-m">10K+</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">Users Impacted</Text>
            </Column>
            <Column gap="4" align="center" style={{ flex: "1 1 150px" }}>
              <Heading variant="display-strong-m">95%</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">Client Satisfaction</Text>
            </Column>
            <Column gap="4" align="center" style={{ flex: "1 1 150px" }}>
              <Heading variant="display-strong-m">500+</Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">GitHub Stars</Text>
            </Column>
          </Flex>
        </Column>
      </RevealFx>

      {/* CTA Section */}
      <RevealFx translateY="8" delay={0.5} fillWidth>
        <Column fillWidth gap="m" padding="xl" radius="l" background="surface" border="neutral-alpha-weak" align="center">
          <Icon name="rocket" size="l" onBackground="brand-strong" />
          <Heading variant="heading-strong-l" align="center">
            Have a project in mind?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium" align="center">
            Let's collaborate and build something extraordinary together.
          </Text>
          <Flex gap="8" wrap horizontal="center">
            <Button variant="secondary" size="m" href="/work">
              View all work
            </Button>
          </Flex>
        </Column>
      </RevealFx>
    </Column>
  );
}
