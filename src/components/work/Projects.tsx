import { getPosts } from "@/utils/utils";
import { Column, Heading, Text, RevealFx, Badge, Flex } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column
      fillWidth
      gap="xl"
      marginBottom="40"
      paddingX="l"
      style={{
        // responsive horizontal padding: min 16px, up to 48px (approx), scales with viewport
        paddingLeft: "clamp(16px, 4vw, 48px)",
        paddingRight: "clamp(16px, 4vw, 48px)",
      }}
    >
      {/* Header */}
      <RevealFx translateY="4" fillWidth>
        <Column
          gap="m"
          paddingY="24"
          align="center"
          horizontal="center"
          style={{ maxWidth: 980, marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          <Badge
            background="brand-alpha-weak"
            paddingX="12"
            paddingY="4"
            onBackground="neutral-strong"
            textVariant="label-default-s"
            style={{ width: "fit-content" }}
          >
            Portfolio
          </Badge>

          <Heading wrap="balance" variant="display-strong-l" align="center">
            Portfolio Showcase
          </Heading>

          <Heading variant="heading-strong-m" align="center" style={{ marginTop: 4 }}>
            Featured Projects
          </Heading>

          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            <span style={{ display: "inline-block", maxWidth: "40rem" }}>
              Innovative solutions built with modern technologies. From full-stack applications to AI-powered systems.
            </span>
          </Text>
        </Column>
      </RevealFx>

      {/* Projects Count */}
      <RevealFx translateY="8" delay={0.1} fillWidth>
        <Flex gap="12" vertical="center">
          <Text variant="body-default-m" onBackground="neutral-weak">
            {displayedProjects.length} {displayedProjects.length === 1 ? 'Project' : 'Projects'}
          </Text>
          <div style={{ flex: 1, height: "1px", background: "var(--neutral-alpha-weak)" }} />
        </Flex>
      </RevealFx>

      {/* Project Cards - centered container */}
      <Column style={{ maxWidth: 1100, marginLeft: "auto", marginRight: "auto", width: "100%" }} gap="xl">
        {displayedProjects.map((post, index) => (
          <RevealFx key={post.slug} translateY="8" delay={0.15 + index * 0.05} fillWidth>
            <ProjectCard
              priority={index < 2}
              href={`work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
              link={post.metadata.link || ""}
              year={post.metadata.publishedAt ? new Date(post.metadata.publishedAt).getFullYear().toString() : undefined}
            />
          </RevealFx>
        ))}
      </Column>
    </Column>
  );
}
