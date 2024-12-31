import { style, globalStyle } from "@vanilla-extract/css"
import { theme } from "../../src/theme.css"

// Base Blog Post Style
export const blogPost = style({
  fontSize: theme.fontSizes[3],
  lineHeight: theme.lineHeights.text,
  padding: theme.space[4],
})

// Images within Posts
globalStyle(`${blogPost} img`, {
  maxWidth: "100%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: theme.space[4],
})

// Links within Posts
globalStyle(`${blogPost} a`, {
  color: theme.colors.primary,
  textDecoration: "underline",
  fontWeight: theme.fontWeights.medium,
})

// Headings
globalStyle(`${blogPost} h1`, {
  fontSize: theme.fontSizes[5],
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.heading,
  marginBottom: theme.space[4],
})

globalStyle(`${blogPost} h2`, {
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.bold,
  lineHeight: theme.lineHeights.heading,
  marginBottom: theme.space[3],
})

globalStyle(`${blogPost} h3`, {
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.bold,
  marginBottom: theme.space[3],
})

globalStyle(`${blogPost} h4`, {
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.bold,
})

globalStyle(`${blogPost} h5, ${blogPost} h6`, {
  fontSize: theme.fontSizes[2],
  fontWeight: theme.fontWeights.bold,
})

// Paragraphs and Lists
globalStyle(`${blogPost} p, ${blogPost} ul, ${blogPost} ol`, {
  marginBottom: theme.space[4],
  maxWidth: theme.sizes.tight,
})

globalStyle(`${blogPost} > p:first-of-type`, {
  fontSize: theme.fontSizes[4],
  fontWeight: theme.fontWeights.bold,
})

globalStyle(`${blogPost} ul, ${blogPost} ol`, {
  paddingLeft: theme.space[4],
})

// Code Blocks
globalStyle(`${blogPost} pre`, {
  backgroundColor: theme.colors.muted,
  padding: theme.space[3],
  // borderRadius: theme.radii.small,
  overflowX: "auto",
})

// Block Quotes
globalStyle(`${blogPost} blockquote`, {
  borderLeft: `4px solid ${theme.colors.primary}`,
  paddingLeft: theme.space[3],
  fontStyle: "italic",
  marginBottom: theme.space[4],
})

// Container Styles for Elements
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
  .map((el) => blogPost + " " + el)
  .join(", ")

globalStyle(containedElements, {
  maxWidth: theme.sizes.tight,
  marginLeft: "auto",
  marginRight: "auto",
})
