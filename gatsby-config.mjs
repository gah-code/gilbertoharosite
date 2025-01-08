// // support for .env, .env.development, and .env.production

import path from "path"
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
  flags: {
    DEV_SSR: false, // Disable SSR in development to avoid hydration mismatches
    FAST_DEV: false, // Disable fast refresh to prevent caching issues
  },

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
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypePrism],
        },
        // defaultLayouts: {
        //   default: path.resolve("./src/components/layout.js"),
        // },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
        // path: path.join(__dirname, "src/posts"), // Updated
      },
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
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
