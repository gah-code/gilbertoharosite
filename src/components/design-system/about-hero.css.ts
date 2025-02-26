import { style } from "@vanilla-extract/css"
import { theme } from "./theme.css"
import { media } from "../ui/ui.css"

// specific maxWidths are to support design and
// current length of content in the Header and Text
export const aboutHeroHeader = style({
  maxWidth: "800px",
  marginBottom: theme.space[3],
  marginTop: theme.space[5],
})

export const aboutHeroText = style({
  fontSize: theme.fontSizes[2],
  marginBottom: theme.space[3],
  maxWidth: "798px",
  "@media": {
    [media.small]: {
      fontSize: theme.fontSizes[3],
    },
  },
})

export const aboutHeroImage = style({
  padding: "0 1rem",
  width: "100%",
  marginBottom: theme.space[5],
})
