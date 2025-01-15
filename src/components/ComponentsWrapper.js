import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { markdownContent } from "./prismStyles.css"

const components = {
  pre: (props) => <div {...props} />, // Wrap pre in a div to prevent nesting issues
  code: (props) => <codeBlock {...props} />,
}

export const ComponentsWrapper = ({ children }) => (
  <div className={markdownContent}>
    <MDXProvider components={components}>{children}</MDXProvider>
  </div>
)
