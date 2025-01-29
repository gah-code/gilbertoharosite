import React from "react"
import Layout from "../components/layout/layout"
import ResumeStyledCertList from "../components/segments/about/resume-styled-cert-list"
// import BlogIndex from "../templates/blog-index"
import AboutHero from "../components/segments/about/about-hero"
import SkillListGrid from "../components/segments/about/skill-list-grid"
import {
  Container,
  Section,
  SuperHeading,
  Subhead,
  Heading,
  Text,
  Box,
} from "../components/ui/ui"
import UILibraryShowcase from "../components/UILibraryShowcase"

const experience = () => {
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

  const outlineStyle = {
    // border: "1px dashed tomato",
    padding: "8px",
    // marginBottom: "16px",
  }
  return (
    <Layout>
      <Container>
        <Section style={outlineStyle}>
          <Box paddingY={4}>
            <Text variant="lead" center>
              Frontend Engineering | Digital Marketing | Photography //{" "}
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
              allow me to deliver polished, professional finishes to every //
              project I undertake, whether it’s a personal photoshoot or a //
              commissioned work.
            </Text>
          </Section>
        </Section>
      </Container>

      <ResumeStyledCertList />
      {/* <UILibraryShowcase /> */}
      {/* <BlogIndex /> */}
      {/* <AboutHero /> */}
      <SkillListGrid />
    </Layout>
  )
}

export default experience
