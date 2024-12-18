// import * as React from "react"
// import { Container, Section, Box, Text, Heading, Link } from "../../ui"
// import {
//   certListSection,
//   certListContainer,
//   certItem,
//   certImage,
//   certDetails,
//   certTitle,
//   certProvider,
//   certLink,
// } from "./resume-styled-cert-list.css"

// // Static Mock Data for Certifications
// const certifications = [
//   {
//     id: "cert-1",
//     title: "Ultimate React Course 2024",
//     provider: "Udemy",
//     date: "2024",
//     link: "https://www.udemy.com/certificate/example",
//     image: "https://via.placeholder.com/60",
//   },
//   {
//     id: "cert-2",
//     title: "Beyond CSS: Modern CSS, Tools, and PostCSS",
//     provider: "Coursera",
//     date: "2024",
//     link: "https://www.coursera.org/certificate/example",
//     image: "https://via.placeholder.com/60",
//   },
//   {
//     id: "cert-3",
//     title: "Advanced CSS and Sass: Flexbox, Grid, Animations, and More",
//     provider: "Udemy",
//     date: "2020",
//     link: "https://www.udemy.com/certificate/example",
//     image: "https://via.placeholder.com/60",
//   },
// ]

// // Individual Certificate Item
// function CertificateItem({ title, provider, date, link, image }) {
//   return (
//     <Box className={certItem}>
//       {/* Certificate Image */}
//       <img src={image} alt={title} className={certImage} />

//       {/* Certificate Details */}
//       <div className={certDetails}>
//         <Text as="h3" className={certTitle}>
//           {title}
//         </Text>
//         <Text className={certProvider}>
//           {provider} &middot; {date}
//         </Text>
//       </div>

//       {/* Certificate Link */}
//       <Link
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={certLink}
//       >
//         View Certificate
//       </Link>
//     </Box>
//   )
// }

// // Resume Styled Certification List Component
// export default function ResumeStyledCertList() {
//   return (
//     <Section className={certListSection}>
//       {/* Section Heading */}
//       <Box center paddingY={4}>
//         <Heading as="h2" style={{ marginBottom: "1rem" }}>
//           Certifications
//         </Heading>
//         <Text style={{ fontSize: "1rem", color: "#666" }}>
//           Explore my professional certifications below:
//         </Text>
//       </Box>

//       {/* Certification List */}
//       <div className={certListContainer}>
//         {certifications.map((cert) => (
//           <CertificateItem key={cert.id} {...cert} />
//         ))}
//       </div>
//     </Section>
//   )
// }

import * as React from "react"
import { Container, Section, Box, Heading, Text, Link } from "../../ui"
import {
  certListSection,
  certListContainer,
  certItem,
  certImage,
  certDetails,
  certTitle,
  certProvider,
  certLink,
} from "./resume-styled-cert-list.css"
import { padding } from "../../ui.css"

// Static Mock Data for Certifications
const certifications = [
  {
    id: "cert-1",
    title: "Ultimate React Course 2024",
    provider: "Udemy",
    date: "2024",
    image: "https://via.placeholder.com/60",
    link: "https://www.udemy.com/certificate/example",
  },
  {
    id: "cert-2",
    title: "Beyond CSS: Modern CSS, Tools, and PostCSS",
    provider: "Coursera",
    date: "2024",
    image: "https://via.placeholder.com/60",
    link: "https://www.udemy.com/certificate/example",
  },
  {
    id: "cert-3",
    title: "Building Responsive Real-World Websites with HTML and CSS",
    provider: "Udemy",
    date: "2024",
    image: "https://via.placeholder.com/60",
    link: "https://www.udemy.com/certificate/example",
  },
  {
    id: "cert-4",
    title: "UX & Design Master Course",
    provider: "Interaction Design Foundation",
    date: "2023",
    image: "https://via.placeholder.com/60",
    link: "https://www.udemy.com/certificate/example",
  },
  {
    id: "cert-5",
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations, and More",
    provider: "Udemy",
    date: "2020",
    image: "https://via.placeholder.com/60",
    link: "https://www.udemy.com/certificate/example",
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
    <Section style={{ backgroundColor: "#f9f9f9", padding: "2rem 0" }}>
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
