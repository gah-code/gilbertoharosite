// import { style, globalStyle } from "@vanilla-extract/css"
// import { theme } from "../components/design-system/theme.css"

// // Base Blog Post Style
// export const blogPost = style({
//   fontSize: theme.fontSizes[2],
//   lineHeight: theme.lineHeights.text,
//   padding: theme.space[1],
// })

// // Contained Elements Styling
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
//   .map((el) => `${blogPost} ${el}`)
//   .join(", ")

// globalStyle(containedElements, {
//   maxWidth: theme.sizes.tight,
//   marginLeft: "auto",
//   marginRight: "auto",
// })

// // Images
// globalStyle(`${blogPost} img`, {
//   // maxWidth: "100%",
//   maxWidth: theme.sizes.tight,
//   marginLeft: "auto",
//   marginRight: "auto",
//   height: "auto",
//   borderRadius: "8px",
//   marginBottom: theme.space[4],
// })

// // Links
// globalStyle(`${blogPost} a`, {
//   color: theme.colors.primary,
//   textDecoration: "underline",
//   fontWeight: theme.fontWeights.medium,
// })

// // Headings
// const headingStyles = {
//   fontWeight: theme.fontWeights.bold,
//   lineHeight: theme.lineHeights.heading,
//   marginBottom: theme.space[3],
// }

// globalStyle(`${blogPost} h1`, {
//   ...headingStyles,
//   fontSize: theme.fontSizes[5],
//   marginBottom: theme.space[4],
// })

// globalStyle(`${blogPost} h2`, {
//   ...headingStyles,
//   fontSize: theme.fontSizes[4],
// })

// globalStyle(`${blogPost} h3`, {
//   ...headingStyles,
//   fontSize: theme.fontSizes[3],
// })

// globalStyle(`${blogPost} h4`, {
//   ...headingStyles,
//   fontSize: theme.fontSizes[2],
// })

// globalStyle(`${blogPost} h5, ${blogPost} h6`, {
//   ...headingStyles,
//   fontSize: theme.fontSizes[1],
// })

// // Paragraphs and Lists
// globalStyle(`${blogPost} p, ${blogPost} ul, ${blogPost} ol`, {
//   marginBottom: theme.space[2],
// })

// globalStyle(`${blogPost} ul, ${blogPost} ol`, {
//   paddingLeft: theme.space[4],
// })

// // First Paragraph Special Style
// // globalStyle(`${blogPost} > p:first-of-type`, {
// //   fontSize: theme.fontSizes[3],
// //   fontWeight: theme.fontWeights.medium,
// // })

// globalStyle(`${blogPost} > p:first-of-type`, {
//   fontSize: theme.fontSizes[3], // Larger font size for emphasis
//   fontWeight: theme.fontWeights.bold, // Bold text for prominence
//   marginBottom: theme.space[3], // Space below the paragraph
// })

// // Code Block Styling
// globalStyle(`${blogPost} pre`, {
//   backgroundColor: theme.colors.muted, // Muted background for contrast
//   padding: theme.space[3], // Add padding inside the code block
//   borderRadius: "8px", // Rounded corners for a modern look
//   maxWidth: "100%", // Prevent overflow
//   overflowX: "auto", // Horizontal scroll for long lines
//   marginBottom: theme.space[4], // Space below the block
//   fontSize: theme.fontSizes[2], // Slightly larger font for readability
//   fontFamily: theme.fonts.mono, // Use monospaced font
//   color: theme.colors.text, // Ensure text is legible
//   whiteSpace: "pre", // Prevent text wrapping
// })

// // Inline Code Styling
// globalStyle(`${blogPost} p code`, {
//   display: "inline-block",
// })

// globalStyle(`${blogPost} code`, {
//   backgroundColor: theme.colors.codeBackground, // Background for emphasis
//   padding: `0 ${theme.space[1]}`, // Horizontal padding
//   borderRadius: "4px", // Subtle rounding
//   fontSize: theme.fontSizes[1], // Inline font size
//   fontFamily: theme.fonts.mono, // Use monospaced font
//   color: theme.colors.background, // Text color contrast
//   whiteSpace: "pre-wrap", // Prevent overflow
//   wordBreak: "break-word", // Break long words if needed
// })

// // Block Quotes Styling
// globalStyle(`${blogPost} blockquote`, {
//   borderLeft: `4px solid ${theme.colors.primary}`, // Left border for emphasis
//   paddingLeft: theme.space[3], // Indentation
//   fontStyle: "italic", // Italicized text
//   marginBottom: theme.space[4], // Space below blockquotes
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

// Images Styling
globalStyle(`${blogPost} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  marginTop: theme.space[2],
  marginBottom: theme.space[4],
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
})

// Links Styling
globalStyle(`${blogPost} a`, {
  color: theme.colors.primary,
  textDecoration: "underline",
  fontWeight: theme.fontWeights.medium,
  transition: "color 0.2s ease-in-out",
})

// Headings Base Styling
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

// Paragraphs and Lists Styling
globalStyle(`${blogPost} p, ${blogPost} ul, ${blogPost} ol`, {
  marginBottom: theme.space[2],
})

globalStyle(`${blogPost} ul, ${blogPost} ol`, {
  paddingLeft: theme.space[3],
})

// First Paragraph Special Style for Intro
globalStyle(`${blogPost} > p:first-of-type`, {
  fontSize: theme.fontSizes[3], // Emphasized intro paragraph
  fontWeight: theme.fontWeights.bold, // Bold text for emphasis
  marginBottom: theme.space[3], // Add space below intro
})

// Code Block Styling
globalStyle(`${blogPost} pre`, {
  backgroundColor: theme.colors.muted, // Muted background for contrast
  padding: theme.space[3], // Padding for spacing
  borderRadius: "8px", // Rounded corners
  maxWidth: "100%", // Avoid overflow
  overflowX: "auto", // Enable horizontal scrolling for long code
  marginBottom: theme.space[4], // Space below
  fontSize: theme.fontSizes[2], // Font size for code block
  fontFamily: theme.fonts.mono, // Use monospaced font
  color: theme.colors.text, // Text contrast
  whiteSpace: "pre-wrap", // Preserve line breaks
})

// Inline Code Styling
globalStyle(`${blogPost} p code`, {
  display: "inline-block",
})

globalStyle(`${blogPost} code`, {
  backgroundColor: theme.colors.active,
  padding: `0 ${theme.space[1]}`,
  borderRadius: "4px",
  fontSize: theme.fontSizes[1],
  fontFamily: theme.fonts.mono,
  color: theme.colors.text, // Improved contrast for inline code
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  fontWeight: "bold",
})

// Block Quotes Styling
globalStyle(`${blogPost} blockquote`, {
  borderLeft: `4px solid ${theme.colors.primary}`, // Left border for emphasis
  paddingLeft: theme.space[3], // Indentation
  fontStyle: "italic", // Italicize text for quotes
  marginBottom: theme.space[4], // Add space below blockquote
  // color: theme.colors.textSecondary, // Subtle color
  backgroundColor: theme.colors.muted, // Light background
  padding: theme.space[3], // Internal padding
  borderRadius: "8px",
})

// Horizontal Rule (HR) Styling
globalStyle(`${blogPost} hr`, {
  border: 0,
  borderBottom: `1px solid ${theme.colors.muted}`,
  marginTop: theme.space[4],
  marginBottom: theme.space[4],
})

// Table Styling
globalStyle(`${blogPost} table`, {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: theme.space[3],
  marginBottom: theme.space[4],
})

globalStyle(`${blogPost} th, ${blogPost} td`, {
  padding: theme.space[2],
  borderBottom: `1px solid ${theme.colors.muted}`,
  textAlign: "left",
})

globalStyle(`${blogPost} th`, {
  backgroundColor: theme.colors.muted,
  fontWeight: theme.fontWeights.bold,
})

// Embedded Asset Styling
globalStyle(`${blogPost} .embedded-asset`, {
  maxWidth: "100%",
  marginTop: theme.space[3],
  marginBottom: theme.space[4],
  borderRadius: "8px",
})
