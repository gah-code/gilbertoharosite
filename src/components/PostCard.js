import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import { Container, Box, FlexList } from "./ui"
import "../templates/blog-post.css"

export default function PostCard({ post }) {
  const image = getImage(post.frontmatter.image)

  return (
    <Container width="narrow">
      <Box paddingY={3} key={post.id} padding={3} width={["full", "third"]}>
        <ul>
          <article className="blogPost">
            {/* Display Image */}
            {image && (
              <GatsbyImage
                image={image}
                alt={post.frontmatter.imageAlt || "Post image"}
                style={{ borderRadius: "8px", marginBottom: "1rem" }}
              />
            )}
            {/* Title and Category */}
            <h2>
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
            </h2>
            <p>
              <strong>Category:</strong>{" "}
              <Link to={`/tags/${post.frontmatter.category.toLowerCase()}/`}>
                {post.frontmatter.category}
              </Link>
            </p>
            {/* Excerpt */}
            <p>{post.frontmatter.excerpt}</p>
          </article>
        </ul>
      </Box>
    </Container>
  )
}

// GraphQL Fragment
export const query = graphql`
  fragment PostFields on Mdx {
    id
    frontmatter {
      title
      slug
      excerpt
      category
      author
      date(formatString: "MMMM DD, YYYY")
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
        }
      }
      imageAlt
    }
  }
`
