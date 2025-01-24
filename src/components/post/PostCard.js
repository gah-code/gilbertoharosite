// import React from "react"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { graphql } from "gatsby"
// import { Space, BlockLink, Subhead, Kicker, Text } from "../ui/ui"

// export default function PostCard({ post }) {
//   const image = getImage(post.frontmatter.image)

//   return (
//     <BlockLink
//       to={post.frontmatter.slug}
//       style={{
//         padding: "10px",
//         width: "350px",
//       }}
//     >
//       {/* Display Image */}
//       {image && (
//         <>
//           <GatsbyImage
//             image={image}
//             alt={post.frontmatter.imageAlt || "Post image"}
//             style={{
//               borderRadius: "8px",

//               height: "200px",
//               objectFit: "cover",
//             }}
//           />
//           <Space size={3} />
//         </>
//       )}
//       {/* Title and Category */}

//       <Subhead>
//         <Kicker>{post.frontmatter.category}</Kicker>
//         {post.frontmatter.title}
//       </Subhead>

//       {/* Excerpt */}
//       <Text
//         as="p"
//         style={{
//           overflow: "hidden",
//           whiteSpace: "normal",
//           wordWrap: "break-word",
//         }}
//       >
//         {post.frontmatter.excerpt}
//       </Text>
//       <Text variant="bold">
//         <div>By {post.frontmatter.author}</div>
//       </Text>
//     </BlockLink>
//   )
// }

// // GraphQL Fragment
// export const query = graphql`
//   fragment PostFields on Mdx {
//     id
//     frontmatter {
//       title
//       slug
//       excerpt
//       category
//       author
//       date(formatString: "MMMM DD, YYYY")
//       image {
//         childImageSharp {
//           gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
//         }
//       }
//       imageAlt
//     }
//   }
// `
