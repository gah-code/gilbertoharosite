import React, { useState, useEffect, useMemo, useCallback } from "react"
import { Container, Section, Box, Heading, Text, Link, Button } from "../ui"
import {
  certListContainer,
  certItem,
  certTitle,
  certLink,
  certProvider,
} from "./resume-styled-cert-list.css.ts"
import { theme } from "../../design-system/theme.css.ts"

// Static Mock Data for Certifications
const certifications = [
  {
    title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
    provider: "Udemy",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-00719bf7-a85a-41f4-8dac-bc4171f02d45.jpg?v=1588540810000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-00719bf7-a85a-41f4-8dac-bc4171f02d45.jpg?v=1588540810000",
    category: "CSS",
    date: "05/03/2020",
    length: "28",
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    provider: "Udemy",
    date: "08/31/2021",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-fa5fc484-c165-4a57-b297-97c68641bc22.jpg?v=1630464326000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-fa5fc484-c165-4a57-b297-97c68641bc22.jpg?v=1630464326000",
    category: "React",
    length: "42",
  },
  {
    title: "UX & Web Design Master Course: Strategy, Design, Development",
    provider: "Udemy",
    date: "03/08/2023",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-9cfb54a0-a751-453b-8a8a-adfbea0b0bbc.jpg?v=1678259583000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-9cfb54a0-a751-453b-8a8a-adfbea0b0bbc.jpg?v=1678259583000",
    category: "Design",
    length: "23.5",
  },
  {
    title: "FCC Responsive Web Design",
    provider: "FCC",
    date: "03/28/2021",
    image:
      "https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg",
    link: "https://www.freecodecamp.org/certification/fcc2b08bbda-a474-4a4b-b256-f021a5e98aea/responsive-web-design",
    length: "300",
  },
  {
    title: "M103:Basic Cluster Administration",
    provider: "Udemy",
    date: "05/18/2021",
    image:
      "https://university.mongodb.com/_next/image?url=https%3A%2F%2Fmitx-old-documents.s3.amazonaws.com%2Fcourse_completion%2Fcertificate%2F366adce3-8537-47be-bf85-8ca264335512.png&w=750&q=75",
    link: "https://university.mongodb.com/_next/image?url=https%3A%2F%2Fmitx-old-documents.s3.amazonaws.com%2Fcourse_completion%2Fcertificate%2F366adce3-8537-47be-bf85-8ca264335512.png&w=750&q=75",
    category: "JavaScript",
    length: "10",
  },
  {
    title: "Gatsby.js Tutorial and Projects Course'",
    provider: "Udemy",
    date: "09/28/2024",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-dbd3cf43-55ea-4fd4-8cab-7e743274f851.jpg?v=1724913206000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-dbd3cf43-55ea-4fd4-8cab-7e743274f851.jpg?v=1724913206000",
    category: "JavaScript",
    length: "22",
  },
  {
    title: "Crash Course: Build a Full-Stack Web App in a Weekend!",
    provider: "Udemy",
    date: "03/17/2023",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-b48020d1-9218-4835-8489-e97877a5ed1b.jpg?v=1679109691000",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-b48020d1-9218-4835-8489-e97877a5ed1b.jpg?v=1679109691000",
    category: "JavaScript",
    length: "12.5",
  },
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    provider: "Udemy",
    date: "11/13/2024",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-0428c6cd-3f88-4b3b-a231-44853f7299da.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-0428c6cd-3f88-4b3b-a231-44853f7299da.jpg",
    category: "JavaScript",
    length: "37.5",
  },
  {
    title: " React Styled Components Course (V5) ",
    provider: "Udemy",
    date: "02/28/2023",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-3133df20-cb75-427d-8a8c-7c80edf473f5.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-3133df20-cb75-427d-8a8c-7c80edf473f5.jpg",
    category: "JavaScript",
    length: "3",
  },
  {
    title: "HTB Basic Toolset",
    provider: "HTB Academy",
    date: "04/01/2022",
    image: "https://academy.hackthebox.com/storage/paths/9/logo.png",
    link: "https://academy.hackthebox.com/achievement/203959/path/9",
    category: "JavaScript",
    length: "30.5",
  },
  {
    title: " The Complete JavaScript Course 2020: From Zero to Expert!",
    provider: "Udemy",
    date: "06/21/2020",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-d7af91e5-c92f-4e7b-b215-8b6c074f735a.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-d7af91e5-c92f-4e7b-b215-8b6c074f735a.jpg",
    category: "JavaScript",
    length: "28.5",
  },
]

// 📌 Total Hours Calculation (Only Once)
const totalHours = certifications.reduce(
  (sum, cert) => sum + parseFloat(cert.length),
  0
)

// 📌 Get Current Date (Only Once Per Day)
const getCurrentDate = () =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date())

// Certificate Item Component
const CertificateItem = React.memo(
  ({ title, provider, date, link, length }) => (
    <Box className={certItem}>
      <Box>
        <Text className={certTitle}>{title}</Text>
        <Text className={certProvider}>
          <span style={{ backgroundColor: theme.colors.background }}>
            {provider}
          </span>{" "}
          &middot;
          <span>{date}</span> &middot;
          <span>{length} hours</span>
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
)

// Resume Styled Certification List Component
export default function ResumeStyledCertList() {
  const [sortOrder, setSortOrder] = useState("latest")
  const [sortByLength, setSortByLength] = useState(false)
  const [currentDate, setCurrentDate] = useState(getCurrentDate)

  // Memoized Sorted Certifications
  const sortedCertifications = useMemo(
    () =>
      [...certifications].sort((a, b) => {
        if (sortByLength) return parseFloat(b.length) - parseFloat(a.length)
        return sortOrder === "latest"
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date)
      }),
    [sortOrder, sortByLength]
  )

  // Memoized Handlers to Prevent Re-renders
  const toggleSortOrder = useCallback(() => {
    setSortByLength(false)
    setSortOrder((prev) => (prev === "latest" ? "oldest" : "latest"))
  }, [])

  const toggleSortByLength = useCallback(() => {
    setSortByLength(true)
    setSortOrder("latest")
  }, [])

  // Sorting Description
  const sortingDescription = sortByLength
    ? "Sorted by most hours spent"
    : `Sorted by ${
        sortOrder === "latest" ? "latest" : "oldest"
      } completion date`

  return (
    <Section style={{ backgroundColor: "#ddf3e", padding: "2rem 0" }}>
      <Container>
        <Box center paddingY={4}>
          <Heading as="h2" style={{ marginBottom: "1rem" }}>
            My Certifications
          </Heading>
          <Text style={{ fontSize: "1rem", color: "#666" }}>
            A list of all my certifications, more updates coming soon
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: theme.colors.text,
              textAlign: "center",
              padding: "0.2rem 0",
            }}
          >
            {totalHours}+ hours ⏳ spent as of {currentDate} and growing
          </Text>

          {/* <Box
            center
            className="buttonWrapper" // Add a custom class if you like
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              margin: "2rem 0",
              justifyContent: "center",
            }}
          ></Box> */}
        </Box>

        {/* Certifications List */}
        <div className={certListContainer}>
          {sortedCertifications.map((cert) => (
            <CertificateItem
              key={cert.id}
              title={cert.title}
              provider={cert.provider}
              date={cert.date}
              link={cert.link}
              length={cert.length}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

// ///////
// import React, { useState, useMemo } from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import { Container, Section, Box, Heading, Text, Button } from "../ui"
// import { CertificateItem } from "./resume-styled-item"
// import {
//   certListContainer,
//   buttonStyle,
//   sortingDescriptionStyle,
// } from "./resume-styled-cert-list.css.ts"

// export default function ResumeStyledCertList() {
//   // Combine state into a single object for better performance
//   const [sortOptions, setSortOptions] = useState({
//     field: "date",
//     order: "DESC",
//   })

//   // Static Query (doesn't allow variables, so sorting is fixed)
//   const data = useStaticQuery(graphql`
//     query {
//       allCertificationsJson(sort: { fields: date, order: DESC }) {
//         nodes {
//           id
//           title
//           provider
//           date
//           length
//           image
//           link
//         }
//       }
//     }
//   `)

//   // Memoized sorting to prevent unnecessary recalculations
//   const sortedCertifications = useMemo(
//     () =>
//       [...data.allCertificationsJson.nodes].sort((a, b) => {
//         if (sortOptions.field === "length") {
//           return sortOptions.order === "DESC"
//             ? parseFloat(b.length) - parseFloat(a.length)
//             : parseFloat(a.length) - parseFloat(b.length)
//         }
//         return sortOptions.order === "DESC"
//           ? new Date(b.date) - new Date(a.date)
//           : new Date(a.date) - new Date(b.date)
//       }),
//     [sortOptions, data.allCertificationsJson.nodes]
//   )

//   // 📝 Dynamic Sorting Description
//   const sortingDescription = useMemo(() => {
//     if (sortOptions.field === "length") {
//       return "Sorting by courses with the most hours completed ⏳"
//     }
//     return sortOptions.order === "DESC"
//       ? "My latest courses I've completed 📅"
//       : "My oldest certifications first ⏪"
//   }, [sortOptions])

//   return (
//     <Section style={{ backgroundColor: "#ddf3e", padding: "2rem 0" }}>
//       <Container>
//         <Box center paddingY={4}>
//           <Heading as="h2" style={{ marginBottom: "1rem" }}>
//             My Certifications
//           </Heading>
//           <Text>A list of all my certifications, more updates coming soon</Text>

//           {/* Sorting Buttons */}
//           <Box
//             center
//             style={{
//               display: "flex",
//               gap: "1rem",
//               margin: "2rem 0",
//               justifyContent: "center",
//             }}
//           >
//             <Button
//               className={buttonStyle}
//               aria-label="Sort by latest or oldest"
//               onClick={() =>
//                 setSortOptions((prev) => ({
//                   field: "date",
//                   order: prev.order === "DESC" ? "ASC" : "DESC",
//                 }))
//               }
//             >
//               Sort by {sortOptions.order === "DESC" ? "Oldest" : "Latest"}{" "}
//             </Button>

//             <Button
//               className={buttonStyle}
//               aria-label="Sort by most hours"
//               onClick={() => setSortOptions({ field: "length", order: "DESC" })}
//             >
//               Sort by Most Hours
//             </Button>
//           </Box>

//           {/* Sorting Description */}
//           <Text className={sortingDescriptionStyle}>{sortingDescription}</Text>
//         </Box>

//         {/* Certifications List */}
// <div className={certListContainer}>
//   {sortedCertifications.map(
//     ({ id, title, provider, date, length, image, link }) => (
//       <CertificateItem
//         key={id}
//         title={title}
//         provider={provider}
//         date={date}
//         length={length}
//         image={image}
//         link={link}
//       />
//     )
//   )}
// </div>
//       </Container>
//     </Section>
//   )
// }
