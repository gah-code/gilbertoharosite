import { style } from "@vanilla-extract/css"

export const codeBlock = style({
  backgroundColor: "#282c34",
  color: "#f8f8f2",
  fontFamily: "Fira Code, monospace",
  fontSize: "16px",
  padding: "1rem",
  borderRadius: "8px",
  overflowX: "auto",
  lineHeight: 1.5,
})

export const token = {
  keyword: style({ color: "#c678dd" }), // Purple for keywords
  string: style({ color: "#98c379" }), // Green for strings
  function: style({ color: "#61afef" }), // Blue for functions
  comment: style({ color: "#5c6370", fontStyle: "italic" }), // Grey italic for comments
  operator: style({ color: "#56b6c2" }), // Cyan for operators
  number: style({ color: "#d19a66" }), // Orange for numbers
}

// General Markdown content styling
export const markdownContent = style({
  backgroundColor: "transparent", // No background for general content
  color: "#333", // Normal text color
  fontFamily: "Arial, sans-serif",
  lineHeight: 1.6,
  padding: "0",
  margin: "0",
})
