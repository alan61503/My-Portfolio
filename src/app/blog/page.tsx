import { Badge, Column, Flex, Heading, Icon, Meta, RevealFx, Schema, Text } from "@once-ui-system/core";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column 
      maxWidth="m" 
      gap="xl" 
      horizontal="center" 
      paddingY="48"
      paddingX="l"
      fillWidth
    >
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      <RevealFx translateY={6}>
        <Column 
          align="center" 
          horizontal="center" 
          gap="l" 
          fillWidth
          style={{ textAlign: "center" }}
        >
          <Badge 
            background="brand-alpha-weak" 
            onBackground="brand-strong" 
            textVariant="label-default-l"
            paddingX="32"
            style={{
              paddingTop: "14px",
              paddingBottom: "14px",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.5px"
            }}
          >
            Blog
          </Badge>
          
          <Heading 
            variant="display-strong-l" 
            align="center"
            style={{ 
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: "1.2"
            }}
          >
            Tutorials & Tips
            <br />
            <span style={{ 
              background: "linear-gradient(135deg, var(--brand-on-background-strong), var(--accent-on-background-strong))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Coming Soon
            </span>
          </Heading>
          
          <Column 
            maxWidth="s" 
            horizontal="center"
            gap="m"
          >
            <Text 
              variant="body-default-l" 
              onBackground="neutral-medium" 
              align="center"
              style={{ 
                fontSize: "18px",
                lineHeight: "1.6",
                opacity: 0.8
              }}
            >
              I'm working on some exciting tutorials, tips & tricks, and coding insights. 
              Stay tuned for practical guides and helpful content!
            </Text>
          </Column>
        </Column>
      </RevealFx>

      <RevealFx translateY={8} delay={0.1}>
        <Flex
          gap="24"
          wrap
          horizontal="center"
          fillWidth
          style={{ marginTop: "16px" }}
        >
          <Column
            gap="m"
            padding="32"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ 
              flex: "1 1 280px",
              maxWidth: "320px",
              textAlign: "center"
            }}
          >
            <Flex
              horizontal="center"
              vertical="center"
              radius="l"
              style={{ 
                width: 64, 
                height: 64, 
                background: "var(--brand-alpha-weak)",
                margin: "0 auto 16px"
              }}
            >
              <Icon name="book" size="l" onBackground="brand-strong" />
            </Flex>
            <Heading variant="heading-strong-m" align="center">
              Tutorials
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-medium" align="center">
              Step-by-step guides to help you build amazing projects
            </Text>
          </Column>

          <Column
            gap="m"
            padding="32"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ 
              flex: "1 1 280px",
              maxWidth: "320px",
              textAlign: "center"
            }}
          >
            <Flex
              horizontal="center"
              vertical="center"
              radius="l"
              style={{ 
                width: 64, 
                height: 64, 
                background: "var(--accent-alpha-weak)",
                margin: "0 auto 16px"
              }}
            >
              <Icon name="rocket" size="l" onBackground="accent-strong" />
            </Flex>
            <Heading variant="heading-strong-m" align="center">
              Tips & Tricks
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-medium" align="center">
              Quick tips and clever solutions to common coding challenges
            </Text>
          </Column>

          <Column
            gap="m"
            padding="32"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ 
              flex: "1 1 280px",
              maxWidth: "320px",
              textAlign: "center"
            }}
          >
            <Flex
              horizontal="center"
              vertical="center"
              radius="l"
              style={{ 
                width: 64, 
                height: 64, 
                background: "var(--brand-alpha-weak)",
                margin: "0 auto 16px"
              }}
            >
              <Icon name="document" size="l" onBackground="brand-strong" />
            </Flex>
            <Heading variant="heading-strong-m" align="center">
              Insights
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-medium" align="center">
              Thoughts on development, best practices, and industry trends
            </Text>
          </Column>
        </Flex>
      </RevealFx>
    </Column>
  );
}
