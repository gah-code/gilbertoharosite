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

import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
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
import SEOHead from "../components/head"

// PostCard Component
function PostCard({ slug, image, title, excerpt, author, category, ...props }) {
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
    excerpt: "Discover the latest updates and improvements...",
    category: "Featured",
    image: {
      alt: "Feature Image",
      gatsbyImageData: {
        images: {
          sources: [],
        },
        layout: "constrained",
        width: 300,
        height: 200,
      },
    },
    author: { name: "Jane Doe" },
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
          sources: [],
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
    slug: "regular-post-1",
    title: "Performance Improvements",
    category: "Product Updates",
    image: {
      alt: "Performance",
      gatsbyImageData: {
        images: {
          sources: [],
        },
        layout: "constrained",
        width: 300,
        height: 200,
      },
    },
  },
  {
    id: "4",
    slug: "regular-post-2",
    title: "Bug Fixes and Enhancements",
    category: "Product Updates",
    image: {
      alt: "Bug Fixes",
      gatsbyImageData: {
        images: {
          sources: [],
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
    <Layout>
      <Container>
        {/* Featured Posts Section */}
        <Box paddingY={4}>
          <Heading as="h1">Blog</Heading>
          <FlexList variant="start" gap={0} gutter={3} responsive>
            {featuredPosts.map((post) => (
              <Box as="li" key={post.id} padding={3} width="half">
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
              <Box as="li" key={post.id} padding={3} width="third">
                <PostCardSmall {...post} />
              </Box>
            ))}
          </FlexList>
        </Box>
      </Container>
    </Layout>
  )
}

// SEO Component
export const Head = () => {
  return <SEOHead title="Blog" />
}
