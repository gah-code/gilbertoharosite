// // // import * as React from "react"
// // // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // // import { MDXRenderer } from "gatsby-plugin-mdx"
// // // import Layout from "../components/layout"
// // // import { MDXProvider } from "@mdx-js/react"

// // // import { graphql } from "gatsby"
// // import {
// //   Container,
// //   Flex,
// //   Box,
// //   Space,
// //   Heading,
// //   Text,
// //   Avatar,
// // } from "../components/ui"
// // // import { avatar as avatarStyle } from "../components/ui.css"
// // // import * as styles from "./blog-post.css"
// // // import SEOHead from "../components/head"
// // // export default function Post({ data }) {
// // //   const { frontmatter, body } = data.mdx

// // //   return (
// // //     <Layout>
// // //       <Container>
// // //         <Box paddingY={5}>
// // //           <Heading as="h1" center>
// // //             {frontmatter.title}
// // //           </Heading>
// // //           <Space size={4} />
// // //           {frontmatter.author && (
// // //             <Box center>
// // //               <Flex>
// // //                 {frontmatter.author.avatar &&
// // //                   (!!frontmatter.author.avatar.gatsbyImageData ? (
// // //                     <Avatar
// // //                       {...frontmatter.author.avatar}
// // //                       image={frontmatter.author.avatar.gatsbyImageData}
// // //                     />
// // //                   ) : (
// // //                     <img
// // //                       src={frontmatter.author.avatar.url}
// // //                       alt={frontmatter.author.name}
// // //                       className={avatarStyle}
// // //                     />
// // //                   ))}
// // //                 <Text variant="bold">{frontmatter.author.name}</Text>
// // //               </Flex>
// // //             </Box>
// // //           )}
// // //           <Space size={4} />
// // //           <Text center>{frontmatter.date}</Text>
// // //           <Space size={4} />

// // //           {frontmatter.image && frontmatter.image.childImageSharp ? (
// // //             <GatsbyImage
// // //               alt={frontmatter.image.alt || "Post Image"}
// // //               src={frontmatter.image}
// // //               image={getImage(
// // //                 frontmatter.image.childImageSharp.gatsbyImageData
// // //               )}
// // //               style={{ marginBottom: "1.5rem", borderRadius: "8px" }}
// // //             />
// // //           ) : (
// // //             <div
// // //               style={{
// // //                 width: "100%",
// // //                 height: "400px",
// // //                 backgroundColor: "#f0f0f0",
// // //                 display: "flex",
// // //                 alignItems: "center",
// // //                 justifyContent: "center",
// // //               }}
// // //             >
// // //               <p>No Image Available</p>
// // //             </div>
// // //           )}

// // //           <Space size={5} />

// // //           {/* <MDXRenderer>{children}</MDXRenderer> */}
// // //         </Box>
// // //       </Container>
// // //     </Layout>
// // //   )
// // // }

// // // export const Head = ({ data }) => {
// // //   const { excerpt } = data.mdx
// // //   return <SEOHead title={data.mdx.frontmatter.title} description={excerpt} />
// // // }

// // // export const query = graphql`
// // //   query GetPostById($id: String!) {
// // //     mdx(id: { eq: $id }) {
// // //       body
// // //       frontmatter {
// // //         id
// // //         slug
// // //         title
// // //         date(formatString: "MMMM DD, YYYY")
// // //         category
// // //         image {
// // //           childImageSharp {
// // //             gatsbyImageData(layout: CONSTRAINED, width: 800)
// // //           }
// // //         }
// // //       }
// // //     }
// // //   }
// // // `

// // // // import React from "react"
// // // // import { graphql } from "gatsby"
// // // // import { MDXRenderer } from "gatsby-plugin-mdx"
// // // // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // // // import Layout from "../components/layout"

// // // // export default function Post({ data }) {
// // // //   const { frontmatter, body } = data.mdx
// // // //   // const imageData = frontmatter.imageSharp
// // // //   //   ? getImage(frontmatter.imageSharp)
// // // //   //   : null

// // // //   return (
// // // //     <Layout>
// // // //       <h1>{frontmatter.title}</h1>
// // // //       <p>
// // // //         {frontmatter.date} — by {frontmatter.author} — Category:{" "}
// // // //         {frontmatter.category}
// // // //       </p>

// // // //       {/* If we stored the image in a separate field, we can show it here */}
// // // //       {/* {imageData && (
// // // //         <GatsbyImage
// // // //           image={imageData}
// // // //           alt={frontmatter.title}
// // // //           style={{ maxWidth: 800 }}
// // // //         />
// // // //       )} */}

// // // //       {/* <MDXRenderer>{body}</MDXRenderer> */}
// // // //     </Layout>
// // // //   )
// // // // }

// // // // // GraphQL query to fetch a single post by ID
// // // // export const query = graphql`
// // // //   query GetPostById($id: String!) {
// // // //     mdx(id: { eq: $id }) {
// // // //       body
// // // //       frontmatter {
// // // //         title
// // // //         date
// // // //         slug
// // // //         author
// // // //         category
// // // //         # image is recognized as a local file -> we can transform it here
// // // //       }
// // // //       # This is an optional pattern: we transform frontmatter.image into
// // // //       # a childImageSharp field so we can use GatsbyImage easily
// // // //       # "imageSharp: frontmatter___image___childImageSharp" is a trick in MDX v3
// // // //     }
// // // //   }
// // // // `

// // // import React from "react"

// // // import { graphql } from "gatsby"
// // // import { MDXProvider } from "@mdx-js/react"
// // // import { MDXRenderer } from "gatsby-plugin-mdx"
// // // import { Link } from "gatsby"

// // // const shortcodes = { Link } // Provide common components here

// // // export default function PageTemplate({ data, children }) {
// // //   const { frontmatter, body } = data.mdx

// // //   return (
// // //     <>
// // //       <h1>{data.mdx.frontmatter.title}</h1>
// // //       <MDXProvider components={shortcodes}>{children}</MDXProvider>
// // //       <MDXRenderer>{body}</MDXRenderer>

// // //       {/* <MDXRenderer>{body}</MDXRenderer> */}
// // //     </>
// // //   )
// // // }

// // // export const query = graphql`
// // //   query ($id: String!) {
// // //     mdx(id: { eq: $id }) {
// // //       body
// // //       frontmatter {
// // //         title
// // //       }
// // //     }
// // //   }
// // // `

// // import React from "react"
// // import { graphql } from "gatsby"
// // import { MDXProvider } from "@mdx-js/react"
// // import { MDXRenderer } from "gatsby-plugin-mdx"
// // import { Link } from "gatsby"
// // import Layout from "../components/layout"
// // import "../styles.css"

// // const MyH1 = (props) => <h1 style={{ color: `tomato` }} {...props} />
// // const MyParagraph = (props) => (
// //   <p style={{ fontSize: "18px", lineHeight: 1.6 }} {...props} />
// // )

// // const components = {
// //   h1: MyH1,
// //   p: MyParagraph,
// // }
// // const shortcodes = {
// //   h1: (props) => (
// //     <h1 style={{ color: "#2980b9", fontSize: "3rem" }} {...props} />
// //   ),
// //   h2: (props) => (
// //     <h2 style={{ color: "#16a085", fontSize: "2.5rem" }} {...props} />
// //   ),
// //   p: (props) => (
// //     <p style={{ fontSize: "1.2rem", color: "#7f8c8d" }} {...props} />
// //   ),
// // }
// // const ComponentsWrapper = ({ children }) => (
// //   <MDXProvider components={components}>{children}</MDXProvider>
// // )

// // export default function PageTemplate({ data }) {
// //   const { frontmatter, body } = data.mdx

// //   return (
// //     <Layout>
// //       <Heading>{frontmatter.title}</Heading>

// //       <ComponentsWrapper>
// //         <MDXRenderer>{this.props.data.mdx.code.body}</MDXRenderer>
// //       </ComponentsWrapper>
// //       {/* Ensure MDXRenderer is used correctly */}
// //     </Layout>
// //   )
// // }

// // export const query = graphql`
// //   query ($id: String!) {
// //     mdx(id: { eq: $id }) {
// //       body
// //       frontmatter {
// //         title
// //       }
// //     }
// //   }
// // `

// import React from "react"
// import { graphql } from "gatsby"
// import { MDXProvider } from "@mdx-js/react"
// import { MDXRenderer } from "gatsby-plugin-mdx"

// import { components } from "../components/shortcodes"

// const PostsTemplate = ({ data, children }) => {
//   return (
//     <>
//       <h1>{data.mdx.frontmatter.title}</h1>
//       <MDXProvider components={components}>{children}</MDXProvider>
//       {/* <div>{body}</div> */}
//     </>
//   )
// }

// export default PostsTemplate

// export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

// export const query = graphql`
//   query ($id: String!) {
//     mdx(id: { eq: $id }) {
//       body
//       frontmatter {
//         title
//       }
//     }
//   }
// `
