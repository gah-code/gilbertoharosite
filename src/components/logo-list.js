import * as React from "react"
import { graphql } from "gatsby"
import {
  Space,
  Container,
  Section,
  FlexList,
  Text,
  Logo,
  Box,
  Subhead,
} from "./ui"

export function LogoItem(props) {
  if (!props.image) return null

  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="medium" />
  )
}

export default function LogoList(props) {
  return (
    <Section paddingY={4}>
      <Container width="narrow">
        <Box paddingY={3}>
          <Subhead as="h2">Thanks for Visting</Subhead>
          <Text as="p">
            I enjoy tackling creative technical challenges, especially in
            content management systems and design-focused UI development. My
            journey in technology began before the pandemic, and my background
            in photography and film continues to influence my development
            approach. Passionate about creating digital experiences that are
            both functional and visually appealing!
          </Text>
          <Text as="p">
            This is where I compile some of my favorite discoveries and
            concepts.
          </Text>
        </Box>
        {props.text && (
          <Text center variant="lead">
            {props.text}
          </Text>
        )}
        <Space size={4} />
        {/* <FlexList gap={4} variant="center">
          {props.logos.map(
            (logo) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList> */}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
