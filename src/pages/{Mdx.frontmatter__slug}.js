import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Box, Heading, Space } from "../components/ui"
import "../templates/blog-post.css"

import components from "../components/mdx-components"

export default function BlogPostPage({ data }) {
  const { frontmatter, body } = data.mdx
  const image = getImage(frontmatter.image)
  console.log("Image Data:", image)

  return (
    <Layout>
      <Container width="narrow">
        <Box paddingY={5}>
          <article className="blogPost">
            {/* Header */}
            {image && (
              <GatsbyImage
                image={image}
                alt={frontmatter.imageAlt || "Post image"}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                }}
              />
            )}
            <Heading center>{frontmatter.title}</Heading>
            <Space size={3} />
            <Box>
              <strong>Category: </strong>
              <Link to={`/tags/${frontmatter.category.toLowerCase()}/`}>
                {frontmatter.category}
              </Link>
            </Box>
            <p>
              <strong>Author:</strong> {frontmatter.author} |{" "}
              <strong>Date:</strong> {frontmatter.date}
            </p>
            <p>{frontmatter.excerpt}</p>
            {/* Body Content */}
            <Box dangerouslySetInnerHTML={{ __html: body }} />

            {/* <ComponentsWrapper>
              <section dangerouslySetInnerHTML={{ __html: body }} />
            </ComponentsWrapper> */}
            <hr />
            <p>
              <Link to="/blogs">← Back to Blog</Link>
            </p>
          </article>
        </Box>
      </Container>
    </Layout>
  )
}

// Query a single post
export const query = graphql`
  query BlogPostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        slug
        excerpt
        category
        author
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 768, height: 400)
          }
        }
        imageAlt
      }
    }
  }
`
