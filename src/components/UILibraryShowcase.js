import React from "react"
import {
  Container,
  Section,
  SuperHeading,
  Heading,
  Subhead,
  Text,
  Flex,
  Box,
  Button,
  ButtonList,
  Link,
  FlexList,
  Avatar,
  Logo,
  Icon,
  List,
} from "./ui"

export default function UILibraryShowcase() {
  return (
    <Container>
      <Section>
        <SuperHeading>UI Library Showcase</SuperHeading>
        <Text variant="lead" center>
          A comprehensive guide to all components and styles in the library.
        </Text>
      </Section>

      <Section>
        <Heading>Typography Variants</Heading>
        <Box padding="4" radius="small" background="background">
          <SuperHeading>SuperHeading</SuperHeading>
          <Heading>Heading</Heading>
          <Subhead>Subhead</Subhead>
          <Text variant="kicker">Kicker</Text>
          <Text variant="body">Body Text</Text>
          <Text variant="lead">Lead Text</Text>
          <Text variant="small">Small Text</Text>
          <Text variant="bold">Bold Text</Text>
        </Box>
      </Section>

      <Section>
        <Heading>Buttons</Heading>
        <Flex gap="3">
          <Button variant="primary">Primary Button</Button>
          <Button variant="reversed">Reversed Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="linkReversed">Link Reversed Button</Button>
        </Flex>
      </Section>

      <Section>
        <Heading>Links</Heading>
        <FlexList gap="3">
          <Link href="https://example.com">External Link</Link>
          <Link to="/internal">Internal Link</Link>
        </FlexList>
      </Section>

      <Section>
        <Heading>Containers and Layout</Heading>
        <Flex gap="3" wrap>
          <Box width="half" background="primary" padding="4" radius="small">
            Half Width Box
          </Box>
          <Box width="quarter" background="primary" padding="4" radius="small">
            Quarter Width Box
          </Box>
          <Box width="full" background="primary" padding="4" radius="small">
            Full Width Box
          </Box>
        </Flex>
      </Section>

      <Section>
        <Heading>Lists</Heading>
        <Subhead>Unordered List</Subhead>
        <List>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </List>
        <Subhead>Flex List</Subhead>
        <FlexList>
          <li>Flex Item 1</li>
          <li>Flex Item 2</li>
          <li>Flex Item 3</li>
        </FlexList>
      </Section>

      <Section>
        <Heading>Visual Elements</Heading>
        <Flex gap="3" wrap>
          <Avatar
            alt="Avatar Example"
            image={{
              gatsbyImageData: {}, // Replace with valid image data
            }}
          />
          <Logo
            alt="Logo Example"
            size="small"
            image={{
              gatsbyImageData: {}, // Replace with valid image data
            }}
          />
          <Icon
            alt="Icon Example"
            size="medium"
            image={{
              gatsbyImageData: {}, // Replace with valid image data
            }}
          />
        </Flex>
      </Section>

      <Section>
        <Heading>Interactive Components</Heading>
        <Flex gap="3">
          <Button variant="primary">Click Me</Button>
          <Link href="/about">Learn More</Link>
        </Flex>
      </Section>

      <Section>
        <Heading>Complex Components</Heading>
        <ButtonList
          links={[
            { id: 1, href: "/contact", text: "Contact Us" },
            { id: 2, href: "/about", text: "About Us" },
          ]}
        />
      </Section>
    </Container>
  )
}
