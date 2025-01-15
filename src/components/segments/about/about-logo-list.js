import * as React from "react"
import { Container, Heading, FlexList, LinkList, Section, Box } from "../../ui"
import { LogoItem } from "../../logo-list"

// Static Mock Data for Testing
const mockLogoListData = {
  heading: "Our Partners",
  links: [
    { id: "1", href: "https://example.com", text: "Visit Our Website" },
    { id: "2", href: "https://example.com/contact", text: "Contact Us" },
  ],
  logos: [
    {
      id: "logo-1",
      alt: "Company A Logo",
      image: {
        url: "https://via.placeholder.com/150x50",
        alt: "Company A Logo",
      },
    },
    {
      id: "logo-2",
      alt: "Company B Logo",
      image: {
        url: "https://via.placeholder.com/150x50",
        alt: "Company B Logo",
      },
    },
    {
      id: "logo-3",
      alt: "Company C Logo",
      image: {
        url: "https://via.placeholder.com/150x50",
        alt: "Company C Logo",
      },
    },
  ],
}

// Mock LogoItem Component
function MockLogoItem({ image, alt }) {
  return (
    <img
      src={image.url}
      alt={alt}
      style={{ width: "150px", height: "50px", objectFit: "contain" }}
    />
  )
}

export default function AboutLogoList() {
  const { heading, links, logos } = mockLogoListData

  return (
    <Section>
      {/* Heading and Links */}
      <Container>
        <Box center>
          {heading && <Heading>{heading}</Heading>}
          {links && <LinkList links={links} />}
        </Box>
      </Container>

      {/* Logo List */}
      <Container width="narrow">
        <Box paddingY={6}>
          <FlexList gap={5} variant="center">
            {logos.map((logo, i) => (
              <li key={`${logo.id}-${i}`}>
                <MockLogoItem {...logo} />
              </li>
            ))}
          </FlexList>
        </Box>
      </Container>
    </Section>
  )
}
