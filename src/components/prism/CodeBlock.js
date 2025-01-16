// import React from "react"
// import { codeBlock, token } from "./prismStyles.css"

// export const CodeBlock = ({ code, language }) => {
//   const lines = code.split("\n")

//   return (
//     <pre className={codeBlock}>
//       <code>
//         {lines.map((line, index) => (
//           <span key={index}>
//             {line.split(" ").map((word, idx) => (
//               <span key={idx} className={token[word] || ""}>
//                 {word}{" "}
//               </span>
//             ))}
//             {"\n"}
//           </span>
//         ))}
//       </code>
//     </pre>
//   )
// }

// // src/components/prism/CodeBlock.js
// import React from "react"
// import { codeBlock } from "./prismStyles.css"

// /**
//  * A simplified CodeBlock that receives `children` (the code)
//  * and an optional `language` from MDX fenced code blocks.
//  */
// export const CodeBlock = ({ children, language = "javascript" }) => {
//   return (
//     <pre className={codeBlock}>
//       <code className={`language-${language}`}>{children}</code>
//     </pre>
//   )
// }

import React from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css" // Prism theme

const CodeBlock = ({ children, className }) => {
  const language = className?.replace(/language-/, "") || "javascript"
  const html = Prism.highlight(children, Prism.languages[language], language)

  return (
    <pre className={`language-${language}`}>
      <code dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
  )
}

export default CodeBlock
