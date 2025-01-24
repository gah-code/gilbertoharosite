// import { style, globalStyle } from "@vanilla-extract/css"
// import { theme } from "../components/design-system/theme.css"

// // Base Blog Post Style
// export const blogPost = style({
//   fontSize: theme.fontSizes[2],
//   lineHeight: theme.lineHeights.text,
//   padding: theme.space[1],
// })
// // Images within Posts
// globalStyle(`${blogPost} img`, {
//   maxWidth: "100%",
//   height: "auto",
//   borderRadius: "8px",
//   marginBottom: "1.5rem",
// })

// // Links within Posts
// globalStyle(`${blogPost} a`, {
//   color: theme.colors.primary,
//   textDecoration: "underline",
//   fontWeight: theme.fontWeights.medium,
// })

// // Headings
// globalStyle(`${blogPost} h1`, {
//   fontSize: theme.fontSizes[5],
//   fontWeight: theme.fontWeights.bold,
//   lineHeight: theme.lineHeights.heading,
//   marginBottom: theme.space[4],
// })

// globalStyle(`${blogPost} h2`, {
//   fontSize: theme.fontSizes[4],
//   fontWeight: theme.fontWeights.bold,
//   lineHeight: theme.lineHeights.heading,
//   marginBottom: theme.space[3],
// })

// globalStyle(`${blogPost} h3`, {
//   fontSize: theme.fontSizes[3],
//   fontWeight: theme.fontWeights.bold,
//   marginBottom: theme.space[3],
// })

// // Paragraphs and Lists
// globalStyle(`${blogPost} p, ${blogPost} ul, ${blogPost} ol`, {
//   marginBottom: theme.space[4],
//   maxWidth: theme.sizes.tight,
// })

// globalStyle(`${blogPost} > p:first-of-type`, {
//   fontSize: theme.fontSizes[4],
//   fontWeight: theme.fontWeights.bold,
// })

// globalStyle(`${blogPost} ul, ${blogPost} ol`, {
//   paddingLeft: theme.space[4],
// })

// // Code Blocks
// globalStyle(`${blogPost} pre`, {
//   backgroundColor: theme.colors.muted,
//   padding: theme.space[3],

//   overflowX: "auto",
// })

// // Block Quotes
// globalStyle(`${blogPost} blockquote`, {
//   borderLeft: `4px solid ${theme.colors.primary}`,
//   paddingLeft: theme.space[3],
//   fontStyle: "italic",
//   marginBottom: theme.space[4],
// })

// globalStyle(`${blogPost} a`, {
//   color: "inherit",
//   fontWeight: theme.fontWeights.medium,
// })

// const containedElements = [
//   "p",
//   "h1",
//   "h2",
//   "h3",
//   "h4",
//   "h5",
//   "h6",
//   "pre",
//   "ul",
//   "ol",
//   "dl",
// ]
//   .map((el) => blogPost + " " + el)
//   .join(", ")

// globalStyle(containedElements, {
//   maxWidth: theme.sizes.tight,
//   marginLeft: "auto",
//   marginRight: "auto",
// })

// globalStyle(`${blogPost} p`, {
//   lineHeight: theme.lineHeights.text,
// })

// globalStyle(`${blogPost} > p:first-of-type`, {
//   fontSize: theme.fontSizes[3],
//   fontWeight: theme.fontWeights.bold,
// })

// globalStyle(`${blogPost} h2`, {
//   fontSize: theme.fontSizes[5],
//   fontWeight: theme.fontWeights.bold,
// })

// globalStyle(`${blogPost} h3`, {
//   fontSize: theme.fontSizes[4],
//   fontWeight: theme.fontWeights.bold,
// })

// globalStyle(`${blogPost} h4`, {
//   fontSize: theme.fontSizes[3],
//   fontWeight: theme.fontWeights.bold,
// })

// globalStyle(`${blogPost} h5, ${blogPost} h6`, {
//   fontSize: theme.fontSizes[2],
//   fontWeight: theme.fontWeights.bold,
// })

import { style, globalStyle } from "@vanilla-extract/css"
import { theme } from "../components/design-system/theme.css"

// Base Blog Post Style
export const blogPost = style({
  fontSize: theme.fontSizes[2],
  lineHeight: theme.lineHeights.text,
  padding: theme.space[1],
})

// Contained Elements Styling
const containedElements = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "pre",
  "ul",
  "ol",
  "dl",
]
  .map((el) => `${blogPost} ${el}`)
  .join(", ")

globalStyle(containedElements, {
  maxWidth: theme.sizes.tight,
  marginLeft: "auto",
  marginRight: "auto",
})

// Images
globalStyle(`${blogPost} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: theme.space[4],
})

// Links
globalStyle(`${blogPost} a`, {
  color: theme.colors.primary,
  textDecoration: "underline",
  fontWeight: theme.fontWeights.medium,
})

// Headings
const headingStyles = {
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.heading,
  marginBottom: theme.space[3],
}

globalStyle(`${blogPost} h1`, {
  ...headingStyles,
  fontSize: theme.fontSizes[5],
  marginBottom: theme.space[4],
})

globalStyle(`${blogPost} h2`, {
  ...headingStyles,
  fontSize: theme.fontSizes[4],
})

globalStyle(`${blogPost} h3`, {
  ...headingStyles,
  fontSize: theme.fontSizes[3],
})

globalStyle(`${blogPost} h4`, {
  ...headingStyles,
  fontSize: theme.fontSizes[2],
})

globalStyle(`${blogPost} h5, ${blogPost} h6`, {
  ...headingStyles,
  fontSize: theme.fontSizes[1],
})

// Paragraphs and Lists
globalStyle(`${blogPost} p, ${blogPost} ul, ${blogPost} ol`, {
  marginBottom: theme.space[2],
})

globalStyle(`${blogPost} ul, ${blogPost} ol`, {
  paddingLeft: theme.space[4],
})

// First Paragraph Special Style
globalStyle(`${blogPost} > p:first-of-type`, {
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.medium,
})

// // Code Blocks
// globalStyle(`${blogPost} pre`, {
//   backgroundColor: theme.colors.muted,
//   padding: theme.space[3],
//   borderRadius: "4px",
//   overflowX: "auto",
//   marginBottom: theme.space[4],
// })

// Code Blocks
globalStyle(`${blogPost} pre`, {
  backgroundColor: theme.colors.background,
  padding: theme.space[2],
  borderRadius: "4px",
  overflowX: "auto",
  // marginBottom: theme.space[2],
  fontSize: theme.fontSizes[1],
  fontFamily: theme.fonts.mono,
  color: theme.colors.text,
})

globalStyle(`${blogPost} code`, {
  backgroundColor: theme.colors.text,
  // padding: `0 ${theme.space[1]}`,
  borderRadius: "4px",
  fontSize: theme.fontSizes[1],
  fontFamily: theme.fonts.text,
  color: theme.colors.background,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
})

// Inline Code
globalStyle(`${blogPost} p code`, {
  display: "inline-block",
})

// Block Quotes
globalStyle(`${blogPost} blockquote`, {
  borderLeft: `4px solid ${theme.colors.primary}`,
  paddingLeft: theme.space[3],
  fontStyle: "italic",
  marginBottom: theme.space[4],
})
