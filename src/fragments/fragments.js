// import { graphql } from "gatsby"

// export const PostFields = graphql`
//   fragment PostFields on Mdx {
//     id
//     frontmatter {
//       title
//       slug
//       excerpt
//       category
//       author
//       date(formatString: "MMMM DD, YYYY")
//       image {
//         childImageSharp {
//           gatsbyImageData(layout: CONSTRAINED, width: 768, height: 400)
//         }
//       }
//       imageAlt
//     }
//   }
// `

// src/fragments/post-fragments.js
import { graphql } from "gatsby"

export const PostFields = graphql`
  fragment PostFields on Mdx {
    id
    frontmatter {
      title
      slug
      excerpt
      category
      author
      date(formatString: "MMMM DD, YYYY")
      image {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 300, height: 200)
        }
      }
      imageAlt
    }
  }
`
