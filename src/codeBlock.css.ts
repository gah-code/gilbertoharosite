import { style } from "@vanilla-extract/css"

export const codeBlock = style({
  whiteSpace: "pre-wrap", // Wrap long lines
  wordWrap: "break-word", // Break words to prevent overflow
  overflowX: "auto", // Add horizontal scrolling for long lines
  padding: "1rem",
  backgroundColor: "#f5f5f5", // Adjust to your theme's color
  borderRadius: "8px",
  fontSize: "0.9rem",
  fontFamily: "Courier, monospace",
})

export const inlineCode = style({
  backgroundColor: "#eaeaea", // Subtle background for inline code
  borderRadius: "4px",
  padding: "0.2rem 0.4rem",
  fontFamily: "Courier, monospace",
  fontSize: "0.9rem",
})
