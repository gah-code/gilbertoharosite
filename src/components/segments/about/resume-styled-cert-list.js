import * as React from "react"
import { Container, Section, Box, Heading, Text, Link } from "../../ui/ui"
import {
  // certListSection,
  certListContainer,
  certItem,
  certImage,
  // certDetails,
  certTitle,
  // certProvider,
  certLink,
} from "./resume-styled-cert-list.css"

// Static Mock Data for Certifications
const certifications = [
  {
    id: "cert-1",
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    provider: "Udemy",
    // date: "2024",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-00719bf7-a85a-41f4-8dac-bc4171f02d45.jpg?v=1588540810000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-00719bf7-a85a-41f4-8dac-bc4171f02d45.jpg?v=1588540810000",
    category: "CSS",
    date: "05/03/2020",
  },
  {
    id: "cert-2",
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    provider: "Udemy",
    date: "08/31/2021",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-fa5fc484-c165-4a57-b297-97c68641bc22.jpg?v=1630464326000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-fa5fc484-c165-4a57-b297-97c68641bc22.jpg?v=1630464326000",
    category: "React",
  },
  {
    id: "cert-3",
    title: "UX & Web Design Master Course: Strategy, Design, Development",
    provider: "Udemy",
    date: "03/08/2023",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-9cfb54a0-a751-453b-8a8a-adfbea0b0bbc.jpg?v=1678259583000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-9cfb54a0-a751-453b-8a8a-adfbea0b0bbc.jpg?v=1678259583000",
    category: "Design",
  },
  {
    id: "cert-4",
    title: "300 Hours Responsive Web Design",
    provider: "FCC",
    date: "March 28, 2021",
    image:
      "https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg",
    link: "https://www.freecodecamp.org/certification/fcc2b08bbda-a474-4a4b-b256-f021a5e98aea/responsive-web-design",
  },
  {
    id: "cert-5",
    title: "M103:Basic Cluster Administration",
    provider: "Udemy",
    date: "05/18/21",
    image:
      "https://university.mongodb.com/_next/image?url=https%3A%2F%2Fmitx-old-documents.s3.amazonaws.com%2Fcourse_completion%2Fcertificate%2F366adce3-8537-47be-bf85-8ca264335512.png&w=750&q=75",
    link: "https://university.mongodb.com/_next/image?url=https%3A%2F%2Fmitx-old-documents.s3.amazonaws.com%2Fcourse_completion%2Fcertificate%2F366adce3-8537-47be-bf85-8ca264335512.png&w=750&q=75",
    category: "JavaScript",
  },
  {
    id: "cert-6",
    title: "Gatsby.js Tutorial and Projects Course'",
    provider: "Udemy",
    date: "Auguest 28, 2024",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-dbd3cf43-55ea-4fd4-8cab-7e743274f851.jpg?v=1724913206000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-dbd3cf43-55ea-4fd4-8cab-7e743274f851.jpg?v=1724913206000",
    category: "JavaScript",
  },
  {
    id: "cert-7",
    title: "Crash Course: Build a Full-Stack Web App in a Weekend!",
    provider: "Udemy",
    date: "March 17, 2023",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-b48020d1-9218-4835-8489-e97877a5ed1b.jpg?v=1679109691000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-b48020d1-9218-4835-8489-e97877a5ed1b.jpg?v=1679109691000",
    category: "JavaScript",
  },
]

// Certificate Item Component
function CertificateItem({ title, provider, date, image, link }) {
  return (
    <Box className={certItem}>
      <img src={image} alt={title} className={certImage} />

      <Box
        style={{
          padding: "0.5rem",
        }}
      >
        <Text
          className={certTitle}
          style={{
            color: "#333",
          }}
        >
          {title}
        </Text>
        <Text style={{ fontSize: "0.9rem", color: "#555" }}>
          {provider} &middot; <span style={{ color: "#777" }}>{date}</span>
        </Text>
      </Box>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={certLink}
      >
        View
      </Link>
    </Box>
  )
}

// Resume Styled Certification List Component
export default function ResumeStyledCertList() {
  return (
    <Section style={{ backgroundColor: "#ddf3e", padding: "2rem 0" }}>
      <Container>
        {/* Section Heading */}
        <Box center paddingY={4}>
          <Heading as="h2" style={{ marginBottom: "1rem" }}>
            Certifications
          </Heading>
          <Text style={{ fontSize: "1rem", color: "#666" }}>
            A list of my most recent certifications.
          </Text>
        </Box>

        {/* Certifications List */}
        <div className={certListContainer}>
          {certifications.map((cert) => (
            <CertificateItem
              key={cert.id}
              title={cert.title}
              provider={cert.provider}
              date={cert.date}
              image={cert.image}
              link={cert.link}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
