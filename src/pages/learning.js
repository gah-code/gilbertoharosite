import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import ResumeStyledCertList from "../components/segments/about/resume-styled-cert-list"
import { Container } from "../components/ui/ui"
import SEOHead from "../components/head"

const Learning = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site

  const outlineStyle = {
    border: "1px dashed tomato",
    padding: "8px",
    marginTop: "20px",
    // margin: "70px 0 0 0",
  }
  return (
    <Layout>
      <Container>
        <ResumeStyledCertList />
      </Container>
    </Layout>
  )
}

export default Learning

export const Head = ({ data }) => {
  const { site } = data
  const { siteMetadata } = site

  return (
    <SEOHead
      title="Learning Center | My Web Devlopment Tech Journey"
      description="Explore my learning journey, certifications, and skills in web development, design, tech and photography."
      image={null} // Replace with an actual image if available
      url={`${siteMetadata.siteUrl}/learning`}
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
  }
`
