import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Homepage(props) {
  const { homepage } = props.data

  return (
    <Layout>
      {homepage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const Head = (props) => {
  const { site, homepage } = props.data
  const { siteMetadata } = site

  return (
    <SEOHead
      title={homepage.title || siteMetadata.title}
      description={homepage.description || siteMetadata.description}
      image={homepage.image || null}
      url={`${siteMetadata.siteUrl}/`} // You can adjust this for dynamic paths if needed
      author={siteMetadata.author}
    />
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
      }
    }
    homepage {
      id
      title
      description
      image {
        id
        url
        alt
      }

      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageBenefitListContent

        ...HomepageFeatureListContent
        ...HomepageLogoListContent
        ...HomepageProductListContent
      }
    }
  }
`
