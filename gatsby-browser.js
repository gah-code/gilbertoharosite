import "@fontsource/dm-sans"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import "@fontsource/dm-mono"
import "@fontsource/dm-mono/500.css"
import "prismjs/themes/prism-tomorrow.css"
import Prism from "prismjs"

import React from "react"
import { ComponentsWrapper } from "./src/components/prism/ComponentsWrapper"
import shortcodes from "./src/components/prism/shortcodes"

export const wrapRootElement = ({ element }) => (
  <ComponentsWrapper components={shortcodes}>{element}</ComponentsWrapper>
)
