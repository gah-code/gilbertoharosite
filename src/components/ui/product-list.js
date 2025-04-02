import * as React from "react"
import { motion } from "framer-motion"

import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
} from "./ui"

function Product(props) {
  return (
    <motion.div
    // initial={{ opacity: 0, x: -50 }}
    // whileInView={{ opacity: 1, x: 0 }}
    // viewport={{ once: true, amount: 0.2 }}
    // transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Box center>
        {props.image && (
          <Icon
            alt={props.image.alt}
            image={props.image.gatsbyImageData}
            size="large"
          />
        )}
        <Subhead>{props.heading}</Subhead>
        <Text>{props.text}</Text>
        <LinkList links={props.links} />
      </Box>
    </motion.div>
  )
}

export default function ProductList(props) {
  return (
    <Section>
      <Container>
        <Box center paddingY={4}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <FlexList gap={4} variant="responsive">
          {props.content.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
      image {
        alt
        id
        gatsbyImageData
      }
      links {
        id
        href
        text
      }
    }
  }
`
