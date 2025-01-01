// import React from "react"
// import { graphql, Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import { Container, Box, Heading, Space } from "../components/ui"

// export default function PostTemplate({ data: { mdx }, children }) {
//   const { frontmatter } = mdx
//   const image = getImage(frontmatter.image)

//   return (
//     <Layout>
//       <Container width="narrow">
//         <Box paddingY={5}>
//           <article>
//             {/* Post Image */}
//             <GatsbyImage
//               image={image}
//               alt={frontmatter.imageAlt}
//               style={{ width: "100%", borderRadius: "8px" }}
//             />
//             <Heading as="h1" center>
//               {frontmatter.title}
//             </Heading>
//             <Space size={4} />
//             {/* <p>{frontmatter.excerpt}</p> */}

//             {/* Category Link */}
//             <p>
//               <strong>Category:</strong>{" "}
//               <Link to={`/tags/${frontmatter.category.toLowerCase()}/`}>
//                 {frontmatter.category}
//               </Link>
//             </p>

//             {/* Author */}
//             <p>
//               <strong>Author:</strong> {frontmatter.author}
//             </p>

//             {/* Post Content */}
//             {children}
//           </article>
//         </Box>
//       </Container>
//     </Layout>
//   )
// }

// // GraphQL Query
// export const query = graphql`
//   query ($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         slug
//         excerpt
//         category
//         author
//         image {
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
//           }
//         }
//         imageAlt
//       }
//     }
//   }
// `

// import React from "react"
// import { graphql, Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import { Container, Box, Heading, Space, Text } from "../components/ui"

// // Post Template
// export default function PostTemplate({ data: { mdx }, children }) {
//   const { frontmatter } = mdx
//   const image = getImage(frontmatter.image)

//   return (
//     <Layout>
//       <Container width="narrow">
//         {/* Article Section */}
//         <Box paddingY={5}>
//           <article className="blogPost">
//             {/* Post Image */}
//             {image && (
//               <GatsbyImage
//                 image={image}
//                 alt={frontmatter.imageAlt || "Post image"}
//                 style={{
//                   width: "100%",
//                   borderRadius: "8px",
//                   marginBottom: "1.5rem",
//                 }}
//               />
//             )}

//             {/* Post Title */}
//             <Heading as="h1" center>
//               {frontmatter.title}
//             </Heading>

//             {/* Meta Info */}
//             <Space size={3} />
//             <Text variant="subtle" center>
//               <strong>Category:</strong>{" "}
//               <Link to={`/tags/${frontmatter.category.toLowerCase()}/`}>
//                 {frontmatter.category}
//               </Link>
//               {" | "}
//               <strong>Author:</strong> {frontmatter.author}
//             </Text>
//             <Space size={4} />

//             {/* Post Content */}
//             <Box className="content">{children}</Box>
//           </article>
//         </Box>
//       </Container>
//     </Layout>
//   )
// }

// // GraphQL Query
// export const query = graphql`
//   query ($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//         slug
//         excerpt
//         category
//         author
//         image {
//           childImageSharp {
//             gatsbyImageData(layout: CONSTRAINED, width: 768, height: 400)
//           }
//         }
//         imageAlt
//       }
//     }
//   }
// `

// import React from "react"
// import { Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import { Container, Box, Heading, Space, Text } from "../components/ui"

// export default function PostTemplate({ pageContext, children }) {
//   const { title, excerpt, category, author, image, imageAlt, slug } =
//     pageContext

//   const postImage = getImage(image)

//   return (
//     <Layout>
//       <Container width="narrow">
//         {/* Article Section */}
//         <Box paddingY={5}>
//           <article className="blogPost">
//             {/* Post Image */}
//             {postImage && (
//               <GatsbyImage
//                 image={postImage}
//                 alt={imageAlt || "Post image"}
//                 style={{
//                   width: "100%",
//                   borderRadius: "8px",
//                   marginBottom: "1.5rem",
//                 }}
//               />
//             )}

//             {/* Post Title */}
//             <Heading as="h1" center>
//               {title}
//             </Heading>

//             {/* Meta Info */}
//             <Space size={3} />
//             <Text variant="subtle" center>
//               <strong>Category:</strong>{" "}
//               <Link to={`/tags/${category.toLowerCase()}/`}>{category}</Link>
//               {" | "}
//               <strong>Author:</strong> {author}
//             </Text>
//             <Space size={4} />

//             {/* Post Content */}
//             <Box className="content">{children}</Box>
//           </article>
//         </Box>
//       </Container>
//     </Layout>
//   )
// }

import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Box, Heading, Space, Text } from "../components/ui"
import "./blog-post.css"

export default function PostTemplate({ data: { mdx }, children }) {
  const { frontmatter } = mdx
  const image = getImage(frontmatter.image)

  return (
    <Layout>
      <Container width="narrow">
        <Box paddingY={5}>
          <article className="blogPost">
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
            <Heading as="h1" center>
              {frontmatter.title}
            </Heading>
            <Space size={3} />
            <Text variant="subtle" center>
              <strong>Category:</strong>{" "}
              <Link to={`/tags/${frontmatter.category.toLowerCase()}/`}>
                {frontmatter.category}
              </Link>{" "}
              | <strong>Author:</strong> {frontmatter.author}
            </Text>
            <Space size={4} />
            <Box className="content">{children}</Box>
          </article>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        excerpt
        category
        author
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
