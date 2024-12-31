// // support for .env, .env.development, and .env.production
// require("dotenv").config()
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// module.exports = {
//   siteMetadata: {
//     siteUrl: "https://gilbertaharo.com",
//     title: "Gilberto Alejandro Haro Website",
//     author: `Gilberto A Haro`,
//     description:
//       "Gilberto Alejandro Haro Website, Technologies and digital creator fueled by a passion for discovering optimizations using the latest frontend techniques.",
//   },
//   plugins: [
//     {
//       resolve: "gatsby-source-contentful",
//       options: {
//         downloadLocal: true,
//         spaceId: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//         host: process.env.CONTENTFUL_HOST,
//       },
//     },
//     // MDX Support
//     {
//       resolve: "gatsby-plugin-mdx",
//       options: {
//         extensions: [".mdx", ".md"],
//         gatsbyRemarkPlugins: [
//           {
//             resolve: "gatsby-remark-images",
//             options: {
//               maxWidth: 800,
//               linkImagesToOriginal: false,
//             },
//           },
//         ],
//         defaultLayouts: {
//           default: require.resolve("./src/templates/blog-post.js"), // Use MDX template
//         },
//       },
//     },

//     // Source Filesystem for MDX Posts
//     {
//       resolve: "gatsby-source-filesystem",
//       options: {
//         name: "posts",
//         path: `${__dirname}/content/posts`, // MDX content directory
//       },
//     },

//     "gatsby-plugin-sharp",
//     "gatsby-plugin-image",
//     "gatsby-transformer-sharp",
//     "gatsby-plugin-vanilla-extract",
//     {
//       resolve: "gatsby-plugin-manifest",
//       options: {
//         name: "Gatsby Starter Contentful Homepage",
//         short_name: "Gatsby",
//         start_url: "/",
//         // These can be imported once ESM support lands
//         background_color: "#ffe491",
//         theme_color: "#004ca3",
//         icon: "src/favicon.png",
//       },
//     },
//   ],
// }

// Load environment variables based on NODE_ENV

// const path = require("path")
// const rehypePrism = require("rehype-prism-plus")

// // const __dirname = path.resolve()

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV || "development"}`, // Default to development
// })

// // Fallback to .env if no environment-specific file is found
// require("dotenv").config()

// module.exports = {
//   siteMetadata: {
//     siteUrl: process.env.SITE_URL || "https://gilbertaharo.com",
//     title: process.env.SITE_TITLE || "Gilberto Alejandro Haro Website",
//     author: process.env.AUTHOR || "Gilberto A Haro",
//     description:
//       process.env.SITE_DESCRIPTION ||
//       "Gilberto Alejandro Haro Website, Technologies and digital creator fueled by a passion for discovering optimizations using the latest frontend techniques.",
//   },
//   plugins: [
//     // Contentful CMS Configuration
//     {
//       resolve: "gatsby-source-contentful",
//       options: {
//         downloadLocal: true,
//         spaceId: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//         host: process.env.CONTENTFUL_HOST || "cdn.contentful.com", // Fallback to production host
//       },
//     },

//     // MDX Support
//     {
//       resolve: `gatsby-plugin-mdx`,
//       options: {
//         mdxOptions: {
//           // remarkPlugins: [] // Add any remark plugins here
//           // rehype-prism-plus should be placed in rehypePlugins
//           remarkPlugins: [],
//           rehypePlugins: [rehypePrism],
//         },
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `posts`,
//         path: `${__dirname}/src/posts`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-page-creator`,
//       options: {
//         path: `${__dirname}/src/posts`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/posts`, // Include images for posts
//       },
//     },

//     // Image Optimization Plugins
//     "gatsby-plugin-sharp",
//     "gatsby-plugin-image",
//     "gatsby-transformer-sharp",

//     // Vanilla Extract for CSS-in-TypeScript Support
//     "gatsby-plugin-vanilla-extract",

//     // Manifest Plugin for PWA Support
//     {
//       resolve: "gatsby-plugin-manifest",
//       options: {
//         name: process.env.MANIFEST_NAME || "Gatsby Starter Contentful Homepage",
//         short_name: process.env.MANIFEST_SHORT_NAME || "Gatsby",
//         start_url: "/",
//         background_color: process.env.BG_COLOR || "#ffe491",
//         theme_color: process.env.THEME_COLOR || "#004ca3",
//         icon: "src/favicon.png", // Path to favicon
//       },
//     },
//   ],
// }
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV || "development"}`,
// })
// require("dotenv").config()

// import { dirname } from "path"
// import { fileURLToPath } from "url"
// import rehypePrism from "rehype-prism-plus"

// const __dirname = dirname(fileURLToPath(import.meta.url))

// export default {
//   siteMetadata: {
//     siteUrl: process.env.SITE_URL || "https://gilbertaharo.com",
//     title: process.env.SITE_TITLE || "Gilberto Alejandro Haro Website",
//     author: process.env.AUTHOR || "Gilberto A Haro",
//     description:
//       process.env.SITE_DESCRIPTION ||
//       "Gilberto Alejandro Haro Website, Technologies and digital creator fueled by a passion for discovering optimizations using the latest frontend techniques.",
//   },
//   plugins: [
//     // Contentful CMS Configuration
//     {
//       resolve: "gatsby-source-contentful",
//       options: {
//         downloadLocal: true,
//         spaceId: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//         host: process.env.CONTENTFUL_HOST || "cdn.contentful.com", // Fallback to production host
//       },
//     },
//     // MDX Support
//     {
//       resolve: `gatsby-plugin-mdx`,
//       options: {
//         mdxOptions: {
//           remarkPlugins: [],
//           rehypePlugins: [rehypePrism],
//         },
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `posts`,
//         path: `${__dirname}/src/posts`,
//       },
//     },
//     {
//       resolve: `gatsby-plugin-page-creator`,
//       options: {
//         path: `${__dirname}/src/posts`,
//       },
//     },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/posts`,
//       },
//     },
//     // Image Optimization Plugins
//     "gatsby-plugin-sharp",
//     "gatsby-plugin-image",
//     "gatsby-transformer-sharp",

//     // Vanilla Extract for CSS-in-TypeScript Support
//     "gatsby-plugin-vanilla-extract",

//     // Manifest Plugin for PWA Support
//     {
//       resolve: "gatsby-plugin-manifest",
//       options: {
//         name: process.env.MANIFEST_NAME || "Gatsby Starter Contentful Homepage",
//         short_name: process.env.MANIFEST_SHORT_NAME || "Gatsby",
//         start_url: "/",
//         background_color: process.env.BG_COLOR || "#ffe491",
//         theme_color: process.env.THEME_COLOR || "#004ca3",
//         icon: "src/favicon.png",
//       },
//     },
//   ],
// }

import dotenv from "dotenv"
import { dirname } from "path"
import { fileURLToPath } from "url"
import rehypePrism from "rehype-prism-plus"

// Load environment variables
dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`, // Default to development
})

// ESM-compatible __dirname
const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || "https://gilbertaharo.com",
    title: process.env.SITE_TITLE || "Gilberto Alejandro Haro Website",
    author: process.env.AUTHOR || "Gilberto A Haro",
    description:
      process.env.SITE_DESCRIPTION ||
      "Gilberto Alejandro Haro Website, Technologies and digital creator fueled by a passion for discovering optimizations using the latest frontend techniques.",
  },
  plugins: [
    // Contentful CMS Configuration
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || "cdn.contentful.com", // Fallback to production host
      },
    },
    // MDX Support
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypePrism],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/posts`,
      },
    },
    // Image Optimization Plugins
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",

    // Vanilla Extract for CSS-in-TypeScript Support
    "gatsby-plugin-vanilla-extract",

    // Manifest Plugin for PWA Support
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: process.env.MANIFEST_NAME || "Gatsby Starter Contentful Homepage",
        short_name: process.env.MANIFEST_SHORT_NAME || "Gatsby",
        start_url: "/",
        background_color: process.env.BG_COLOR || "#ffe491",
        theme_color: process.env.THEME_COLOR || "#004ca3",
        icon: "src/favicon.png",
      },
    },
  ],
}
