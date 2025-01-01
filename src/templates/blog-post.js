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

// // import * as React from "react"
// // import { graphql } from "gatsby"
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // import Layout from "../components/layout"
// // import { Container, Heading, Text, Box, Subhead } from "../components/ui"
// // import { MDXRenderer } from "gatsby-plugin-mdx"

// // const BlogPost = ({ data }) => {
// //   if (!data || !data.mdx) {
// //     return <p>Post not found!</p> // Fallback for missing data
// //   }

// //   const { frontmatter, body } = data.mdx
// //   const image = getImage(frontmatter.image?.childImageSharp)

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
// //         image {
// //           childImageSharp {
// //             gatsbyImageData(layout: CONSTRAINED, width: 800)
// //           }
// //         }
// //       }
// //       body
// //     }
// //   }
// // `

// // export default BlogPost // Ensure default export

// // import * as React from "react"
// // import { graphql } from "gatsby"
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // import Layout from "../components/layout"
// // import { Container, Heading, Text, Box, Subhead } from "../components/ui"
// // import { MDXRenderer } from "gatsby-plugin-mdx"
// // import * as styles from "./blog-post.css"

// // const BlogPost = ({ data }) => {
// //   // Fallback for missing data
// //   if (!data || !data.mdx) {
// //     return <p>Post not found!</p>
// //   }

// //   // Extract frontmatter and body from data
// //   const { frontmatter, body } = data.mdx

// //   // Handle Image Fallback
// //   // const image = frontmatter.image?.childImageSharp
// //   //   ? getImage(frontmatter.image.childImageSharp.gatsbyImageData)
// //   //   : null // Use null if image is not available

// //   return (
// //     <Layout>
// //       <Container>
// //         <Box paddingY={4}>
// //           {/* Render Image */}
// //           {/* {image ? (
// //             <GatsbyImage image={image} alt={frontmatter.title} />
// //           ) : (
// //             <div
// //               style={{
// //                 width: "800px",
// //                 height: "400px",
// //                 backgroundColor: "#f0f0f0",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //               }}
// //             >
// //               <p>No Image Available</p>
// //             </div>
// //           )} */}

// //           {/* Render Title */}
// //           <Heading>{frontmatter.title}</Heading>

// //           {/* Render Metadata */}
// //           <Subhead>{frontmatter.author || "Unknown Author"}</Subhead>
// //           <Text as="p">{frontmatter.date}</Text>

// //           {/* Render MDX Body */}
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

// // import * as React from "react"
// // import { graphql } from "gatsby"
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // import { MDXRenderer } from "gatsby-plugin-mdx"

// // import Layout from "../components/layout"

// // // Custom Layout Components
// // // const Layout = ({ children }) => (
// // //   <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem" }}>
// // //     <header style={{ marginBottom: "2rem", textAlign: "center" }}>
// // //       <h1 style={{ fontSize: "2.5rem", margin: 0 }}>My Blog</h1>
// // //     </header>
// // //     <main>{children}</main>
// // //     <footer style={{ marginTop: "2rem", textAlign: "center", color: "#777" }}>
// // //       <p>&copy; {new Date().getFullYear()} Gilberto Haro</p>
// // //     </footer>
// // //   </div>
// // // )

// // const Container = ({ children }) => (
// //   <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
// //     {children}
// //   </div>
// // )

// // const BlogPost = ({ data }) => {
// //   // Fallback for missing data
// //   if (!data || !data.mdx) {
// //     return (
// //       <p style={{ textAlign: "center", padding: "2rem" }}>Post not found!</p>
// //     )
// //   }

// //   const { frontmatter, body } = data.mdx
// //   const image = frontmatter.image?.childImageSharp
// //     ? getImage(frontmatter.image.childImageSharp.gatsbyImageData)
// //     : null

// //   return (
// //     <Layout>
// //       <Container>
// //         <div style={{ padding: "2rem", textAlign: "center" }}>
// //           {/* Render Image */}
// //           {image && (
// //             <GatsbyImage
// //               image={image}
// //               alt={frontmatter.title}
// //               style={{ marginBottom: "1.5rem", borderRadius: "8px" }}
// //             />
// //           )}

// //           {/* Render Title */}
// //           <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
// //             {frontmatter.title}
// //           </h1>

// //           {/* Render Metadata */}
// //           <h2
// //             style={{ fontSize: "1.2rem", color: "#555", marginBottom: "1rem" }}
// //           >
// //             {frontmatter.author} - {frontmatter.date}
// //           </h2>

// //           {/* Render MDX Body */}
// //           <article
// //             style={{ textAlign: "left", lineHeight: "1.8", color: "#333" }}
// //           >
// //             <MDXRenderer>{body}</MDXRenderer>
// //           </article>
// //         </div>
// //       </Container>
// //     </Layout>
// //   )
// // }

// // // GraphQL Query to Fetch Post by ID
// // export const query = graphql`
// //   query BlogPostQuery($id: String!) {
// //     mdx(id: { eq: $id }) {
// //       frontmatter {
// //         title
// //         date(formatString: "MMMM DD, YYYY")
// //         author
// //         image {
// //           childImageSharp {
// //             gatsbyImageData(layout: CONSTRAINED, width: 800)
// //           }
// //         }
// //       }
// //       body
// //     }
// //   }
// // `

// // export default BlogPost
