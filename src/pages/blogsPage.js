import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PostCards from "../components/PostCards"
export default function BlogsPage({ data }) {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <h1>Blogs</h1>
      {/* Filter by Category */}
      <h2>Filter by Category:</h2>
      <ul>
        {Array.from(
          new Set(posts.map((post) => post.frontmatter.category))
        ).map((category) => (
          <li key={category}>
            <Link to={`/tags/${category.toLowerCase()}/`}>{category}</Link>
          </li>
        ))}
      </ul>

      {/* Render Posts */}
      <section>
        {posts.map((post) => (
          <PostCards key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  )
}

// Parent Query with Fragment
export const query = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        ...PostFields
      }
    }
  }
`
