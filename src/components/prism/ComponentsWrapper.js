// import React from "react"
// import { MDXProvider } from "@mdx-js/react"
// import { markdownContent } from "./prismStyles.css"

// const components = {
//   pre: (props) => <div {...props} />, // Wrap pre in a div to prevent nesting issues
//   code: (props) => <codeBlock {...props} />,
// }

// export const ComponentsWrapper = ({ children }) => (
//   <div className={markdownContent}>
//     <MDXProvider components={components}>{children}</MDXProvider>
//   </div>
// )

// ComponentsWrapper.js
// import React from "react"
// import { MDXProvider } from "@mdx-js/react"
// import { markdownContent } from "./prismStyles.css"

// const components = {
//   pre: (props) => <div {...props} />,
//   code: (props) => <CodeBlock {...props} />,
// }

// export const ComponentsWrapper = ({ children }) => (
//   <MDXProvider components={components}>{children}</MDXProvider>
// )

// src/components/ComponentsWrapper.js
import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { CodeBlock } from "../prism/CodeBlock" // Adjust import path
import { markdownContent } from "../prism/prismStyles.css"

// MDX components mapping
const components = {
  pre: (props) => <div {...props} />, // optional: wrap <pre> in a <div>
  // code: (props) => {
  //   const { className = "", children } = props
  //   // For fenced code blocks (```javascript), className will be "language-javascript"
  //   const language = className.replace("language-", "")
  //   return <CodeBlock language={language}>{children}</CodeBlock>
  // },
  code: (props) => <CodeBlock {...props} />,
}

export const ComponentsWrapper = ({ children }) => {
  return (
    <div className={markdownContent}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  )
}
