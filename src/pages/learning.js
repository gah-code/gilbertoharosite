import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ResumeStyledCertList from "../components/ui/certifications/resume-styled-cert-list"
import {
  Box,
  Container,
  Heading,
  Section,
  Space,
  Text,
} from "../components/ui/ui"
import SEOHead from "../components/head"
import SkillListGrid from "../components/ui/skills/skill-list-grid"
import * as styles from "../components/design-system/about-hero.css.ts"

const mockAboutHero = {
  heading: "Learning Center.",
  text: "Frontend contributor, dedicated to creating engaging user experiences through expressive design and engineering.",
  image: {
    alt: "Learning Center Hero Image",
    gatsbyImageData: {
      images: {
        sources: [],
      },
      layout: "constrained",
      width: 1200,
      height: 600,
    },
    url: "https://images.ctfassets.net/rpilh1nqkh8b/137fdMkGZdqGeE3GXuFB6B/dfdf272aa4a2f2b15b27f8cb6d062464/hero-design.jpeg?w=1184&h=888&q=50&fm=webp", // Static web image for testing
  },
}

function AboutHero(props) {
  const { heading, text, image } = mockAboutHero

  return (
    <Section padding={1} background="background">
      <Container>
        <Heading className={styles.aboutHeroHeader}>{heading}</Heading>
        <Text className={styles.aboutHeroText}>{text}</Text>
      </Container>
      {/* Image */}
      <Container width="tight">
        {/* {image?.url ? (
          <img
            src={image.url}
            alt={image.alt}
            className={styles.aboutHeroImage}
            style={{ width: "70%", borderRadius: "8px" }}
          />
        ) : (
          <GatsbyImage
            alt={image.alt}
            image={getImage(image.gatsbyImageData)}
            className={styles.aboutHeroImage}
          />
        )}{" "}
      </Container> */}
      </Container>
      <Container>
        <Heading className={styles.aboutHeroHeader}>Enthusiasm</Heading>
        <Text className={styles.aboutHeroText}>
          My learning approach is centered around envisioning an interface I
          wanted to develop, incorporating my approach. This method has helped
          me navigate the vast landscape of trends and information, allowing me
          to concentrate on what I needed to learn rather than what I wanted to
          know when starting my training. I dedicated time to building on the
          fundamentals from the ground up, which fueled my enthusiasm for
          acquiring the ins and outs of knowledge related to front-end
          engineering. I opted for project-based courses that involved hands-on
          coding of web applications, following a some what linear path building
          on CSS and Javascript while pursuing various side projects for deeper
          specialization in frameworks, styling, and marketing enhancements.{" "}
        </Text>
        <Text className={styles.aboutHeroText}>
          My learning focuses on creating web applications that are visually
          appealing, function correctly, and support marketing objectives to
          improve user experience and foster business growth.
        </Text>
        <Text className={styles.aboutHeroText}>
          I am on a journey to become an impactful front-end contributor,
          dedicated to creating engaging user experiences through expressive
          design and engineering. My core passion lies in developing
          user-centric patterns and data-driven solutions.
        </Text>
        <Text> Myspace mindset, with modern tech.</Text>
      </Container>
    </Section>
  )
}

const Learning = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site

  const outlineStyle = {
    border: "1px dashed tomato",
    padding: "8px",
    marginTop: "20px",
  }
  return (
    <Layout>
      <Container>
        <AboutHero />
        <ResumeStyledCertList />

        <SkillListGrid />
      </Container>
    </Layout>
  )
}

export default Learning

export const Head = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site

  return (
    <SEOHead
      title="Learning Center | My Web Devlopment Tech Journey"
      description="Explore a curated collection of resources, tutorials, and insights on frontend development, design systems, and modern web technologies. Keep learning, building, and growing 🚀."
      image={null} // Replace with an actual image if available
      url={`${siteMetadata.siteUrl}/learning`}
      author={siteMetadata.author}
    />
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
      }
    }
  }
`
