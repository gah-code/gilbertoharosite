import React from "react"
import { Section, Heading, List, Box, Text, Flex, Link, Subhead } from "./ui"

export function ProjectList({ projects = [] }) {
  return (
    <Section>
      <Box padding={2}>
        <Subhead>Projects</Subhead>
      </Box>
      <List>
        {projects.map((project) => (
          <Box
            key={project.id}
            padding={2}
            radius="small"
            background="background"
            marginY={3}
          >
            <Text variant="lead" bold>
              {project.title}
            </Text>
            <Text variant="body" marginBottom="3">
              {project.description}
            </Text>
            <Flex gap="4">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </Link>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </Link>
            </Flex>
          </Box>
        ))}
      </List>
    </Section>
  )
}
