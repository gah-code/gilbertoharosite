import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import { Container, Box, Heading } from "../components/ui/ui"
import SEOHead, { normalizeUrl } from "../components/head"

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
  const { page, site, contentfulPage } = props.data
  const siteMetadata = site.siteMetadata

  const title = contentfulPage?.seoTitle || page.title || siteMetadata.title

  // const url = `${siteMetadata.siteUrl}/${page.slug}`
  const url = normalizeUrl(`${siteMetadata.siteUrl}/${page.slug}`)

  console.log(props)

  return (
    <SEOHead
      title={title}
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
    contentfulPage(id: { eq: $id }) {
      seoTitle
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
