// src/templates/blog-index.js
import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEOHead, { normalizeUrl } from "../components/head"
import { Container, Heading, Box, FlexList } from "../components/ui/ui"

// Import the compound Card component
import Card from "../components/blog/Card"

export default function BlogIndex({ data }) {
  // 1) All posts from Contentful
  const posts = data.allContentfulBlogPost.nodes

  // 2) Sort so "Featured" appear first
  const sortedPosts = [...posts].sort((a, b) => {
    if (a.category === "Featured" && b.category !== "Featured") return -1
    if (a.category !== "Featured" && b.category === "Featured") return 1
    return 0
  })

  return (
    <Layout title="Blogs">
      <Container>
        <article>
          {/* ------- Category Filter Section ------- */}
          <Box paddingY={4}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {Array.from(new Set(posts.map((post) => post.category))).map(
                (category) => (
                  <li key={category} style={{ margin: 0 }}>
                    <Link
                      to={`/category/${category.toLowerCase()}/`}
                      style={{
                        padding: "8px 12px",
                        backgroundColor: "#333",
                        color: "white",
                        borderRadius: "5px",
                        textDecoration: "none",
                      }}
                    >
                      {category}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </Box>

          {/* ------- Main Blog Listing ------- */}
          <Box paddingY={4}>
            <Heading as="h1">Blogs</Heading>
            <FlexList
              responsive
              wrap
              gap={3}
              gutter={3}
              style={{ display: "flex", flexWrap: "wrap" }}
              variant="start"
            >
              {sortedPosts.map((post) => {
                const isFeatured = post.category === "Featured"

                return (
                  <Box
                    as="li"
                    key={post.id}
                    padding={3}
                    // You can vary the width for featured vs. regular posts
                    width={isFeatured ? ["full", "half"] : ["full", "third"]}
                  >
                    <Card to={`/blogs/${post.slug}`}>
                      <Card.Image image={post.image} />
                      <Card.Title category={post.category} title={post.title} />
                      <Card.Excerpt excerpt={post.excerpt} />
                    </Card>
                  </Box>
                )
              })}
            </FlexList>
          </Box>
        </article>
      </Container>
    </Layout>
  )
}

// --- SEO HEAD ---
export const Head = ({ data }) => {
  const { site } = data
  const siteMetadata = site.siteMetadata

  const title = `All My Blog Posts | ${siteMetadata.title}`
  const description = `Discover the my blog posts on various topics, including web development and design articles. Stay updated with fresh content.`
  const url = normalizeUrl(`${siteMetadata.siteUrl}/blogs`)

  return <SEOHead title={title} description={description} url={url} />
}

// --- GraphQL Query ---
export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        description
        title
      }
    }
    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        slug
        title
        category
        excerpt
        image {
          id
          alt
          gatsbyImageData(
            placeholder: TRACED_SVG
            width: 300
            height: 200
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`
