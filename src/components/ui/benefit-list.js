import * as React from "react"
import { motion } from "framer-motion"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  Heading,
  Text,
  Space,
} from "./ui"

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function Benefit(props) {
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      <motion.li
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {props.image && (
          <Icon
            alt={props.image.alt}
            image={props.image.gatsbyImageData}
            size="small"
          />
        )}
        <Space size={2} />
        <Heading variant="subheadSmall">{props.heading}</Heading>
        <Text>{props.text}</Text>
      </motion.li>
    </Box>
  )
}

export default function BenefitList(props) {
  return (
    <Section>
      <Container>
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.text && <Text variant="lead">{props.text}</Text>}
        </Box>
        <Space size={5} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
        >
          <FlexList gutter={3} variant="start" responsive wrap>
            {props.content.map((benefit) => (
              <Benefit key={benefit.id} {...benefit} />
            ))}
          </FlexList>
        </motion.div>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    content {
      id
      heading
      text
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
