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
import { motion } from "framer-motion"

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

import {
  heroStyles,
  titleStyles,
  subtitleStyles,
  highlightedStyles,
  descriptionStyles,
  dataStyles,
  skillListStyles,
  skillStyles,
  responsiveStyles,
} from "../components/design-system/skill.css"

const skills = [
  {
    skill: "HTML",
    level: "advanced",
    color: "",
    icon: "https://skillicons.dev/icons?i=html",
  },

  {
    skill: "CSS",
    level: "advanced",
    color: "",
    icon: "https://skillicons.dev/icons?i=css",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "",
    icon: "https://skillicons.dev/icons?i=js",
  },
  {
    skill: "NextJs",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=nextjs",
  },
  {
    skill: "Supabase",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=supabase",
  },
  {
    skill: "TypeScript",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=typescript",
  },
  {
    skill: "React",
    level: "advanced",
    color: "",
    icon: "https://skillicons.dev/icons?i=react",
  },
  {
    skill: "React Query",
    level: "beginner",
    color: "",
    icon: "",
  },
  {
    skill: "Gatsby",
    level: "advanced",
    color: "",
    icon: "https://skillicons.dev/icons?i=gatsby",
  },
  {
    skill: "SCSS",
    level: "intermediate",
    color: "",
    icon: "https://skillicons.dev/icons?i=sass",
  },
  {
    skill: "GraphQL",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=graphql",
  },
  {
    skill: "Storybook",
    level: "beginner",
    color: "",
    icon: "",
  },
  {
    skill: "Netlify",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=netlify",
  },
  {
    skill: "Markdown",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=markdown",
  },
  {
    skill: "NPM",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=npm",
  },
  {
    skill: "WordPress",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=wordpress",
  },
  {
    skill: "Tailwind",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=tailwind",
  },
  {
    skill: "obsidian",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=obsidian",
  },

  {
    skill: "PHP",
    level: "beginner",
    color: "",
    icon: "https://skillicons.dev/icons?i=php",
  },
]

function SkillSection() {
  return (
    <section className={heroStyles}>
      <h1 className={titleStyles}>Welcome to My Skills</h1>
      <h2 className={subtitleStyles}>A breakdown of my expertise</h2>
      <div className={descriptionStyles}>Here are some of my skills:</div>
      <div className={dataStyles}>
        <SkillList />
      </div>
    </section>
  )
}

function SkillList() {
  return (
    <div className={skillListStyles}>
      {skills.map(({ skill, color, icon }) => (
        <Skill key={skill} skill={skill} color={color} icon={icon} />
      ))}
    </div>
  )
}

function Skill({ skill, color, icon }) {
  return (
    <div className={skillStyles} style={{ backgroundColor: color }}>
      {icon && (
        <img
          src={icon}
          alt={`${skill} icon`}
          style={{
            width: "23px",
            height: "23px",
            marginRight: "11px",
            borderRadius: "10px",
          }}
        />
      )}
      <span>{skill}</span>
    </div>
  )
}

function AboutHero(props) {
  const { heading, text, image } = mockAboutHero

  return (
    <Section background="background">
      <Heading className={styles.aboutHeroHeader}>{heading}</Heading>
      <Text className={styles.aboutHeroText}>{text}</Text>
      <SkillList />
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
      <Heading className={styles.aboutHeroHeader}>Enthusiasm</Heading>
      <Text className={styles.aboutHeroText}>
        My learning approach focuses on finding solutions based on business and
        marketing goals while building interfaces that have personality. This
        method has enabled me to navigate the vast landscape of trends and
        information, allowing me to concentrate on what I need to learn from
        functional and branding perspectives. I emphasize building on the
        fundamentals from the ground up, which has fueled my enthusiasm for
        mastering the intricacies of front-end engineering.
      </Text>
      <Text className={styles.aboutHeroText}>
        I chose project-based courses that involved hands-on coding of web
        applications, following a somewhat linear path that built upon my
        knowledge of CSS and JavaScript. Additionally, I pursued various side
        projects to deepen my specialization in frameworks, styling, and
        marketing enhancements.
      </Text>

      {/* TODO: TOOLS I USE */}
    </Section>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}
const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      opacity: { duration: 0.4 },
    },
  },
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
      <Container width="narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <AboutHero />
        </motion.div>
        {/* <SkillListGrid /> */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
        >
          <ResumeStyledCertList />
        </motion.div>
        <Text className={styles.aboutHeroText}>
          I am on a journey to become an impactful front-end contributor,
          dedicated to creating engaging user experiences through expressive
          design and engineering. My core passion lies in developing
          user-centric patterns and data-driven solutions.
        </Text>
        <Text>Myspace mindset, with modern tech.</Text>
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
