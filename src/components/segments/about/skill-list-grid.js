import * as React from "react"
import { Container, Section, FlexList, Box, Text, Heading } from "../../ui/ui"

// Static Mock Data for Skills
const skillList = [
  { id: "skill-1", name: "HTML5", description: "Markup language for the web" },
  {
    id: "skill-2",
    name: "CSS3",
    description: "Style and layout for web pages",
  },
  {
    id: "skill-3",
    name: "JavaScript",
    description: "Interactive web development",
  },
  {
    id: "skill-4",
    name: "React",
    description: "Library for building user interfaces",
  },
  {
    id: "skill-5",
    name: "Node.js",
    description: "Server-side JavaScript runtime",
  },
  { id: "skill-6", name: "GraphQL", description: "API query language" },
  { id: "skill-7", name: "Gatsby", description: "Static site generator" },
  { id: "skill-8", name: "Git", description: "Version control system" },
  { id: "skill-9", name: "Figma", description: "UI/UX design tool" },
]

// Skill Card Component
function SkillCard({ name, description }) {
  return (
    <Box
      // padding={3}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #eaeaea",
        borderRadius: "8px",
        textAlign: "center",
        padding: "1rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        height: "100%", // Ensures equal height
      }}
    >
      <Heading as="h3" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
        {name}
      </Heading>
      <Text style={{ fontSize: "0.9rem", color: "#666" }}>{description}</Text>
    </Box>
  )
}

// Skill List Grid Component
export default function SkillListGrid() {
  return (
    <Section style={{ backgroundColor: "#f9f9f9", padding: "2rem 0" }}>
      <Container>
        {/* Section Heading */}
        <Box center paddingY={4}>
          <Heading as="h2">My Skills</Heading>
          <Text>Here’s a quick overview of my technical expertise.</Text>
        </Box>

        {/* Skills Grid */}
        <FlexList
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            padding: "0 1rem",
          }}
        >
          {skillList.map((skill) => (
            <SkillCard
              key={skill.id}
              name={skill.name}
              description={skill.description}
            />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}
