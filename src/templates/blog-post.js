// src/templates/blog-post.js
import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import SEOHead, { normalizeUrl } from "../components/head" // Import SEOHead
import { Container, Heading, Box, Space } from "../components/ui/ui"
import * as styles from "./blog-post.css"

export default function BlogPost(props) {
  const post = props.data.contentfulBlogPost

  return (
    <Layout {...post} description={post.excerpt}>
      <Container width="tight">
        <Box paddingY={5}>
          <article className={styles.blogPost}>
            {" "}
            {post.image && (
              <GatsbyImage
                alt={post.image.alt}
                image={getImage(post.image)}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
            )}
            <Heading as="h1">{post.title}</Heading>
            <Space size={1} />
            <Box>
              <strong>Category: </strong>
              <Link to={`/category/${post.category.toLowerCase()}/`}>
                {post.category}
              </Link>
              <p>
                {/* <strong>Author:</strong> {frontmatter.author} |{" "} */}
                <strong>Date:</strong> {post.date}
              </p>
            </Box>
          </article>

          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}

// Add SEO metadata for blog post
export const Head = ({ data }) => {
  const { site } = data
  const post = data.contentfulBlogPost
  // const siteMetadata = site.siteMetadata

  const title = post.seoTitle || post.title
  const description = post.seoDescription?.seoDescription || post.excerpt
  // const description = post.seoDescription || siteMetadata.description
  // const image = post.image?.url || null
  // const url = normalizeUrl(`${siteMetadata.siteUrl}/${post.slug}`)

  return <SEOHead title={title} description={description} />
}

export const query = graphql`
  query ($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      slug
      title
      seoTitle
      seoDescription {
        seoDescription
      }

      html
      category
      date(formatString: "MMMM DD, YYYY")

      image {
        id
        url
        gatsbyImageData(
          layout: CONSTRAINED
          width: 768
          height: 400
          resizingBehavior: FILL
        )
        alt
      }
    }
  }
`
