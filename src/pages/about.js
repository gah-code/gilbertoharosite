import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import { Container, Section, Box, Subhead, Text } from "../components/ui"
import CVLayout from "../components/CVLayout"

export default function About(props) {
  const { aboutPage } = props.data

  return (
    <Layout>
      {aboutPage ? (
        aboutPage.blocks.map((block) => {
          const { id, blocktype, ...componentProps } = block
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...componentProps} />
        })
      ) : (
        <Section paddingY={4} padding={3}>
          <Container width="narrow">
            <Box paddingY={3}>
              <Subhead as="h1">How it all started</Subhead>{" "}
              <Text as="p">
                In my childhood, I can now see the seeds of my current career
                taking root. I spent countless hours doodling in my notebooks,
                crafting makeshift comic books, and experimenting with different
                fonts—all in pursuit of creativity. My fascination with digital
                expression flourished during the MySpace era, eventually guiding
                me to professional photography.
              </Text>
              <Text as="p">
                Yet, deep down, I yearned for a vibrant platform to showcase my
                work. That's when I discovered the exhilarating world of web
                development, a true game-changer! It offered a stage for my
                photography and unlocked a wealth of opportunities. I embraced
                projects that allowed me to blend all my passions and skills.
                Now, as a Web Developer, I fuse my love for design patterns,
                color, digital artistry, and branding into unique and meaningful
                digital experiences.
              </Text>
            </Box>
          </Container>
        </Section>
      )}
    </Layout>
  )
}
export const Head = (props) => {
  const { aboutPage } = props.data
  return <SEOHead {...aboutPage} />
}
export const query = graphql`
  {
    aboutPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
