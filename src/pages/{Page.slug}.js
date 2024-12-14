import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"
import SEOHead from "../components/head"

export default function Page(props) {
  const { page } = props.data

  return (
    <Layout>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}
export const Head = (props) => {
  const { page } = props.data
  const { site } = props.data
  const siteMetadata = site.siteMetadata

  const url = `${siteMetadata.siteUrl}/${page.slug}`

  return (
    <SEOHead
      title={page.title || siteMetadata.title}
      description={page.description || siteMetadata.description}
      image={page.image || null}
      url={url}
    />
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
