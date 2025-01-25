// import * as React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import {
//   Container,
//   Flex,
//   Box,
//   Space,
//   Heading,
//   Text,
//   Avatar,
// } from "../components/ui"
// import { avatar as avatarStyle } from "../components/ui.css"
// import * as styles from "./blog-post.css"
// import SEOHead from "../components/head"

// export default function BlogPost(props) {
//   return (
//     <Layout>
//       <Container>
//         <Box paddingY={5}>
//           <Heading as="h1" center>
//             {props.title}
//           </Heading>
//           <Space size={4} />
//           {props.author && (
//             <Box center>
//               <Flex>
//                 {props.author.avatar &&
//                   (!!props.author.avatar.gatsbyImageData ? (
//                     <Avatar
//                       {...props.author.avatar}
//                       image={props.author.avatar.gatsbyImageData}
//                     />
//                   ) : (
//                     <img
//                       src={props.author.avatar.url}
//                       alt={props.author.name}
//                       className={avatarStyle}
//                     />
//                   ))}
//                 <Text variant="bold">{props.author.name}</Text>
//               </Flex>
//             </Box>
//           )}
//           <Space size={4} />
//           <Text center>{props.date}</Text>
//           <Space size={4} />
//           {props.image && (
//             <GatsbyImage
//               alt={props.image.alt}
//               image={props.image.gatsbyImageData}
//             />
//           )}
//           <Space size={5} />
//           <div
//             className={styles.blogPost}
//             dangerouslySetInnerHTML={{
//               __html: props.html,
//             }}
//           />
//         </Box>
//       </Container>
//     </Layout>
//   )
// }
// export const Head = (props) => {
//   return <SEOHead {...props} description={props.excerpt} />
// }

// // // import * as React from "react"
// // // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // // import Layout from "../components/layout"
// // // import {
// // //   Container,
// // //   Flex,
// // //   Box,
// // //   Space,
// // //   Heading,
// // //   Text,
// // //   Avatar,
// // // } from "../components/ui"
// // // import { avatar as avatarStyle } from "../components/ui.css"
// // // import * as styles from "./blog-post.css"
// // // import SEOHead from "../components/head"

// // // // Mock Data for Testing
// // // const mockPost = {
// // //   title: "Exploring New Features in Gatsby",
// // //   date: "December 4, 2024",
// // //   excerpt: "A quick overview of the latest Gatsby updates.",
// // //   author: {
// // //     name: "Jane Doe",
// // //     avatar: {
// // //       url: "https://via.placeholder.com/150",
// // //       gatsbyImageData: null, // No Gatsby image data for simplicity
// // //     },
// // //   },
// // //   image: {
// // //     alt: "Placeholder image for blog post",
// // //     gatsbyImageData: {
// // //       images: {
// // //         sources: [],
// // //       },
// // //       layout: "constrained",
// // //       width: 1200,
// // //       height: 630,
// // //     },
// // //   },
// // //   html: `
// // //     <p>Welcome to our latest blog post! We're excited to share the new features and improvements in Gatsby. These updates include faster builds, optimized images, and improved developer experience.</p>
// // //     <p>Stay tuned for more insights and tips in our upcoming posts.</p>
// // //   `,
// // // }

// // // export default function BlogPost() {
// // //   const { title, date, excerpt, author, image, html } = mockPost

// // //   return (
// // //     <Layout>
// // //       <Container>
// // //         <Box paddingY={5}>
// // //           {/* Post Title */}
// // //           <Heading as="h1" center>
// // //             {title}
// // //           </Heading>

// // //           <Space size={4} />

// // //           {/* Author Information */}
// // //           {author && (
// // //             <Box center>
// // //               <Flex>
// // //                 {author.avatar?.gatsbyImageData ? (
// // //                   <Avatar
// // //                     {...author.avatar}
// // //                     image={getImage(author.avatar.gatsbyImageData)}
// // //                   />
// // //                 ) : (
// // //                   <img
// // //                     src={author.avatar.url}
// // //                     alt={author.name}
// // //                     className={avatarStyle}
// // //                   />
// // //                 )}
// // //                 <Text variant="bold">{author.name}</Text>
// // //               </Flex>
// // //             </Box>
// // //           )}

// // //           <Space size={4} />

// // //           {/* Date */}
// // //           <Text center>{date}</Text>

// // //           <Space size={4} />

// // //           {/* Hero Image */}
// // //           {image && (
// // //             <GatsbyImage
// // //               alt={image.alt}
// // //               image={getImage(image.gatsbyImageData)}
// // //             />
// // //           )}

// // //           <Space size={5} />

// // //           {/* Post Content */}
// // //           <div
// // //             className={styles.blogPost}
// // //             dangerouslySetInnerHTML={{
// // //               __html: html,
// // //             }}
// // //           />
// // //         </Box>
// // //       </Container>
// // //     </Layout>
// // //   )
// // // }

// // // export const Head = () => {
// // //   return <SEOHead title={mockPost.title} description={mockPost.excerpt} />
// // // }

// // import * as React from "react"
// // import Layout from "../components/layout"
// // import {
// //   Container,
// //   Flex,
// //   Box,
// //   Space,
// //   Heading,
// //   Text,
// //   Avatar,
// // } from "../components/ui"
// // import { avatar as avatarStyle } from "../components/ui.css"
// // import * as styles from "./blog-post.css"
// // import SEOHead from "../components/head"

// // // Mock Data for Testing
// // const mockPost = {
// //   title: "Exploring New Features in Gatsby",
// //   date: "December 4, 2024",
// //   excerpt: "A quick overview of the latest Gatsby updates.",
// //   author: {
// //     name: "Jane Doe",
// //     avatar: {
// //       url: "https://via.placeholder.com/150", // Web image for the avatar
// //     },
// //   },
// //   image: {
// //     alt: "Placeholder image for blog post",
// //     url: "https://via.placeholder.com/1200x630", // Web image for the hero image
// //   },
// //   html: `
// //     <p>Welcome to our latest blog post! We're excited to share the new features and improvements in Gatsby. These updates include faster builds, optimized images, and improved developer experience.</p>
// //     <p>Stay tuned for more insights and tips in our upcoming posts.</p>
// //   `,
// // }

// // export default function BlogPost() {
// //   const { title, date, excerpt, author, image, html } = mockPost

// //   return (
// //     <Layout>
// //       <Container>
// //         <Box paddingY={5}>
// //           {/* Post Title */}
// //           <Heading as="h1" center>
// //             {title}
// //           </Heading>

// //           <Space size={4} />

// //           {/* Author Information */}
// //           {author && (
// //             <Box center>
// //               <Flex>
// //                 <img
// //                   src={author.avatar.url}
// //                   alt={author.name}
// //                   className={avatarStyle}
// //                 />
// //                 <Text variant="bold">{author.name}</Text>
// //               </Flex>
// //             </Box>
// //           )}

// //           <Space size={4} />

// //           {/* Date */}
// //           <Text center>{date}</Text>

// //           <Space size={4} />

// //           {/* Hero Image from Web */}
// //           {image && (
// //             <img
// //               src={image.url}
// //               alt={image.alt}
// //               style={{ width: "100%", borderRadius: "8px" }}
// //             />
// //           )}

// //           <Space size={5} />

// //           {/* Post Content */}
// //           <div
// //             className={styles.blogPost}
// //             dangerouslySetInnerHTML={{
// //               __html: html,
// //             }}
// //           />
// //         </Box>
// //       </Container>
// //     </Layout>
// //   )
// // }

// // export const Head = () => {
// //   return <SEOHead title={mockPost.title} description={mockPost.excerpt} />
// // }

// // import * as React from "react"
// // import { graphql } from "gatsby"
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // import Layout from "../components/layout"
// // import { Container, Heading, Text, Box, Subhead } from "../components/ui"
// // import { MDXRenderer } from "gatsby-plugin-mdx"

// // export default function BlogPost({ data }) {
// //   const { frontmatter, body } = data.mdx
// //   const image = getImage(frontmatter.image)

// //   return (
// //     <Layout>
// //       <Container>
// //         <Box paddingY={4}>
// //           {image && <GatsbyImage image={image} alt={frontmatter.title} />}
// //           <Heading>{frontmatter.title}</Heading>
// //           <Subhead>{frontmatter.author}</Subhead>
// //           <Text as="p">{frontmatter.date}</Text>
// //           <article>
// //             <MDXRenderer>{body}</MDXRenderer>
// //           </article>
// //         </Box>
// //       </Container>
// //     </Layout>
// //   )
// // }

// // // GraphQL Query
// // export const query = graphql`
// //   query BlogPostQuery($id: String!) {
// //     mdx(id: { eq: $id }) {
// //       frontmatter {
// //         title
// //         date(formatString: "MMMM DD, YYYY")
// //         author
// //       }
// //       body
// //     }
// //   }
// // `

// // export default BlogPost

// src/templates/blog-post.js
import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import {
  Container,
  Heading,
  Box,
  Space,
  Text,
  Avatar,
} from "../components/ui/ui"
import * as styles from "./blog-post.css"

export default function BlogPost(props) {
  const post = props.data.contentfulBlogPost

  return (
    <Layout {...post} description={post.excerpt}>
      <Container width="narrow">
        <Box paddingY={5}>
          <article className="blogPost">
            {" "}
            {post.image && (
              <GatsbyImage
                alt={post.image.alt}
                image={getImage(post.image)}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "1.5rem",
                }}
              />
            )}
            <Heading as="h1" center>
              {post.title}
            </Heading>
            <Space size={3} />
          </article>

          <Space size={4} />
          <Box>
            <strong>Category: </strong>
            <Link to={`/category/${post.category.toLowerCase()}/`}>
              {post.category}
            </Link>
          </Box>
          <p>
            {/* <strong>Author:</strong> {frontmatter.author} |{" "} */}
            <strong>Date:</strong> {post.date}
          </p>

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

export const query = graphql`
  query ($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      slug
      title
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
