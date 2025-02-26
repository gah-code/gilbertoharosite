import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../design-system/theme.css"
import { media } from "../ui.css"

// Wrapper for the entire section
export const certListSection = style({
  backgroundColor: theme.colors.active,
  // padding: theme.space[1],
  maxWidth: theme.sizes.wide,
})

// Container for the certificate list
export const certListContainer = style({
  // margin: "0 auto", If center
  width: "100%",
  maxWidth: "980px",
  marginBottom: theme.space[3],
})

export const buttonStyle = style({
  backgroundColor: theme.colors.primary,
  color: theme.colors.background,
  padding: theme.space[2],
  borderRadius: theme.radii.button,
  cursor: "pointer",
  border: "none",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: theme.colors.primary,
  },
})

// Certificate item container

export const certItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.space[3],
  borderBottom: "2px solid #e0e0e0",
  flexDirection: "row",
  paddingTop: theme.space[3],
  paddingBottom: theme.space[3],

  transition: "background-color 0.3s ease, box-shadow 0.3s ease",

  ":hover": {
    backgroundColor: theme.colors.background, // Light background on hover
    boxShadow: theme.shadows.large, // Add a subtle shadow
    // color: "#e0e0e0",
  },

  "@media": {
    [media.small]: {
      flexDirection: "row",
      gap: theme.space[4],
    },
  },
})

// Image for the certificate logo
export const certImage = style({
  width: "55px",
  height: "55px",
  borderRadius: theme.radii.button,
  objectFit: "cover",
  flexShrink: 0,
  boxShadow: theme.shadows.large,

  "@media": {
    [media.small]: {
      width: "65px",
      height: "65px",
      marginBottom: theme.space[1],
    },
  },
})

// Details section (title and provider/date)
export const certDetails = style({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: theme.space[2], // Adds spacing between child elements
  minWidth: "0",
  color: theme.colors.text,

  "@media": {
    [media.small]: {
      minWidth: "100%", // Full width on small screens
    },
  },
})

// Title text
export const certTitle = style({
  fontSize: theme.fontSizes[2],
  fontWeight: theme.fontWeights.semibold,
  marginBottom: theme.space[2],
  marginTop: theme.space[2],
  color: theme.colors.primary,
  lineHeight: theme.lineHeights.heading,

  "@media": {
    [media.small]: {
      fontSize: theme.fontSizes[3],
    },
  },
})

// Provider, date, and hours with background styles
export const certProvider = style({
  display: "flex",
  alignItems: "center", // Align items vertically centered
  fontSize: theme.fontSizes[1],
  gap: theme.space[2], // Add spacing between items
  flexWrap: "wrap",

  "@media": {
    [media.small]: {
      flexDirection: "row",
    },
  },
})
// Individual data type (e.g., provider, date, length)
export const certDataType = style({
  backgroundColor: theme.colors.background,
  padding: `${theme.space[1]} ${theme.space[2]}`, // Add padding for spacing
  borderRadius: theme.radii.button, // Rounded corners
  color: theme.colors.text, // Text color for readability
})
// Link to view the certificate
export const certLink = style({
  color: theme.colors.black,
  fontSize: theme.fontSizes[2],
  textDecoration: "underline",
  flexShrink: 0,

  ":hover": {
    color: theme.colors.primary,
  },
})

export const sortingDescriptionStyle = style({
  marginTop: theme.space[3],
  fontSize: theme.fontSizes[2],
  color: theme.colors.text,
  fontStyle: "italic",
  textAlign: "center",
})
