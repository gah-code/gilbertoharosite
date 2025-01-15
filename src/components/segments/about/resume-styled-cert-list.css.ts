import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "../../../theme.css"
import { media } from "../../ui.css"

// Wrapper for the entire section
// Wrapper for the entire section
export const certListSection = style({
  backgroundColor: theme.colors.active,
  padding: theme.space[3],
  maxWidth: theme.sizes.narrow,
})

// Container for the certificate list
export const certListContainer = style({
  maxWidth: "640px",
  margin: "0 auto",
})

// Certificate item container

export const certItem = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.space[3],
  // borderBottom: `1px solid ${theme.colors.border}`,
  borderBottom: "1px solid #e0e0e0",

  padding: theme.space[3],
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",

  ":hover": {
    backgroundColor: theme.colors.background, // Light background on hover
    boxShadow: theme.shadows.large, // Add a subtle shadow
    // color: "#e0e0e0",
  },

  "@media": {
    [media.small]: {
      flexDirection: "row",
      gap: theme.space[1],
    },
  },
})

// Image for the certificate logo
export const certImage = style({
  width: "60px",
  height: "60px",
  borderRadius: theme.radii.button,
  objectFit: "cover",
  flexShrink: 0,
  boxShadow: theme.shadows.large,

  "@media": {
    [media.small]: {
      marginBottom: theme.space[2],
    },
  },
})

// Details section (title and provider/date)
export const certDetails = style({
  flexGrow: 1,
  minWidth: "200px", // Prevent squeezing text too much

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
  marginBottom: theme.space[1],
  color: theme.colors.primary,
  lineHeight: theme.lineHeights.heading,
})

// Provider and date
export const certProvider = style({
  fontSize: theme.fontSizes[2],
  color: theme.colors.text,
})

// Link to view the certificate
export const certLink = style({
  color: theme.colors.muted,
  fontSize: theme.fontSizes[1],
  textDecoration: "underline",
  flexShrink: 0,

  ":hover": {
    color: theme.colors.primary,
  },

  "@media": {
    [media.small]: {
      marginTop: theme.space[2],
    },
  },
})
