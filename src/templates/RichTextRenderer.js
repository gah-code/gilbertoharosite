import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

const RichTextRenderer = ({ content }) => {
  if (!content) return null

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <strong sx={{ fontWeight: "bold" }}>{text}</strong>
      ),
      [MARKS.ITALIC]: (text) => <em sx={{ fontStyle: "italic" }}>{text}</em>,
      [MARKS.UNDERLINE]: (text) => (
        <span sx={{ textDecoration: "underline" }}>{text}</span>
      ),
      [MARKS.CODE]: (text) => (
        <code
          sx={{
            fontFamily: "monospace",
            backgroundColor: "muted",
            padding: "2px 4px",
            borderRadius: "4px",
          }}
        >
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 sx={{ fontSize: 5, marginY: 3 }}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 sx={{ fontSize: 4, marginY: 3 }}>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 sx={{ fontSize: 3, marginY: 3 }}>{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p sx={{ fontSize: 2, lineHeight: "body", marginY: 2 }}>{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul sx={{ listStyleType: "disc", marginLeft: 4, marginY: 3 }}>
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol sx={{ listStyleType: "decimal", marginLeft: 4, marginY: 3 }}>
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li sx={{ marginY: 1 }}>{children}</li>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote
          sx={{
            borderLeft: "4px solid",
            borderColor: "primary",
            paddingLeft: 3,
            fontStyle: "italic",
            marginY: 3,
          }}
        >
          {children}
        </blockquote>
      ),
      [BLOCKS.HR]: () => (
        <hr
          sx={{
            border: 0,
            borderBottom: "1px solid",
            borderColor: "muted",
            marginY: 4,
          }}
        />
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          sx={{ color: "primary", textDecoration: "underline" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  }

  return (
    <div sx={{ marginY: 4 }}>{documentToReactComponents(content, options)}</div>
  )
}

export default RichTextRenderer
