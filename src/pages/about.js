import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function About(props) {
  const { aboutPage } = props.data

  return (
    <Layout>
      {aboutPage ? (
        aboutPage.blocks.map((block) => {
          const { id, blocktype, ...componentProps } = block
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...componentProps} />
        })
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "32px",
          }}
        >
          <h1>How it all started</h1>
          <div style={{ maxWidth: "700px" }}>
            <p>
              In my childhood, I can now see the seeds of my current career
              taking root. I spent countless hours doodling in my notebooks,
              crafting makeshift comic books, and experimenting with different
              fonts—all in pursuit of creativity. My fascination with digital
              expression flourished during the MySpace era, eventually guiding
              me to professional photography.
            </p>
            <p>
              Yet, deep down, I yearned for a vibrant platform to showcase my
              work. That's when I discovered the exhilarating world of web
              development, a true game-changer! It offered a stage for my
              photography and unlocked a wealth of opportunities. I embraced
              projects that allowed me to blend all my passions and skills. Now,
              as a Web Developer, I fuse my love for design patterns, color,
              digital artistry, and branding into unique and meaningful digital
              experiences.
            </p>
            {/* <p>
              You're seeing this message because no <code>aboutPage</code>{" "}
              blocks were found in the about page query result. This is likely
              because you are using a free Contentful space where restrictions
              on the number of content types apply.
            </p>
            <p>
              Take a look at the repository <code>README</code> Quick Start
              section for a note on how to provision your Contentful space with
              the <code>aboutPage</code> content types included once you have a
              paid plan.
            </p> */}
          </div>
        </div>
      )}
    </Layout>
  )
}
export const Head = (props) => {
  const { aboutPage } = props.data
  return <SEOHead {...aboutPage} />
}
export const query = graphql`
  {
    aboutPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
