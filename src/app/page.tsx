"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Schema, Icon, IconButton, Tag } from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";

export default function Home() {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Testimonial rotation
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(testimonialTimer);
    };
  }, []);

  const skills = [
    { 
      name: "React & Next.js", 
      icon: "⚛️", 
      color: "#61DAFB",
      proficiency: 95,
      description: "Building scalable web applications",
      projects: 25
    },
    { 
      name: "TypeScript", 
      icon: "TS", 
      color: "#3178C6",
      proficiency: 90,
      description: "Type-safe development",
      projects: 30
    },
    { 
      name: "Python & AI/ML", 
      icon: "🐍", 
      color: "#3776AB",
      proficiency: 85,
      description: "Machine learning & automation",
      projects: 15
    },
    { 
      name: "Node.js", 
      icon: "📦", 
      color: "#339933",
      proficiency: 88,
      description: "Backend & API development",
      projects: 20
    },
  ];

  const featuredProjects = [
    {
      title: "PDF Splitter – Smart color-aware printing",
      description: "Upload once, auto-detect color vs B/W pages, and prep duplex-safe print sets with privacy-first handling.",
      href: "/work/pdf-divider-smart-printing",
      tags: ["Next.js", "Automation", "PDF tooling"],
      stats: { users: "2.5k+", saves: "10k+ sheets" },
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Once UI Design System",
      description: "A customizable design system built with React and TypeScript",
      href: "/work/building-once-ui-a-customizable-design-system",
      tags: ["React", "TypeScript", "Design System"],
      stats: { stars: "1.2k", downloads: "15k+" },
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio Builder",
      description: "Simple yet powerful portfolio builder for developers",
      href: "/work/simple-portfolio-builder",
      tags: ["Next.js", "React", "UI/UX"],
      stats: { users: "500+", templates: "20+" },
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Figma to Code Pipeline",
      description: "Automate design handovers with intelligent code generation",
      href: "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
      tags: ["Automation", "Design", "React"],
      stats: { accuracy: "95%", time_saved: "70%" },
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  const stats = [
    { label: "Projects Completed", value: "47+", icon: "📦", color: "#61DAFB" },
    { label: "Happy Clients", value: "32", icon: "🤝", color: "#3776AB" },
    { label: "Code Commits", value: "5.2k+", icon: "💻", color: "#339933" },
    { label: "Coffee Consumed", value: "∞", icon: "☕", color: "#FF6B6B" },
  ];

  const testimonials = [
    {
      text: "Outstanding developer! Delivered a complex web app ahead of schedule with exceptional quality.",
      author: "Sarah Chen",
      role: "CTO, TechStart",
      avatar: "🎯",
      rating: 5
    },
    {
      text: "Their attention to detail and problem-solving skills are truly impressive. Highly recommended!",
      author: "Mike Rodriguez",
      role: "Product Manager, InnovateCo",
      avatar: "🚀",
      rating: 5
    },
    {
      text: "Transformed our design into a pixel-perfect, performant application. Great communication throughout.",
      author: "Emma Thompson",
      role: "Design Lead, CreativeHub",
      avatar: "✨",
      rating: 5
    }
  ];

  const achievements = [
    { icon: "🏆", text: "Top 5% on GitHub" },
    { icon: "⭐", text: "15k+ GitHub Stars" },
    { icon: "📚", text: "Published 12 Articles" },
    { icon: "🎤", text: "Speaker at 3 Conferences" },
  ];

  return (
    <Column maxWidth="m" gap="xl" horizontal="center" paddingX="l">
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '3px',
          background: 'linear-gradient(90deg, var(--brand-strong), var(--accent-strong))',
          zIndex: 1000,
          transition: 'width 0.1s ease'
        }}
      />

      {/* Floating Action Button */}
      <IconButton
        href="#top"
        icon="chevronUp"
        size="l"
        variant="secondary"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          opacity: scrollProgress > 10 ? 1 : 0,
          transform: scrollProgress > 10 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      />

      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image="/images/Alan.png"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Hero Section with Parallax */}
      <Column 
        fillWidth 
        paddingTop="40" 
        paddingBottom="24" 
        gap="m" 
        id="top"
        ref={heroRef}
        style={{
          transform: `translateY(${scrollProgress * 0.5}px)`,
          transition: 'transform 0.1s ease'
        }}
      >
        <Column maxWidth="s">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge 
              background="brand-alpha-weak" 
              onBackground="brand-strong" 
              textVariant="label-default-l"
              arrow={false}
              href={home.featured.href}
              style={{
                paddingLeft: "clamp(20px, 3vw, 32px)",
                paddingRight: "clamp(20px, 3vw, 32px)",
                paddingTop: "clamp(10px, 2vw, 14px)",
                paddingBottom: "clamp(10px, 2vw, 14px)",
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 600,
                letterSpacing: "0.5px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Row paddingY="2">
                <span style={{ 
                  display: 'inline-block',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>✨</span> {home.featured.title}
              </Row>
            </Badge>
          </RevealFx>
          )}

          {/* Animated Avatar */}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Flex gap="16" vertical="center">
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                <Avatar 
                  src={person.avatar} 
                  size="xl"
                  style={{
                    border: '4px solid var(--brand-alpha-weak)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                />
                {/* Online indicator */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    border: '3px solid var(--background)',
                    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                  }}
                />
              </div>
              <Column gap="4">
                <Heading wrap="balance" variant="display-strong-l">
                  {home.headline}
                </Heading>
                <Flex gap="8" wrap>
                  <Flex gap="4" vertical="center">
                    <Icon name="globe" size="s" />
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {person.location}
                    </Text>
                  </Flex>
                  {person.languages.map((language) => (
                    <Tag key={language} size="s">{language}</Tag>
                  ))}
                </Flex>
              </Column>
            </Flex>
          </RevealFx>

          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Flex gap="12" wrap>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Flex gap="8" vertical="center" paddingRight="4">
                  {about.title}
                </Flex>
              </Button>
              <Button
                href="#projects"
                variant="tertiary"
                size="m"
                arrowIcon
              >
                View My Work
              </Button>
              {about.calendar.display && (
                <Button
                  href={about.calendar.link}
                  variant="tertiary"
                  size="m"
                  prefixIcon="calendar"
                >
                  Schedule Call
                </Button>
              )}
            </Flex>
          </RevealFx>

          {/* Social Links with Hover Effects */}
          {social.length > 0 && (
            <RevealFx paddingTop="20" delay={0.5}>
              <Flex gap="8" wrap horizontal="start">
                {social.map((item) => (
                  item.link && (
                    <IconButton
                      key={item.name}
                      href={item.link}
                      icon={item.icon}
                      size="m"
                      variant="secondary"
                      style={{
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                        e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  )
                ))}
              </Flex>
            </RevealFx>
          )}
        </Column>
      </Column>

      {/* Achievements Marquee */}
      <RevealFx translateY="12" delay={0.5}>
        <Column fillWidth paddingY="l" style={{ overflow: 'hidden' }}>
          <div style={{ 
            display: 'flex', 
            gap: '24px',
            animation: 'scroll 30s linear infinite',
            width: 'max-content'
          }}>
            {[...achievements, ...achievements].map((achievement, index) => (
              <Flex
                key={index}
                gap="8"
                vertical="center"
                padding="m"
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
                style={{ 
                  minWidth: '200px',
                  whiteSpace: 'nowrap'
                }}
              >
                <Text variant="display-strong-s">{achievement.icon}</Text>
                <Text variant="body-strong-s">{achievement.text}</Text>
              </Flex>
            ))}
          </div>
        </Column>
      </RevealFx>

      {/* Interactive Stats Grid */}
      <RevealFx translateY="12" delay={0.6}>
        <Column fillWidth gap="m" paddingY="l">
          <Flex fillWidth gap="m" wrap horizontal="center">
            {stats.map((stat, index) => (
              <Column
                key={index}
                padding="l"
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
                gap="s"
                align="center"
                style={{
                  flex: "1 1 150px",
                  minWidth: "150px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.borderColor = stat.color + "80";
                  e.currentTarget.style.boxShadow = `0 12px 24px ${stat.color}20`;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.borderColor = "var(--neutral-alpha-weak)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '4px',
                    background: stat.color,
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  className="stat-indicator"
                />
                <Text variant="display-strong-l" style={{ fontSize: "2.5rem" }}>
                  {stat.icon}
                </Text>
                <Heading variant="display-strong-m">{stat.value}</Heading>
                <Text variant="label-default-s" onBackground="neutral-medium" align="center">
                  {stat.label}
                </Text>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Enhanced Skills Section */}
      <RevealFx translateY="16" delay={0.7}>
        <Column fillWidth gap="l" paddingY="xl" id="skills">
          <Heading variant="display-strong-s" align="center">
            Technologies I Master
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Hover over each skill to see proficiency levels and project counts
          </Text>
          <Flex fillWidth gap="m" wrap horizontal="center">
            {skills.map((skill, index) => (
              <Column
                key={index}
                padding="l"
                radius="l"
                border="neutral-alpha-weak"
                background="surface"
                gap="m"
                fillWidth
                style={{
                  flex: "1 1 240px",
                  minWidth: "240px",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  setActiveSkill(index);
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
                  e.currentTarget.style.borderColor = skill.color + "80";
                  e.currentTarget.style.boxShadow = `0 16px 32px ${skill.color}25`;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  setActiveSkill(null);
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.borderColor = "var(--neutral-alpha-weak)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${skill.color}10, transparent)`,
                    opacity: activeSkill === index ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    pointerEvents: 'none'
                  }}
                />

                <Flex vertical="center" gap="m" style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: `${skill.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: activeSkill === index ? "scale(1.15) rotate(10deg)" : "scale(1)",
                      border: `2px solid ${activeSkill === index ? skill.color + '40' : 'transparent'}`
                    }}
                  >
                    <Text variant="display-strong-l" style={{ color: skill.color }}>
                      {skill.icon}
                    </Text>
                  </div>
                  <Column gap="4" fillWidth>
                    <Text variant="heading-strong-m">{skill.name}</Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {skill.description}
                    </Text>
                  </Column>
                </Flex>
                
                {/* Animated Progress Bar */}
                <Column gap="8" fillWidth style={{ position: 'relative', zIndex: 1 }}>
                  <Flex horizontal="space-between" vertical="center">
                    <Text variant="label-default-s" onBackground="neutral-medium">
                      Proficiency
                    </Text>
                    <Badge
                      background="brand-alpha-weak"
                      onBackground="brand-strong"
                      textVariant="label-default-s"
                      style={{
                        opacity: activeSkill === index ? 1 : 0,
                        transform: activeSkill === index ? 'translateX(0)' : 'translateX(10px)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {skill.proficiency}%
                    </Badge>
                  </Flex>
                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "var(--neutral-alpha-weak)",
                      borderRadius: "4px",
                      overflow: "hidden",
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        width: activeSkill === index ? `${skill.proficiency}%` : "0%",
                        height: "100%",
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                        borderRadius: "4px",
                        transition: "width 1s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      {/* Shimmer effect */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          animation: activeSkill === index ? 'shimmer 2s infinite' : 'none'
                        }}
                      />
                    </div>
                  </div>
                  <Flex gap="4" vertical="center" style={{
                    opacity: activeSkill === index ? 1 : 0,
                    transform: activeSkill === index ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.3s ease'
                  }}>
                    <Icon name="checkCircle" size="s" />
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      {skill.projects} projects completed
                    </Text>
                  </Flex>
                </Column>
              </Column>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Featured Projects with Gradient Cards */}
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth gap="l" paddingY="xl" id="projects">
          <Flex fillWidth horizontal="space-between" vertical="center" wrap>
            <Column gap="4">
              <Heading variant="display-strong-s">Featured Projects</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Showcasing my best work and innovative solutions
              </Text>
            </Column>
            <Button
              href="/work"
              variant="secondary"
              size="m"
              arrowIcon
            >
              View all projects
            </Button>
          </Flex>
          <Flex fillWidth gap="l" wrap>
            {featuredProjects.map((project, index) => (
              <Link key={index} href={project.href} style={{ textDecoration: "none", flex: "1 1 320px", minWidth: "320px" }}>
                <Column
                  padding="xl"
                  radius="l"
                  border="neutral-alpha-weak"
                  background="surface"
                  gap="m"
                  fillWidth
                  style={{
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
                    e.currentTarget.style.borderColor = "var(--brand-alpha-strong)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor = "var(--neutral-alpha-weak)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Gradient decoration */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '6px',
                      background: `linear-gradient(90deg, ${project.gradient})`,
                      opacity: 0.8
                    }}
                  />

                  <Heading variant="heading-strong-l" style={{ marginTop: '8px' }}>
                    {project.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {project.description}
                  </Text>
                  
                  {/* Project Stats with Icons */}
                  <Flex gap="16" wrap style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: 'var(--neutral-alpha-weak)'
                  }}>
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <Flex key={i} gap="6" vertical="center">
                        <Text variant="body-strong-s" style={{ color: 'var(--brand-strong)' }}>
                          {value}
                        </Text>
                        <Text variant="label-default-s" onBackground="neutral-weak">
                          {key.replace('_', ' ')}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>

                  <Flex gap="8" wrap>
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        background="brand-alpha-weak"
                        onBackground="brand-strong"
                        textVariant="label-default-s"
                        paddingX="12"
                        paddingY="6"
                        style={{
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Flex>

                  {/* Hover arrow indicator */}
                  <Flex gap="4" vertical="center" style={{
                    marginTop: '8px',
                    color: 'var(--brand-strong)',
                    transition: 'transform 0.3s ease'
                  }}>
                    <Text variant="label-strong-m">View Project</Text>
                    <Icon name="arrowRight" size="s" />
                  </Flex>
                </Column>
              </Link>
            ))}
          </Flex>
        </Column>
      </RevealFx>

      {/* Testimonials Carousel with Star Ratings */}
      <RevealFx translateY="16" delay={0.9}>
        <Column
          fillWidth
          padding="xl"
          radius="l"
          background="surface"
          border="neutral-alpha-weak"
          gap="l"
          align="center"
          style={{
            marginTop: "var(--spacing-xl)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              right: '-50%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 70%)',
              opacity: 0.3,
              pointerEvents: 'none'
            }}
          />

          <Column gap="8" align="center" style={{ position: 'relative', zIndex: 1 }}>
            <Icon name="chat" size="l" />
            <Heading variant="display-strong-s" align="center">
              What Clients Say
            </Heading>
          </Column>
          
          <Column gap="l" align="center" style={{ maxWidth: "700px", position: 'relative', zIndex: 1 }}>
            {/* Star Rating */}
            <Flex gap="4">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Text key={i} variant="heading-strong-l" style={{ color: '#FFD700' }}>⭐</Text>
              ))}
            </Flex>

            <Text
              variant="heading-default-l"
              align="center"
              style={{
                fontStyle: "italic",
                transition: "all 0.5s ease",
                minHeight: "100px",
                display: 'flex',
                alignItems: 'center'
              }}
            >
              "{testimonials[currentTestimonial].text}"
            </Text>
            
            <Column gap="8" align="center">
              <Text
                variant="display-strong-l"
                style={{ fontSize: "4rem" }}
              >
                {testimonials[currentTestimonial].avatar}
              </Text>
              <Column gap="4" align="center">
                <Text variant="heading-strong-m">
                  {testimonials[currentTestimonial].author}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-medium">
                  {testimonials[currentTestimonial].role}
                </Text>
              </Column>
            </Column>

            {/* Navigation Dots */}
            <Flex gap="12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  style={{
                    width: currentTestimonial === index ? "32px" : "12px",
                    height: "12px",
                    borderRadius: "6px",
                    background: currentTestimonial === index 
                      ? "var(--brand-strong)" 
                      : "var(--neutral-alpha-weak)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    if (currentTestimonial !== index) {
                      e.currentTarget.style.background = "var(--brand-alpha-medium)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentTestimonial !== index) {
                      e.currentTarget.style.background = "var(--neutral-alpha-weak)";
                    }
                  }}
                />
              ))}
            </Flex>
          </Column>
        </Column>
      </RevealFx>

      {/* Animated CTA Section */}
      <RevealFx translateY="16" delay={1}>
        <Column
          fillWidth
          padding="xl"
          radius="l"
          background="brand-alpha-weak"
          gap="l"
          horizontal="center"
          align="center"
          style={{
            marginTop: "var(--spacing-xl)",
            marginBottom: "var(--spacing-xl)",
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid var(--brand-alpha-medium)',
            transition: 'all 0.4s ease'
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            setIsHoveringCTA(true);
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px var(--brand-alpha-weak)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            setIsHoveringCTA(false);
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Animated background gradient */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, var(--accent-alpha-weak) 0%, transparent 70%)',
              opacity: isHoveringCTA ? 0.6 : 0,
              transition: 'opacity 0.5s ease',
              pointerEvents: 'none',
              transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
            }}
          />

          <Column gap="m" align="center" style={{ position: 'relative', zIndex: 1 }}>
            <Text variant="display-strong-xs" style={{ 
              fontSize: '3rem',
              animation: isHoveringCTA ? 'bounce 1s ease-in-out infinite' : 'none'
            }}>
              🚀
            </Text>
            <Heading variant="display-strong-l" align="center">
              Let's Build Something Amazing
            </Heading>
          </Column>
          
          <Column maxWidth="s" style={{ position: 'relative', zIndex: 1 }}>
            <Text
              variant="body-default-l"
              onBackground="brand-medium"
              align="center"
            >
              Ready to bring your ideas to life? Let's collaborate and create exceptional digital experiences together.
            </Text>
          </Column>
          
          <Flex gap="m" wrap style={{ position: 'relative', zIndex: 1 }}>
            <Button
              href={`mailto:${person.email}`}
              variant="secondary"
              size="l"
              prefixIcon="mail"
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get in Touch
            </Button>
            <Button
              href="/work"
              variant="tertiary"
              size="l"
              arrowIcon
              style={{
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View Portfolio
            </Button>
          </Flex>

          {/* Quick contact info */}
          <Flex gap="16" wrap horizontal="center" style={{ 
            marginTop: '16px',
            position: 'relative',
            zIndex: 1 
          }}>
            <Flex gap="6" vertical="center">
              <Icon name="mail" size="s" />
              <Text variant="label-default-s" onBackground="brand-medium">
                {person.email}
              </Text>
            </Flex>
            <Flex gap="6" vertical="center">
              <Icon name="globe" size="s" />
              <Text variant="label-default-s" onBackground="brand-medium">
                {person.location}
              </Text>
            </Flex>
          </Flex>
        </Column>
      </RevealFx>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .stat-indicator {
          opacity: 0 !important;
        }
        
        div:hover .stat-indicator {
          opacity: 1 !important;
        }
      `}</style>
    </Column>
  );
}