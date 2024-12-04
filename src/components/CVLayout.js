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
import { padding } from "./ui.css"

export default function CV() {
  const experiences = [
    {
      id: 1,
      role: "Marketing Web Developer",
      company: "Robert Half International",
      duration: "April 2023 - November 2025",
      description:
        "On the FED team, I helped move content from a Drupal CMS to Adobe Experience Manager (AEM) in a fast-paced, multi-country setting. I focused on spotting design, component, and CMS issues each day, carefully writing them up in detailed Jira tickets. I also looked into AEM tools to make workflows smoother, cut down on redundant tasks, and keep data updates efficient globally. Plus, I worked on improving page data to boost global SEO rankings, speed up loading times, and enhance indexing for better visibility and performance on search engines.",
    },
    {
      id: 2,
      role: "Web Developer",
      company: "DigitalNEST",
      duration: "Aug 2022 - Apirl 2023",
      description:
        "When working for a non-profit, I coordinated interns to ensure the timely completion of WordPress projects within established timelines, budgets, and resource constraints. I also managed and maintained the company's website and its clients to guarantee optimal performance, security, and design. Additionally, I troubleshot and stabilized multiple client WordPress websites, effectively resolving issues to ensure smooth functionality and reliability.",
    },
    {
      id: 2,
      role: "Web Developer & Photographer",
      company: "Personal",
      duration: "Jan 2019 - Forever",
      description:
        "Since June 2019, I’ve been on an exciting journey of personal and professional growth, blending my passions for web development and photography in San Jose, CA. Over the years, I’ve tackled various projects, earned valuable certifications, and honed my skills across creative and technical disciplines.",
    },
  ]

  //// FOR TESTING LAYOUT

  const outlineStyle = {
    // border: "1px dashed tomato",
    padding: "8px",
    // marginBottom: "16px",
  }

  return (
    <Layout>
      <Container>
        {/* Header Section */}
        <Section style={outlineStyle}>
          <Box paddingY={4}>
            <Text variant="lead" center>
              Frontend Engineering | Digital Marketing | Photography
            </Text>
            <Text variant="medium" center>
              Building modern web applications and intuitive user interfaces.
              Passionate about performance, design systems, tools that scale,
              and accessibility.
            </Text>
          </Box>
          {/* Creativity Through the Lens Section */}
          <Section>
            <Subhead>Creativity Through the Lens</Subhead>
            <Text>
              As a photographer, I’ve worked to elevate my craft by enhancing
              visual assets with Adobe Photoshop and Lightroom. These tools
              allow me to deliver polished, professional finishes to every
              project I undertake, whether it’s a personal photoshoot or a
              commissioned work.
            </Text>
          </Section>

          {/* <SuperHeading>Gilbert Haro</SuperHeading> */}
        </Section>

        {/* Experience Section */}
        <Section style={outlineStyle}>
          <Box padding={2}>
            <Subhead>Work Experience</Subhead>
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
          <Subhead>Skills</Subhead>
          <Flex wrap gap="1">
            {[
              "HTML",
              "JavaScript",
              "React",
              "React Router",
              "State Management",
              "Hooks",
              "Interactivity",
              "Gatsby",
              "Theme UI",
              "TypeScript",
              "GraphQL",
              "CSS",
              "SCSS",
              "Metadata",
              "Intrinsic design",
              "Accessibility",
              "Styled Components",
              "MDX",
              "AEM",
              "ACS Commons",
              "Content Modeling",
              "Data importer",
              "SEO",
            ].map((skill, idx) => (
              <Box
                key={idx}
                padding={4}
                background="text"
                width="40px"
                center
                style={outlineStyle}
              >
                <Text variant="medium" bold>
                  <span> {skill}</span>
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
                github: "https://github.com/gah-code/gilbertoharosite",
                live: "https://gilbertaharo.com",
              },
              {
                id: 2,
                title: "Photography Website",
                description:
                  "An online photography booking store with dynamic product management, and SCSS design system for branding.",
                github: "https://github.com/gah-code/haro-photo-website",
                live: "https://haro-family-photography.com",
              },
            ]}
          />
        </div>
      </Container>
    </Layout>
  )
}
