import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { motion } from "framer-motion"

import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "../ui/ui"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Reduced delay between letters
    },
  },
}

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15, // Faster transition
      ease: "easeOut",
    },
  },
}

function SubheadMotion({ children, ...props }) {
  return (
    <motion.h2
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      {...props}
    >
      {children.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  )
}

export default function Hero({ image, kicker, h1, subhead, text, links }) {
  return (
    <Section>
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            {image && (
              <GatsbyImage
                alt={image.alt}
                image={getImage(image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {kicker && <Kicker>{kicker}</Kicker>}
              {h1}
            </Heading>
            <SubheadMotion as="h2">{subhead}</SubheadMotion>
            <Text as="p">{text}</Text>
            <ButtonList links={links} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    kicker
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
