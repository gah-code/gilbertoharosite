import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "./theme.css"

export const heroStyles = style({
  paddingBottom: "2rem",
})

export const titleStyles = style({
  marginBottom: "0.8rem",
  paddingTop: "3.5rem",
})

export const subtitleStyles = style({
  marginTop: 0,
})

export const highlightedStyles = style({
  boxShadow: "inset 0 -2.5rem 0 #cdf3e1",
})

export const descriptionStyles = style({
  padding: "1rem 0 0.5rem 0",
})

export const dataStyles = style({
  padding: "40px 0",
  paddingTop: "10px",
})

export const skillListStyles = style({
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "30px",
  maxWidth: "35rem",
  color: "#263147",
})

export const skillStyles = style({
  fontSize: "0.9rem",
  padding: "0.3rem 1rem",
  letterSpacing: "0.8px",
  borderRadius: "20px",
  textDecoration: "none",
  fontWeight: 700,
  boxShadow: "inset 0 0 0 1.9px #444",
  transition: "all 0.3s",
  display: "flex",
  alignItems: "center",
})

export const responsiveStyles = style({
  "@media": {},
})
