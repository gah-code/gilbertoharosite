import React, { useState, useMemo } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Section, Box, Heading, Text, Button } from "../ui"
import { CertificateItem } from "./resume-styled-item"
import {
  certListContainer,
  buttonStyle,
  sortingDescriptionStyle,
} from "./resume-styled-cert-list.css.ts"

export default function ResumeStyledCertList() {
  // Combine state into a single object for better performance
  const [sortOptions, setSortOptions] = useState({
    field: "date",
    order: "DESC",
  })

  // Static Query (doesn't allow variables, so sorting is fixed)
  const data = useStaticQuery(graphql`
    query {
      allCertificationsJson(sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
          provider
          date
          length
          image
          link
        }
      }
    }
  `)

  // Memoized sorting to prevent unnecessary recalculations
  const sortedCertifications = useMemo(
    () =>
      [...data.allCertificationsJson.nodes].sort((a, b) => {
        if (sortOptions.field === "length") {
          return sortOptions.order === "DESC"
            ? parseFloat(b.length) - parseFloat(a.length)
            : parseFloat(a.length) - parseFloat(b.length)
        }
        return sortOptions.order === "DESC"
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date)
      }),
    [sortOptions, data.allCertificationsJson.nodes]
  )

  // 📝 Dynamic Sorting Description
  const sortingDescription = useMemo(() => {
    if (sortOptions.field === "length") {
      return "Sorting by courses with the most hours completed ⏳"
    }
    return sortOptions.order === "DESC"
      ? "My latest courses I've completed 📅"
      : "My oldest certifications first ⏪"
  }, [sortOptions])

  return (
    <Section style={{ backgroundColor: "#ddf3e", padding: "2rem 0" }}>
      <Container>
        <Box center paddingY={4}>
          <Heading as="h2" style={{ marginBottom: "1rem" }}>
            My Certifications
          </Heading>
          <Text>A list of all my certifications, more updates coming soon</Text>

          {/* Sorting Buttons */}
          <Box
            center
            style={{
              display: "flex",
              gap: "1rem",
              margin: "2rem 0",
              justifyContent: "center",
            }}
          >
            <Button
              className={buttonStyle}
              aria-label="Sort by latest or oldest"
              onClick={() =>
                setSortOptions((prev) => ({
                  field: "date",
                  order: prev.order === "DESC" ? "ASC" : "DESC",
                }))
              }
            >
              Sort by {sortOptions.order === "DESC" ? "Oldest" : "Latest"}{" "}
            </Button>

            <Button
              className={buttonStyle}
              aria-label="Sort by most hours"
              onClick={() => setSortOptions({ field: "length", order: "DESC" })}
            >
              Sort by Most Hours
            </Button>
          </Box>

          {/* Sorting Description */}
          <Text className={sortingDescriptionStyle}>{sortingDescription}</Text>
        </Box>

        {/* Certifications List */}
        <div className={certListContainer}>
          {sortedCertifications.map((cert) => (
            <CertificateItem key={cert.id} {...cert} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
