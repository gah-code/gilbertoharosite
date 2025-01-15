import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Prism from "prismjs"
import "prismjs/components/prism-javascript"
import { markdownContent, codeBlock } from "../components/prismStyles.css"
import { Container, Box, Heading, Space } from "../components/ui"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function BlogPostPage({ data }) {
  const { frontmatter, body } = data.mdx

  const highlightedBody = Prism.highlight(
    body,
    Prism.languages.javascript,
    "javascript"
  )

  const image = getImage(frontmatter.image)
  console.log("Image Data:", image)
  console.log("Layout:", Layout)
  console.log("Container:", Container)
  console.log("Box:", Box)
  console.log("Heading:", Heading)
  console.log("Space:", Space)
  console.log("MDXRenderer:", MDXRenderer)

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
            <pre className={codeBlock}>
              <code dangerouslySetInnerHTML={{ __html: highlightedBody }} />
              {/* <code dangerouslySetInnerHTML={{ __html: body }} /> */}
            </pre>

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
