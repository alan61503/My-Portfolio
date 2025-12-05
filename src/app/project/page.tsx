"use client";

import React, { useState } from "react";
import { Column, Flex, Heading, Text, Button, RevealFx, Badge, Icon } from "@once-ui-system/core";
import { person } from "@/resources";

export default function Project() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Efficient Pathfinding in a Maze Using BFS",
      category: "ai",
      description:
        "IEEE CSNT 2025 publication showcasing a Breadth-First Search pipeline for dependable robotic navigation in complex mazes.",
      image: "/images/path.png",
      tags: ["BFS", "Robotics", "AI/ML", "Research"],
      stats: { accuracy: "Shortest path", latency: "<120ms", scope: "40x40 grids" },
      link: "/work/efficient-pathfinding-in-a-maze-using-breadth-first-search",
      featured: true,
    },
    {
      title: "Digital Twin for Electric Two-Wheelers",
      category: "ai",
      description:
        "ICVTTS 25 research blending ESP32 telemetry, ThingSpeak IoT dashboards, and AR overlays for live battery insights on campus fleets.",
      image: "/images/digital.png",
      tags: ["Digital Twin", "IoT", "Augmented Reality", "Battery"],
      stats: { soc: "<2% error", sync: "<1s", riders: "60 km field" },
      link: "/work/digital-twinning-electric-two-wheeler",
      featured: true,
    },
    {
      title: "Apex Motion Website",
      category: "web",
      description:
        "Designed and shipped apexmotion.in end-to-end — a lightning-fast marketing site with a headless CMS, case-study builder, analytics dashboards, and automated deployments for the Apex Motion studio.",
      image: "/images/apex.png",
      tags: ["Next.js", "React", "TypeScript", "UI/UX"],
      stats: { performance: "100%", users: "10K+", time: "3 months" },
      link: "https://apexmotion.in",
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
      image: "/images/traffic.png",
      tags: ["Python", "TensorFlow", "ML", "Real-time"],
      stats: { accuracy: "95%", reduced: "40%", coverage: "5 cities" },
      link: null,
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
          <Column gap="m" align="center" horizontal="center" fillWidth style={{ textAlign: "center" }}>
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
              Portfolio Showcase
            </Badge>
            <Heading wrap="balance" variant="display-strong-l" align="center" style={{ width: "100%" }}>
              Featured Projects
            </Heading>
            <Column maxWidth="s" horizontal="center" style={{ margin: "0 auto" }}>
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" align="center" style={{ textAlign: "center" }}>
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
          {filteredProjects.map((project, index) => {
            const isApex = project.title === "Apex Motion Website";
            return (
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
                {isApex ? (
                  <div
                    style={{
                      width: "100%",
                      height: "220px",
                      borderRadius: "12px",
                      background: "var(--neutral-alpha-weak)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      padding: "12px",
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                ) : (
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
                )}

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
          )})}
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
              <Heading variant="display-strong-m">10+</Heading>
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
