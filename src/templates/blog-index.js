// import Layout from "../components/layout/layout"
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
// } from "../components/ui/ui"
// import SEOHead from "../components/head"

// function PostCard({ slug, image, title, excerpt, author, category, ...props }) {
//   return (
//     <BlockLink {...props} to={`/blog/${slug}`}>
//       {image && (
//         <>
//           <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
//           <Space size={3} />
//         </>
//       )}
//       <Subhead>
//         <Kicker>{category}</Kicker>
//         {title}
//       </Subhead>
//       <Text as="p">{excerpt}</Text>
//       {author?.name && (
//         <Text variant="bold">
//           <div>By {author.name}</div>
//         </Text>
//       )}
//     </BlockLink>
//   )
// }

// function PostCardSmall({ slug, image, title, category, ...props }) {
//   return (
//     <BlockLink {...props} to={`/blog/${slug}`}>
//       {image && (
//         <>
//           <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
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

// export default function BlogIndex({ posts }) {
//   const featuredPosts = posts.filter((p) => p.category === "Featured")
//   const regularPosts = posts.filter((p) => p.category !== "Featured")

//   return (
//     <Layout>
//       <Container>
//         <Box paddingY={4}>
//           <Heading as="h1">Blog</Heading>
//           <FlexList variant="start" gap={0} gutter={3} responsive>
//             {featuredPosts.map((post) => (
//               <Box as="li" key={post.id} padding={3} width="half">
//                 <PostCard {...post} />
//               </Box>
//             ))}
//           </FlexList>
//         </Box>
//         <Box paddingY={4}>
//           <Subhead>Product Updates</Subhead>
//           <FlexList responsive wrap gap={0} gutter={3} variant="start">
//             {regularPosts.map((post) => (
//               <Box as="li" key={post.id} padding={3} width="third">
//                 <PostCardSmall {...post} />
//               </Box>
//             ))}
//           </FlexList>
//         </Box>
//       </Container>
//     </Layout>
//   )
// }
// export const Head = () => {
//   return <SEOHead title="Blog" />
// }

//// VERSION 2

// import * as React from "react"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
// } from "../components/ui/ui"
// // import SEOHead from "../components/head"

// // PostCard Component
// function PostCard({ slug, image, title, excerpt, author, category, ...props }) {
//   return (
//     <BlockLink
//       {...props}
//       to={`/blog/${slug}`}
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
//       {author?.name && (
//         <Text variant="bold">
//           <div>By {author.name}</div>
//         </Text>
//       )}
//     </BlockLink>
//   )
// }

// // PostCardSmall Component
// function PostCardSmall({ slug, image, title, category, ...props }) {
//   return (
//     <BlockLink {...props} to={`/blog/${slug}`}>
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

// // Mock Static Data for Testing
// const mockPosts = [
//   {
//     id: "1",
//     slug: "featured-post-1",
//     title: "Introducing New Features",
//     excerpt: "Discover the latest updates",
//     category: "Featured",
//     image: {
//       alt: "Feature Image",
//       gatsbyImageData: {
//         images: {
//           src: "https://via.placeholder.com/300x200",
//         },
//         layout: "constrained",
//         width: 300,
//         height: 200,
//       },
//     },
//     author: { name: "Gilbert Haro" },
//   },
//   {
//     id: "2",
//     slug: "featured-post-2",
//     title: "Design System Updates",
//     excerpt: "Explore the newest design principles...",
//     category: "Featured",
//     image: {
//       alt: "Design System",
//       gatsbyImageData: {
//         images: {
//           // sources: [],
//           src: "https://via.placeholder.com/300x200",
//         },
//         layout: "constrained",
//         width: 300,
//         height: 200,
//       },
//     },
//     author: { name: "John Smith" },
//   },
//   {
//     id: "3",
//     slug: "featured-post-2",
//     title: "Design System Updates",
//     excerpt: "Explore the newest design principles...",
//     category: "Featured",
//     image: {
//       alt: "Design System",
//       gatsbyImageData: {
//         images: {
//           // sources: [],
//           src: "https://via.placeholder.com/300x200",
//         },
//         layout: "constrained",
//         width: 300,
//         height: 200,
//       },
//     },
//     author: { name: "John Smith" },
//   },

//   {
//     id: "4",
//     slug: "regular-post-1",
//     title: "Performance Improvements",
//     category: "Product Updates",
//     image: {
//       alt: "Performance",
//       gatsbyImageData: {
//         images: {
//           src: "https://via.placeholder.com/300x200",

//           // sources: [],
//         },
//         layout: "constrained",
//         width: 300,
//         height: 200,
//       },
//     },
//   },
//   {
//     id: "5",
//     slug: "regular-post-2",
//     title: "Bug Fixes and Enhancements",
//     category: "Product Updates",
//     image: {
//       alt: "Bug Fixes",
//       gatsbyImageData: {
//         images: {
//           // sources: [],
//           src: "https://via.placeholder.com/300x200",
//         },
//         layout: "constrained",
//         width: 300,
//         height: 200,
//       },
//     },
//   },

//   {
//     id: "6",
//     slug: "regular-post-3",
//     title: "Bug Fixes and Enhancements Part Two",
//     category: "Product Updates",
//     image: {
//       alt: "Bug Fixes",
//       gatsbyImageData: {
//         images: {
//           // sources: [],
//           src: "https://via.placeholder.com/300x200",
//         },
//         layout: "constrained",
//         width: 300,
//         height: 200,
//       },
//     },
//   },
// ]

// export default function BlogIndex() {
//   const featuredPosts = mockPosts.filter((p) => p.category === "Featured")
//   const regularPosts = mockPosts.filter((p) => p.category !== "Featured")

//   return (
//     <Container>
//       {/* Featured Posts Section */}
//       <Box
//         paddingY={5}
//         style={{
//           border: "1px solid black", // Debugging border
//         }}
//       >
//         <Heading as="h1">Blog</Heading>
//         <FlexList
//           responsive
//           wrap
//           gap={3}
//           gutter={3}
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "left", // Horizontally center all children
//             alignItems: "center", // Vertically center all children
//             textAlign: "left", // Ensure text alignment is centered
//             border: "1px solid red", // Debugging border
//           }}
//         >
//           {featuredPosts.map((post) => (
//             <Box
//               as="li"
//               key={post.id}
//               padding={3}
//               width={["full", "half"]} // Responsive widths
//               style={{
//                 display: "flex",
//                 flexDirection: "column", // Stack content vertically
//                 alignItems: "center", // Center horizontally
//               }}
//             >
//               <PostCard {...post} />
//             </Box>
//           ))}
//         </FlexList>
//       </Box>

//       {/* Regular Posts Section */}
//       <Box paddingY={4}>
//         <Subhead>Product Updates</Subhead>
//         <FlexList responsive wrap gap={0} gutter={3} variant="start">
//           {regularPosts.map((post) => (
//             <Box as="li" key={post.id} padding={3} width={["full", "third"]}>
//               <PostCardSmall {...post} />
//             </Box>
//           ))}
//         </FlexList>
//       </Box>
//     </Container>
//   )
// }

// SEO Component
// export const Head = () => {
//   return <SEOHead title="Blog" />
// }

// src/templates/blog-index.js
// import * as React from "react"
// import { graphql, Link } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/layout/layout"
// import {
//   Container,
//   Heading,
//   Box,
//   FlexList,
//   Space,
//   BlockLink,
//   Subhead,
//   Kicker,
//   Text,
// } from "../components/ui/ui"
// import SEOHead from "../components/head"

// export default function BlogIndex(props) {
//   const posts = props.data.allContentfulBlogPost.nodes

//   return (
//     <Layout title="Blog">
//       <Container>
//         <Box paddingY={4}>
//           <Heading as="h1">Blog</Heading>
//           <ul>
//             {posts.map((post) => (
//               <li key={post.id}>
//                 {post.image && (
//                   <Link to={`/blogs/${post.slug}`}>
//                     <GatsbyImage
//                       alt={post.image.alt}
//                       image={getImage(post.image)}
//                     />
//                   </Link>
//                 )}
//                 <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
//                 <p>{post.excerpt}</p>
//                 <Link to={`/category/${post.category.toLowerCase()}/`}>
//                   {post.category}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </Box>
//       </Container>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         siteUrl
//         description
//         title
//       }
//     }
//     allContentfulBlogPost {
//       nodes {
//         id
//         slug
//         title
//         category
//         excerpt
//         image {
//           id
//           alt
//           gatsbyImageData
//         }
//       }
//     }
//   }
// `

// src/templates/blog-index.js
import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import {
  Container,
  Heading,
  Box,
  FlexList,
  Space,
  BlockLink,
  Subhead,
  Kicker,
  Text,
} from "../components/ui/ui"

// 1) PostCard component for "Featured" posts
function PostCard({ slug, image, title, excerpt, author, category }) {
  return (
    <BlockLink
      to={`/blogs/${slug}`}
      style={{
        padding: "10px",
        // border: "1px solid #ddd",
        borderRadius: "8px",
        width: "350px",
      }}
    >
      {image && (
        <>
          <GatsbyImage
            alt={image.alt}
            image={getImage(image)}
            style={{
              borderRadius: "8px",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <Space size={4} />
        </>
      )}
      <Subhead>
        {/* Category as a clickable link */}
        <Kicker>
          <a href={`/category/${category?.toLowerCase()}/`}>{category}</a>
        </Kicker>
        {title}
      </Subhead>
      {excerpt && <Text as="p">{excerpt}</Text>}

      {/* Optional: Display author if available */}
      {author?.name && (
        <Text
          variant="bold"
          style={{
            overflow: "hidden",
            whiteSpace: "normal",
            wordWrap: "break-word",
          }}
        >
          <div>By {author.name}</div>
        </Text>
      )}
    </BlockLink>
  )
}

// 2) PostCardSmall component for "regular" (non-featured) posts
function PostCardSmall({ slug, image, title, category, excerpt }) {
  return (
    <article>
      <BlockLink
        to={`/blogs/${slug}`}
        style={{
          padding: "10px",
          border: "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        {image && (
          <>
            <GatsbyImage alt={image.alt} image={getImage(image)} />
            <Space size={3} />
          </>
        )}
        {/* <Subhead>
        <Kicker>
          <a href={`/category/${category?.toLowerCase()}/`}>{category}</a>
        </Kicker>
        {title}
      </Subhead> */}
        <Subhead>
          <Kicker>{category}</Kicker>
          {title}
        </Subhead>
        {excerpt && <Text as="p">{excerpt}</Text>}
      </BlockLink>
    </article>
  )
}

export default function BlogIndex(props) {
  // All posts from Contentful
  const posts = props.data.allContentfulBlogPost.nodes

  // Separate Featured vs. Regular
  const featuredPosts = posts.filter((p) => p.category === "Featured")
  const regularPosts = posts.filter((p) => p.category !== "Featured")

  return (
    <Layout title="Blogs">
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
            {Array.from(new Set(posts.map((post) => post.category))).map(
              (category) => (
                <li key={category} style={{ margin: 0 }}>
                  <Link
                    to={`/category/${category.toLowerCase()}/`}
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
              )
            )}
          </ul>
        </div>
        <Box paddingY={4}>
          <Heading as="h1">Blogs Coming Soon</Heading>

          {/* ========== Featured Section ========== */}
          {featuredPosts.length > 0 && (
            <Box paddingY={5}>
              <Heading as="h2">Featured Posts</Heading>
              <FlexList
                responsive
                wrap
                gap={3}
                gutter={3}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {featuredPosts.map((post) => (
                  <Box
                    as="li"
                    key={post.id}
                    padding={3}
                    width={["full", "half"]} // responsive widths
                  >
                    <PostCard {...post} />
                  </Box>
                ))}
              </FlexList>
            </Box>
          )}

          {/* ========== Regular Posts Section ========== */}
          <Box paddingY={4}>
            <Subhead>All Other Posts</Subhead>
            <FlexList responsive wrap gap={3} gutter={3} variant="start">
              {regularPosts.map((post) => (
                <Box
                  as="li"
                  key={post.id}
                  padding={3}
                  width={["full", "third"]}
                >
                  <PostCardSmall {...post} />
                </Box>
              ))}
            </FlexList>
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

// 3) GraphQL query
export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        description
        title
      }
    }
    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        slug
        title
        category
        excerpt
        # If you have author references, add them here:
        # author {
        #   name
        # }
        image {
          id
          alt
          gatsbyImageData(
            placeholder: TRACED_SVG
            width: 300
            height: 200
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`
