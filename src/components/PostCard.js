import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import {
  Container,
  Box,
  FlexList,
  Space,
  BlockLink,
  Heading,
  Subhead,
  Kicker,
  Text,
} from "./ui"

export default function PostCard({ post }) {
  const image = getImage(post.frontmatter.image)

  return (
    <BlockLink
      to={post.frontmatter.slug}
      style={{
        padding: "10px",
        // border: "1px solid red", // Debugging border
        width: "350px",
      }}
    >
      {/* Display Image */}
      {image && (
        <>
          <GatsbyImage
            image={image}
            alt={post.frontmatter.imageAlt || "Post image"}
            style={{
              borderRadius: "8px",

              height: "200px",
              objectFit: "cover",
            }}
          />
          <Space size={3} />
        </>
      )}
      {/* Title and Category */}
      {/* <strong>Category:</strong> */}
      {/* <Link to={`/tags/${post.frontmatter.category.toLowerCase()}/`}>
              <Kicker>{post.frontmatter.category}</Kicker>
            </Link> */}
      <Subhead>
        <Kicker>{post.frontmatter.category}</Kicker>
        {post.frontmatter.title}
        {/* <p>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              </p> */}
      </Subhead>

      {/* Excerpt */}
      <Text
        as="p"
        style={{
          overflow: "hidden",
          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        {post.frontmatter.excerpt}
      </Text>
      <Text variant="bold">
        <div>By {post.frontmatter.author}</div>
      </Text>
    </BlockLink>
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
