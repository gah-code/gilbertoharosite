import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading, Heading } from "../../ui"
import * as styles from "./about-hero.css"

// Static Data for Testing
const mockAboutHero = {
  heading: "Welcome to Our Story",
  text: "We are dedicated to building high-quality solutions that inspire people. Learn more about our journey and what drives us forward.",
  image: {
    alt: "About Us Hero Image",
    gatsbyImageData: {
      images: {
        sources: [],
      },
      layout: "constrained",
      width: 1200,
      height: 600,
    },
    url: "https://via.placeholder.com/1200x600", // Static web image for testing
  },
}

export default function AboutHero(props) {
  const { heading, text, image } = mockAboutHero

  return (
    <Section padding={3} background="background">
      <Container>
        {/* Heading */}
        <Heading className={styles.aboutHeroHeader}>{heading}</Heading>

        {/* Text */}
        {text && <Text className={styles.aboutHeroText}>{text}</Text>}
      </Container>

      {/* Image */}
      <Container width="wide">
        {image?.url ? (
          <img
            src={image.url}
            alt={image.alt}
            className={styles.aboutHeroImage}
            style={{ width: "100%", borderRadius: "8px" }}
          />
        ) : (
          <GatsbyImage
            alt={image.alt}
            image={getImage(image.gatsbyImageData)}
            className={styles.aboutHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}
