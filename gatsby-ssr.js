import React from "react"
import Layout from "./src/components/layout"

// // Wrap MDX pages with layout
// export const wrapPageElement = ({ element, props }) => {
//   // Only wrap MDX pages
//   const isMdxPage = props.pageContext.layout === "mdx"
//   return isMdxPage ? <Layout>{element}</Layout> : element
// }

// Remove conditional logic; apply layout globally only if needed
// export const wrapPageElement = ({ element, props }) => {
//   return element // No layout wrapping here!
// }

// Wrap all MDX pages in Layout globally
// export const wrapPageElement = ({ element }) => {
//   return <Layout>{element}</Layout>
// }
