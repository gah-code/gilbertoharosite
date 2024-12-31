import React from "react"
import UILibraryShowcase from "../components/UILibraryShowcase"
import Layout from "../components/layout"
import BlogIndex from "../templates/blog-index"
import BlogPost from "../templates/blog-post"
import AboutHero from "../components/segments/about/about-hero"
import AboutLeadership from "../components/segments/about/about-leadership"
import AboutLogoList from "../components/segments/about/about-logo-list"
import AboutStatList from "../components/segments/about/about-stat-list"
import SkillListGrid from "../components/segments/about/skill-list-grid"
import ResumeStyledCertList from "../components/segments/about/resume-styled-cert-list"
import Post from "../templates/post"

const learning = () => {
  return (
    <>
      <BlogIndex />
      {/* <Post /> */}
      {/* <BlogPost /> */}
      {/* <AboutHero />
      <AboutLeadership />
      <AboutLogoList />
      <AboutStatList />
      <SkillListGrid />
      <ResumeStyledCertList /> */}
    </>
  )
}

export default learning
