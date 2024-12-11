import React from "react"
import { Section, Heading, List, Box, Text, Subhead } from "../../ui"

export function CertificateList({ certificates = [] }) {
  return (
    <Section>
      <Subhead padding={2}>Certificates</Subhead>
      <Text>
        Learning is at the heart of my journey. With over 300+ hours of
        certifications, I’ve stayed current in web technologies and design
        trends. From learning React patterns to diving deep into CSS for
        building design systems, I continuously expand my knowledge base.
      </Text>
      <Box paddingY={3}>
        <List>
          {certificates.map((certificate) => (
            <Box
              key={certificate.id}
              radius="small"
              background="background"
              marginY={3}
            >
              <Text variant="bold">{certificate.title}</Text>
              <Text variant="small" bold>
                {certificate.date}
              </Text>
            </Box>
          ))}
        </List>
      </Box>
    </Section>
  )
}
