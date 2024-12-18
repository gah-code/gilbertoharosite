// import * as React from "react"
// import { graphql } from "gatsby"
// import { Container, Section, FlexList, Box, Text } from "../../ui"
// import * as styles from "./about-stat-list.css"

// function AboutStat(props) {
//   return (
//     <Box width="fitContent" className={styles.statContainer}>
//       {props.value && <Text variant="stat">{props.value}</Text>}
//       {props.label && <Text variant="statLabel">{props.label}</Text>}
//     </Box>
//   )
// }

// export default function AboutStatList(props) {
//   return (
//     <Section>
//       <Container>
//         <FlexList className={styles.statList} variant="center" responsive>
//           {props.content.map((stat) => (
//             <AboutStat key={stat.id} {...stat} />
//           ))}
//         </FlexList>
//       </Container>
//     </Section>
//   )
// }

// export const query = graphql`
//   fragment AboutStatListContent on AboutStatList {
//     id
//     content {
//       id
//       value
//       label
//     }
//   }
// `

import * as React from "react"
import { Container, Section, FlexList, Box, Text } from "../../ui"
import * as styles from "./about-stat-list.css"

// Static Mock Data for Testing
const mockStatListData = {
  content: [
    { id: "stat-1", value: "10K+", label: "Happy Customers" },
    { id: "stat-2", value: "50+", label: "Global Offices" },
    { id: "stat-3", value: "98%", label: "Customer Satisfaction" },
    { id: "stat-4", value: "20 Years", label: "In Business" },
  ],
}

// Individual Stat Component
function AboutStat(props) {
  return (
    <Box width="fitContent" className={styles.statContainer}>
      {props.value && <Text variant="stat">{props.value}</Text>}
      {props.label && <Text variant="statLabel">{props.label}</Text>}
    </Box>
  )
}

// Main Stat List Component
export default function AboutStatList() {
  const { content } = mockStatListData

  return (
    <Section>
      <Container>
        {/* Stat List */}
        <FlexList className={styles.statList} variant="center" responsive>
          {content.map((stat) => (
            <AboutStat key={stat.id} {...stat} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}
