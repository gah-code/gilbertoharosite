import React from "react"
import Layout from "../components/layout/layout"
import ResumeStyledCertList from "../components/segments/about/resume-styled-cert-list"
import { Container, Section, Subhead, Text } from "../components/ui/ui"
import { marginTop } from "../components/ui/ui.css"

const Learning = () => {
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
        {/* <Section style={outlineStyle}>
          <Subhead>Creativity Through the Lens and with code</Subhead>
          <Text>
            As a photographer, I’ve worked to elevate my craft by enhancing
            visual assets with Adobe Photoshop and Lightroom. These tools allow
            me to deliver polished, professional finishes to every // project I
            undertake, whether it’s a personal photoshoot or a // commissioned
            work.
          </Text>
        </Section> */}
      </Container>
    </Layout>
  )
}

export default Learning
