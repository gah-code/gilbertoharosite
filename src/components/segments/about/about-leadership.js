import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  FlexList,
  Heading,
  Section,
  Text,
  Box,
  Kicker,
  Space,
} from "../../ui/ui"

// Static Mock Data for Testing
const mockLeadershipData = {
  kicker: "Our Leadership Team",
  heading: "Meet the Team Behind the Success",
  subhead:
    "We’re proud to have a diverse group of talented individuals leading our organization to new heights.",
  content: [
    {
      id: "1",
      name: "Jane Doe",
      jobTitle: "CEO & Founder",
      image: {
        url: "https://via.placeholder.com/300x300",
        alt: "Jane Doe - CEO",
        gatsbyImageData: null,
      },
    },
    {
      id: "2",
      name: "John Smith",
      jobTitle: "Head of Engineering",
      image: {
        url: "https://via.placeholder.com/300x300",
        alt: "John Smith - Head of Engineering",
        gatsbyImageData: null,
      },
    },
    {
      id: "3",
      name: "Sara Lee",
      jobTitle: "Head of Design",
      image: {
        url: "https://via.placeholder.com/300x300",
        alt: "Sara Lee - Head of Design",
        gatsbyImageData: null,
      },
    },
  ],
}

// Individual Profile Component
function AboutProfile(props) {
  return (
    <Box width="third" padding={4} center>
      {/* Image with Fallback */}
      {props.image && props.image.url ? (
        <img
          src={props.image.url}
          alt={props.image.alt}
          style={{ width: "100%", borderRadius: "50%" }}
        />
      ) : (
        <GatsbyImage
          alt={props.image.alt}
          image={getImage(props.image.gatsbyImageData)}
        />
      )}

      <Space size={3} />
      {/* Name and Job Title */}
      <Box>
        {props.name && (
          <Text variant="medium" bold center>
            {props.name}
          </Text>
        )}
        {props.jobTitle && (
          <Text variant="medium" center>
            {props.jobTitle}
          </Text>
        )}
      </Box>
    </Box>
  )
}

// Main Leadership Component
export default function AboutLeadership() {
  const { kicker, heading, subhead, content } = mockLeadershipData

  return (
    <Section>
      <Container width="tight">
        {/* Header Section */}
        <Box center paddingY={4}>
          {kicker && <Kicker>{kicker}</Kicker>}
          {heading && <Heading as="h1">{heading}</Heading>}
          {subhead && <Text>{subhead}</Text>}
        </Box>

        {/* Profiles Section */}
        <FlexList gap={0} variant="center" alignItems="start">
          {content.map((profile) => (
            <AboutProfile key={profile.id} {...profile} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}
