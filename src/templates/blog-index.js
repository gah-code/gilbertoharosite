// import * as React from "react"
// import { GatsbyImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"
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

////// VERSION 2

import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  FlexList,
  Box,
  Space,
  BlockLink,
  Heading,
  Subhead,
  Kicker,
  Text,
} from "../components/ui"
// import SEOHead from "../components/head"

// PostCard Component
function PostCard({ slug, image, title, excerpt, author, category, ...props }) {
  return (
    <BlockLink
      {...props}
      to={`/blog/${slug}`}
      style={{
        padding: "10px",
        border: "1px solid red", // Debugging border
      }}
    >
      {image && (
        <>
          <GatsbyImage alt={image.alt} image={getImage(image)} />
          <Space size={3} />
        </>
      )}
      <Subhead>
        <Kicker>{category}</Kicker>
        {title}
      </Subhead>
      <Text as="p">{excerpt}</Text>
      {author?.name && (
        <Text variant="bold">
          <div>By {author.name}</div>
        </Text>
      )}
    </BlockLink>
  )
}

// PostCardSmall Component
function PostCardSmall({ slug, image, title, category, ...props }) {
  return (
    <BlockLink {...props} to={`/blog/${slug}`}>
      {image && (
        <>
          <GatsbyImage alt={image.alt} image={getImage(image)} />
          <Space size={3} />
        </>
      )}
      <Subhead>
        <Kicker>{category}</Kicker>
        {title}
      </Subhead>
    </BlockLink>
  )
}

// Mock Static Data for Testing
const mockPosts = [
  {
    id: "1",
    slug: "featured-post-1",
    title: "Introducing New Features",
    excerpt: "Discover the latest updates",
    category: "Featured",
    image: {
      alt: "Feature Image",
      gatsbyImageData: {
        images: {
          src: "https://via.placeholder.com/300x200",
        },
        layout: "constrained",
        width: 300,
        height: 200,
      },
    },
    author: { name: "Gilbert Haro" },
  },
  {
    id: "2",
    slug: "featured-post-2",
    title: "Design System Updates",
    excerpt: "Explore the newest design principles...",
    category: "Featured",
    image: {
      alt: "Design System",
      gatsbyImageData: {
        images: {
          // sources: [],
          src: "https://via.placeholder.com/300x200",
        },
        layout: "constrained",
        width: 300,
        height: 200,
      },
    },
    author: { name: "John Smith" },
  },
  {
    id: "3",
    slug: "featured-post-2",
    title: "Design System Updates",
    excerpt: "Explore the newest design principles...",
    category: "Featured",
    image: {
      alt: "Design System",
      gatsbyImageData: {
        images: {
          // sources: [],
          src: "https://via.placeholder.com/300x200",
        },
        layout: "constrained",
        width: 300,
        height: 200,
      },
    },
    author: { name: "John Smith" },
  },

  {
    id: "4",
    slug: "regular-post-1",
    title: "Performance Improvements",
    category: "Product Updates",
    image: {
      alt: "Performance",
      gatsbyImageData: {
        images: {
          src: "https://via.placeholder.com/300x200",

          // sources: [],
        },
        layout: "constrained",
        width: 300,
        height: 200,
      },
    },
  },
  {
    id: "5",
    slug: "regular-post-2",
    title: "Bug Fixes and Enhancements",
    category: "Product Updates",
    image: {
      alt: "Bug Fixes",
      gatsbyImageData: {
        images: {
          // sources: [],
          src: "https://via.placeholder.com/300x200",
        },
        layout: "constrained",
        width: 300,
        height: 200,
      },
    },
  },

  {
    id: "6",
    slug: "regular-post-3",
    title: "Bug Fixes and Enhancements Part Two",
    category: "Product Updates",
    image: {
      alt: "Bug Fixes",
      gatsbyImageData: {
        images: {
          // sources: [],
          src: "https://via.placeholder.com/300x200",
        },
        layout: "constrained",
        width: 300,
        height: 200,
      },
    },
  },
]

export default function BlogIndex() {
  const featuredPosts = mockPosts.filter((p) => p.category === "Featured")
  const regularPosts = mockPosts.filter((p) => p.category !== "Featured")

  return (
    <Container>
      {/* Featured Posts Section */}
      <Box
        paddingY={5}
        style={{
          border: "1px solid black", // Debugging border
        }}
      >
        <Heading as="h1">Blog</Heading>
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
            border: "1px solid red", // Debugging border
          }}
        >
          {featuredPosts.map((post) => (
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
              <PostCard {...post} />
            </Box>
          ))}
        </FlexList>
      </Box>

      {/* Regular Posts Section */}
      <Box paddingY={4}>
        <Subhead>Product Updates</Subhead>
        <FlexList responsive wrap gap={0} gutter={3} variant="start">
          {regularPosts.map((post) => (
            <Box as="li" key={post.id} padding={3} width={["full", "third"]}>
              <PostCardSmall {...post} />
            </Box>
          ))}
        </FlexList>
      </Box>
    </Container>
  )
}

// SEO Component
// export const Head = () => {
//   return <SEOHead title="Blog" />
// }
