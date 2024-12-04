import React from "react"
import { Section, Heading, List, Box, Text, Subhead } from "./ui"

export function CertificateList({ certificates = [] }) {
  return (
    <Section>
      <Subhead padding={2}>Certificates</Subhead>
      <List>
        {certificates.map((certificate) => (
          <Box
            key={certificate.id}
            radius="small"
            background="background"
            marginY={1}
          >
            <Text variant="bold">{certificate.title}</Text>
            <Text variant="small" bold>
              {certificate.date}
            </Text>
          </Box>
        ))}
      </List>
    </Section>
  )
}
