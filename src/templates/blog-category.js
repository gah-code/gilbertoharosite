// src/templates/blog-category.js
import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEOHead, { normalizeUrl } from "../components/head"
import { Container } from "../components/ui/ui"

function BlogCategoryTemplate({ data, pageContext }) {
  const { category, currentPage, numPages } = pageContext
  const posts = data.allContentfulBlogPost.nodes

  // Build dynamic “Previous” & “Next” page links
  const basePath = `/category/${category.toLowerCase()}`
  const prevPage =
    currentPage <= 2 ? basePath : `${basePath}/${currentPage - 1}`
  const nextPage = `${basePath}/${currentPage + 1}`

  return (
    <Layout>
      <Container width="tight">
        <h1>Category: {category}</h1>

        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "1rem" }}>
              <Link to={`/blogs/${post.slug}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
              <p>
                <strong>Date:</strong> {post.date}
              </p>
              <p>
                <strong>Category:</strong>{" "}
                <Link to={`/category/${post.category.toLowerCase()}`}>
                  {post.category}
                </Link>
              </p>
            </li>
          ))}
        </ul>

        {/* Pagination Links */}
        <div style={{ marginTop: "2rem" }}>
          {currentPage > 1 && <Link to={prevPage}>&laquo; Previous Page</Link>}
          {currentPage < numPages && (
            <Link to={nextPage} style={{ marginLeft: "1rem" }}>
              Next Page &raquo;
            </Link>
          )}
        </div>

        <Link to="/blogs" style={{ display: "block", marginTop: "2rem" }}>
          Back to All Posts
        </Link>
      </Container>
    </Layout>
  )
}

// --- SEO HEAD ---
export function Head({ data }) {
  const { site } = data
  const siteMetadata = site.siteMetadata

  const title = `Blog Posts Categories | ${siteMetadata.title}`
  const description = `Discover the my blog posts categories on various topics, including React, UI, web development and design articles. Stay updated with fresh content.`
  const url = normalizeUrl(`${siteMetadata.siteUrl}/category/`)

  return <SEOHead title={title} description={description} url={url} />
}

export const query = graphql`
  query ($category: String!, $limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        siteUrl
        description
        title
      }
    }
    allContentfulBlogPost(
      filter: { category: { eq: $category } }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        slug
        id
        date(formatString: "MMMM DD, YYYY")
        category
      }
    }
  }
`

export default BlogCategoryTemplate
