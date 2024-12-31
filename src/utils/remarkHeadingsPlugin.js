// // src/utils/remarkHeadingsPlugin.js (CommonJS format)

// // const visit = require("unist-util-visit")
// import { visit } from "unist-util-visit"

// const { toString } = require("mdast-util-to-string")

// function transformer(tree, file) {
//   let headings = []

//   visit(tree, "heading", (node) => {
//     headings.push({
//       value: toString(node),
//       depth: node.depth,
//     })
//   })

//   // Attach headings to file metadata
//   if (!file.data.meta) {
//     file.data.meta = {}
//   }
//   file.data.meta.headings = headings
// }

// module.exports = () => transformer

import { visit } from "unist-util-visit"
import { toString } from "mdast-util-to-string"

const transformer = (tree, file) => {
  let headings = []

  visit(tree, `heading`, (heading) => {
    headings.push({
      value: toString(heading),
      depth: heading.depth,
    })
  })

  const mdxFile = file
  if (!mdxFile.data.meta) {
    mdxFile.data.meta = {}
  }

  mdxFile.data.meta.headings = headings
}

const remarkHeadingsPlugin = () => transformer

export default remarkHeadingsPlugin
