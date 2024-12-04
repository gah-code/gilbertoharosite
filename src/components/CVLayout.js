import React from "react"
import { CertificateList } from "./CertificateList"
import { ProjectList } from "./ProjectList"
import Layout from "./layout"
import {
  Container,
  Section,
  SuperHeading,
  Subhead,
  Heading,
  Text,
  Box,
  List,
  Flex,
} from "./ui"

export default function CV() {
  const experiences = [
    {
      id: 1,
      role: "Marketing Web Developer",
      company: "Robert Half International",
      duration: "April 2023 - November 2025",
      description:
        "Assisted in migration from a legacy CMS to AEM in a fast-paced environment across different countries.",
    },
    {
      id: 2,
      role: "Web Developer",
      company: "DigitalNEST",
      duration: "Aug 2022 - Apirl 2023",
      description:
        "Built custom WordPress themes and plugins. Optimized websites for performance and accessibility.",
    },
    {
      id: 2,
      role: "Web Developer & Photographer",
      company: "Personal",
      duration: "",
      description:
        "Enhanced visual assets through Adobe Photoshop and Lightroom for a polished, professional finish.",
    },
  ]

  const education = [
    {
      id: 1,
      degree: "B.Sc. in Computer Science",
      institution: "University of Technology",
      year: "2016 - 2020",
    },
    {
      id: 2,
      degree: "Google UX Design Certificate",
      institution: "Google",
      year: "2021",
    },
  ]

  const outlineStyle = {
    border: "1px dashed tomato",
    padding: "8px",
    marginBottom: "16px",
  }

  return (
    <Layout>
      <Container>
        {/* Header Section */}
        <Section style={outlineStyle}>
          <Box paddingY={4}>
            <Text variant="lead" center>
              Frontend Developer | UI/UX Designer
            </Text>
            <Text variant="medium" center>
              Experienced in building modern web applications and intuitive user
              interfaces. Passionate about performance, design systems, tools,
              and accessibility.
            </Text>
          </Box>
          {/* <SuperHeading>Gilbert Haro</SuperHeading> */}
        </Section>

        {/* Experience Section */}
        <Section style={outlineStyle}>
          <Box padding={2}>
            <Subhead>Experience</Subhead>
          </Box>
          <List>
            {experiences.map((exp) => (
              <Box
                key={exp.id}
                radius="button"
                background="background"
                marginY={3}
                style={outlineStyle}
              >
                <Text variant="medium" bold>
                  {exp.role}
                </Text>
                <Text variant="body" bold>
                  {exp.company}
                </Text>
                <Text variant="small">{exp.duration}</Text>
                <Text>{exp.description}</Text>
              </Box>
            ))}
          </List>
        </Section>
        {/* Skills Section */}
        <Section style={outlineStyle}>
          <Text variant="heading">Skills</Text>
          <Flex wrap gap="1">
            {[
              "HTML",
              "JavaScript",
              "React",
              "Gatsby",
              "TypeScript",
              "GraphQL",
              "CSS",
              "Accessibility",
              "Styled Components",
              "MDX",
              "AEM",
            ].map((skill, idx) => (
              <Box
                key={idx}
                padding={4}
                background="primary"
                center
                style={outlineStyle}
              >
                <Text variant="caps" bold>
                  {skill}
                </Text>
              </Box>
            ))}
          </Flex>
        </Section>

        {/* Certificates Section */}
        <div style={outlineStyle}>
          <CertificateList
            certificates={[
              {
                id: 1,
                title: "Gatsby.js Tutorial and Projects Course",
                date: "2024",
              },
              {
                id: 2,
                title: "Crash Course: Build a Full-Stack Web App in a Weekend!",
                date: "2023",
              },
              {
                id: 3,
                title: "M103:Basic Cluster Administration",
                date: "2021",
              },
              {
                id: 4,
                title:
                  "UX & Web Design Master Course: Strategy, Design, Development",
                date: "2023",
              },
              {
                id: 5,
                title:
                  "Node.js, Express, MongoDB & More: The Complete Bootcamp",
                date: "2021",
              },
              {
                id: 6,
                title: "UX & Design Master Course",
                date: "2023",
              },
            ]}
          />
        </div>

        {/* Projects Section */}
        <div style={outlineStyle}>
          <ProjectList
            projects={[
              {
                id: 1,
                title: "Personal Website",
                description:
                  "A responsive web application using Gatsby, Contentful, GraphQL, and more to showcase my skills and projects on my portfolio site.",
                github: "https://github.com/example/portfolio",
                live: "https://example.com/portfolio",
              },
              {
                id: 2,
                title: "Photography Website",
                description:
                  "An online store with payment integration and dynamic product management.",
                github: "https://github.com/example/ecommerce-store",
                live: "https://example.com/ecommerce",
              },
            ]}
          />
        </div>
      </Container>
    </Layout>
  )
}
