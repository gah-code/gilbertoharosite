import React from "react"
import { codeBlock, token } from "./prismStyles.css"

export const CodeBlock = ({ code, language }) => {
  const lines = code.split("\n")

  return (
    <pre className={codeBlock}>
      <code>
        {lines.map((line, index) => (
          <span key={index}>
            {line.split(" ").map((word, idx) => (
              <span key={idx} className={token[word] || ""}>
                {word}{" "}
              </span>
            ))}
            {"\n"}
          </span>
        ))}
      </code>
    </pre>
  )
}
