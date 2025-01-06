// // // import React from 'react';
// // // import { graphql, Link } from 'gatsby';

// // // export default function BlogIndex({ data }) {
// // //   const posts = data.allMdx.nodes;

// // //   return (
// // //     <main>
// // //       <h1>Blog</h1>
// // //       <ul>
// // //         {posts.map((post) => (
// // //           <li key={post.id}>
// // //             <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </main>
// // //   );
// // // }

// // // export const query = graphql`
// // //   query {
// // //     allMdx(
// // //       filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
// // //       sort: { fields: [frontmatter___title], order: ASC }
// // //     ) {
// // //       nodes {
// // //         id
// // //         frontmatter {
// // //           title
// // //           slug
// // //         }
// // //       }
// // //     }
// // //   }
// // // `;

// // import React from "react"
// // import { graphql, Link } from "gatsby"
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // import Layout from "../components/layout"
// // import {
// //   Container,
// //   FlexList,
// //   Box,
// //   Space,
// //   BlockLink,
// //   Heading,
// //   Subhead,
// //   Kicker,
// //   Text,
// // } from "../components/ui"

// // export default function BlogIndex({ data }) {
// //   const posts = data.allMdx.nodes
// //   // Get unique categories
// //   const categories = Array.from(
// //     new Set(posts.map((post) => post.frontmatter.category))
// //   )

// //   return (
// //     <Layout>
// //       <h1>Blog Posts</h1>

// //       <h2>Filter by Category:</h2>
// //       <ul>
// //         {categories.map((category) => (
// //           <li key={category}>
// //             <Link to={`/tags/${category.toLowerCase()}/`}>{category}</Link>
// //           </li>
// //         ))}
// //       </ul>

// //       <h2>All Posts:</h2>
// //       <ul>
// //         {posts.map((post) => (
// //           <li key={post.id}>
// //             <Link to={post.frontmatter.slug}>
// //               <h2>{post.frontmatter.title}</h2>
// //               <p>{post.frontmatter.excerpt}</p>
// //               {/* Category with Link */}
// //               <p>
// //                 <strong>Category:</strong>{" "}
// //                 <Link to={`/tags/${post.frontmatter.category.toLowerCase()}/`}>
// //                   {post.frontmatter.category}
// //                 </Link>
// //               </p>
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </Layout>
// //   )
// // }

// // export const query = graphql`
// //   query {
// //     allMdx(
// //       filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
// //       sort: { fields: [frontmatter___date], order: DESC }
// //     ) {
// //       nodes {
// //         id
// //         frontmatter {
// //           slug
// //           title
// //           excerpt
// //           category
// //           author
// //           image {
// //             childImageSharp {
// //               gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
// //             }
// //           }
// //           imageAlt
// //         }
// //       }
// //     }
// //   }
// // `

// // import React from "react"
// // import { graphql, Link } from "gatsby"
// // import {
// //   Container,
// //   FlexList,
// //   Box,
// //   Space,
// //   BlockLink,
// //   Heading,
// //   Subhead,
// //   Kicker,
// //   Text,
// // } from "../components/ui"
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"
// // import Layout from "../components/layout"

// // export default function BlogIndex({ data }) {
// //   const posts = data.allMdx.nodes

// //   // Get unique categories for filtering
// //   const categories = Array.from(
// //     new Set(posts.map((post) => post.frontmatter.category))
// //   )

// //   return (
// //     <Layout>
// //       <Container>
// //         <Box paddingY={5}>
// //           <h1>Blog Posts</h1>
// //         </Box>

// //         {/* Filter by Category */}
// //         <h2>Filter by Category:</h2>
// //         <ul>
// //           {categories.map((category) => (
// //             <li key={category}>
// //               <Link to={`/tags/${category.toLowerCase()}/`}>{category}</Link>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Display All Posts */}
// //         <h2>All Posts:</h2>
// //         <ul>
// //           {posts.map((post) => {
// //             const image = getImage(post.frontmatter.image) // Get image data

// //             return (
// //               <li key={post.id}>
// //                 <BlockLink
// //                   to={post.frontmatter.slug}
// //                   style={{
// //                     padding: "10px",
// //                     border: "1px solid red", // Debugging border
// //                   }}
// //                 >
// //                   {/* Display Featured Image */}
// //                   {image && (
// //                     <>
// //                       <GatsbyImage
// //                         image={image}
// //                         alt={post.frontmatter.imageAlt || "Blog post image"}
// //                       />
// //                     </>
// //                   )}
// //                   <h2>{post.frontmatter.title}</h2>
// //                   <p>{post.frontmatter.excerpt}</p>
// //                   {/* Category Link */}
// //                   <p>
// //                     <strong>Category:</strong>{" "}
// //                     <Link
// //                       to={`/tags/${post.frontmatter.category.toLowerCase()}/`}
// //                     >
// //                       {post.frontmatter.category}
// //                     </Link>
// //                   </p>
// //                 </BlockLink>
// //               </li>
// //             )
// //           })}
// //         </ul>
// //       </Container>
// //     </Layout>
// //   )
// // }

// // export const query = graphql`
// //   query {
// //     allMdx(
// //       filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
// //       sort: { fields: [frontmatter___date], order: DESC }
// //     ) {
// //       nodes {
// //         id
// //         frontmatter {
// //           slug
// //           title
// //           excerpt
// //           category
// //           author
// //           image {
// //             childImageSharp {
// //               gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
// //             }
// //           }
// //           imageAlt
// //         }
// //       }
// //     }
// //   }
// // `

// import React from "react"
// import { graphql, Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
// import SEOHead from "../components/head"
// import {
//   Container,
//   FlexList,
//   Box,
//   Space,
//   BlockLink,
//   Heading,
//   Subhead,
//   Kicker,
//   Text,
// } from "../components/ui"

// // PostCard Component
// function PostCard({ slug, image, title, excerpt, author, category }) {
//   return (
//     <BlockLink
//       to={slug}
//       style={{
//         padding: "10px",
//         border: "1px solid red", // Debugging border
//       }}
//     >
//       {image && (
//         <>
//           <GatsbyImage alt={image.alt} image={getImage(image)} />
//           <Space size={3} />
//         </>
//       )}
//       <Subhead>
//         <Kicker>{category}</Kicker>
//         {title}
//       </Subhead>
//       <Text as="p">{excerpt}</Text>
//       {author && (
//         <Text variant="bold">
//           <div>By {author}</div>
//         </Text>
//       )}
//     </BlockLink>
//   )
// }

// // PostCardSmall Component
// function PostCardSmall({ slug, image, title, category }) {
//   return (
//     <BlockLink to={slug}>
//       {image && (
//         <>
//           <GatsbyImage alt={image.alt} image={getImage(image)} />
//           <Space size={3} />
//         </>
//       )}
//       <Subhead>
//         <Kicker>{category}</Kicker>
//         {title}
//       </Subhead>
//     </BlockLink>
//   )
// }

// // Main BlogIndex Component
// export default function BlogIndex({ data }) {
//   const posts = data.allMdx.nodes

//   // Separate Featured and Regular Posts
//   const featuredPosts = posts.filter(
//     (post) => post.frontmatter.category === "Featured"
//   )
//   const regularPosts = posts.filter(
//     (post) => post.frontmatter.category !== "Featured"
//   )

//   // Get unique categories for filtering
//   const categories = Array.from(
//     new Set(posts.map((post) => post.frontmatter.category))
//   )

//   return (
//     <Layout>
//       <Container>
//         {/* Blog Header */}
//         <Box paddingY={5}>
//           <Heading as="h1">Blog</Heading>
//         </Box>

//         {/* Filter by Category */}
//         <h2>Filter by Category:</h2>
//         <ul>
//           {categories.map((category) => (
//             <li key={category}>
//               <Link to={`/tags/${category.toLowerCase()}/`}>{category}</Link>
//             </li>
//           ))}
//         </ul>

//         {/* Featured Posts Section */}
//         <Box paddingY={5}>
//           <Subhead>Featured Posts</Subhead>
//           <FlexList responsive wrap gap={3} gutter={3}>
//             {featuredPosts.map((post) => (
//               <Box as="li" key={post.id} padding={3} width={["full", "half"]}>
//                 <PostCard
//                   slug={post.frontmatter.slug}
//                   image={post.frontmatter.image}
//                   title={post.frontmatter.title}
//                   excerpt={post.frontmatter.excerpt}
//                   author={post.frontmatter.author}
//                   category={post.frontmatter.category}
//                 />
//               </Box>
//             ))}
//           </FlexList>
//         </Box>

//         {/* Regular Posts Section */}
//         <Box paddingY={4}>
//           <Subhead>All Posts</Subhead>
//           <FlexList responsive wrap gap={3} gutter={3}>
//             {regularPosts.map((post) => (
//               <Box as="li" key={post.id} padding={3} width={["full", "third"]}>
//                 <PostCardSmall
//                   slug={post.frontmatter.slug}
//                   image={post.frontmatter.image}
//                   title={post.frontmatter.title}
//                   category={post.frontmatter.category}
//                 />
//               </Box>
//             ))}
//           </FlexList>
//         </Box>
//       </Container>
//     </Layout>
//   )
// }

// // SEO Metadata for Blog Page
// export const Head = () => {
//   return (
//     <SEOHead
//       title="Blog - Gilberto Alejandro Haro"
//       description="Read the latest updates, tutorials, and insights on web development."
//       // url={`${siteMetadata.siteUrl}/`} // You can adjust this for dynamic paths if needed
//     />
//   )
// }

// export const query = graphql`
//   query {
//     allMdx(
//       filter: { internal: { contentFilePath: { regex: "/src/posts/" } } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       nodes {
//         id
//         frontmatter {
//           slug
//           title
//           excerpt
//           category
//           author
//           image {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
//             }
//           }
//           imageAlt
//         }
//       }
//     }
//   }
// `

import React from "react"
import { graphql, Link } from "gatsby"
import { FlexList } from "../components/ui"
import Layout from "../components/layout"
import PostCard from "../components/PostCard"

export default function BlogPage({ data }) {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <h1>Blog</h1>
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
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  )
}

// Query All Posts
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
