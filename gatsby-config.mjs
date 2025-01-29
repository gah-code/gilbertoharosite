import path from "path"
import dotenv from "dotenv"
import { dirname } from "path"
import { fileURLToPath } from "url"

// Load environment variables
dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

// ESM-compatible __dirname
const __dirname = dirname(fileURLToPath(import.meta.url))

// Validate environment variables
if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  console.warn(
    "Warning: Contentful SPACE_ID and ACCESS_TOKEN are not set. Check your .env file."
  )
}

export default {
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
  },
  trailingSlash: "never", // Options: "always" | "never" | "ignore"
  siteMetadata: {
    siteUrl: process.env.SITE_URL || "https://gilbertaharo.com",
    title: process.env.SITE_TITLE || "Gilberto Alejandro Haro Website",
    author: process.env.AUTHOR || "Gilberto A Haro",
    description:
      process.env.SITE_DESCRIPTION ||
      "Gilberto Alejandro Haro Website, Technologies and digital creator fueled by a passion for discovering optimizations using the latest frontend techniques.",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || "cdn.contentful.com",
      },
    },

    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
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
