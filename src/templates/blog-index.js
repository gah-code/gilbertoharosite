import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEOHead, { normalizeUrl } from "../components/head"
import {
  Container,
  Heading,
  Box,
  FlexList,
  SuperHeading,
} from "../components/ui/ui"
import Card from "../components/blog/Card"

// Sorting Utility: Featured posts appear first
const sortFeaturedFirst = (posts) => {
  return [...posts].sort((a, b) =>
    a.category === "Featured" ? -1 : b.category === "Featured" ? 1 : 0
  )
}

// Component for Filtering Blog Categories
const CategoryFilter = ({ categories }) => {
  return (
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
        {categories.map((category) => (
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
        ))}
      </ul>
    </Box>
  )
}
// Component to render a single blog item
const BlogItem = ({ post }) => {
  const isFeatured = post.category === "Featured"

  return (
    <Box
      as="li"
      key={post.id}
      padding={3}
      width={isFeatured ? ["full", "half"] : ["full", "third"]}
    >
      <Card to={`/blogs/${post.slug}`}>
        <Card.Image image={post.image} />
        <Card.Title category={post.category} title={post.title} />
        <Card.Excerpt excerpt={post.excerpt} />
      </Card>
    </Box>
  )
}

// Component to render the blog list
const BlogList = ({ posts }) => {
  return (
    <FlexList responsive wrap gap={3} gutter={3} variant="start">
      {posts.map((post) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </FlexList>
  )
}

// Blog Index Page
export default function BlogIndex({ data }) {
  const posts = sortFeaturedFirst(data.allContentfulBlogPost.nodes)
  const categories = Array.from(new Set(posts.map((post) => post.category)))

  return (
    <Layout title="Blogs">
      <Container>
        <article>
          {/* ------- Main Blog Listing ------- */}
          <Box paddingY={4}>
            <Heading as="h1">Blogs</Heading>
            <BlogList posts={posts} />
            <CategoryFilter categories={categories} />
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

  const title = `All My Blogs | ${siteMetadata.title}`
  const description = `Discover insightful blog posts on web development, design, and modern frontend technologies. Stay ahead in the ever-evolving digital landscape with fresh, expert-driven content.`
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
