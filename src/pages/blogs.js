import React, { useEffect } from "react"
import { graphql, Link, navigate } from "gatsby"
import { FlexList, Box, Container, Heading } from "../components/ui/ui"
import Layout from "../components/layout/layout"
import PostCard from "../components/post/PostCard"
import SEOHead from "../components/head"

export default function BlogPage({ data, location }) {
  const posts = data.allMdx.nodes

  // Prevent navigation to blogs/blogs
  // React.useEffect(() => {
  //   if (location.pathname === "/blogs/blogs/") {
  //     navigate("/blogs/")
  //   }
  // }, [location])
  return (
    <Layout>
      <Container>
        <div style={{ margin: "50px 0 10px 0px" }}>
          <h2
            style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#333" }}
          >
            Filter by Category:
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {Array.from(
              new Set(posts.map((post) => post.frontmatter.category))
            ).map((category) => (
              <li key={category} style={{ margin: 0 }}>
                <Link
                  to={`/tags/${category.toLowerCase()}/`}
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
        </div>
        {/* Filter by Category */}
        <Box
          paddingY={4}
          style={
            {
              // border: "1px solid black", // Debugging border
            }
          }
        >
          <Heading as="h1">Blogs Coming Soon</Heading>
          <FlexList
            responsive
            wrap
            gap={3}
            gutter={3}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left", // Horizontally center all children
              alignItems: "center", // Vertically center all children
              textAlign: "left", // Ensure text alignment is centered
              // border: "1px solid red", // Debugging border
            }}
          >
            {/* Render Posts */}
            {posts.map((post) => (
              <Box
                as="li"
                key={post.id}
                padding={3}
                width={["full", "half"]} // Responsive widths
                style={{
                  display: "flex",
                  flexDirection: "column", // Stack content vertically
                  alignItems: "center", // Center horizontally
                }}
              >
                <PostCard key={post.id} post={post} />
              </Box>
            ))}
          </FlexList>
        </Box>
      </Container>
    </Layout>
  )
}

// // Query All Posts
// export const query = graphql`
//   query {
//     allMdx(
//       filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       nodes {
//         ...PostFields
//       }
//     }
//   }
// `

export const Head = (props) => {
  const siteMetadata = props.data.site.siteMetadata

  return (
    <SEOHead
      title={siteMetadata.title}
      description={siteMetadata.description}
      url={siteMetadata.siteUrl}
    />
  )
}

// Query All Posts
export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
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
