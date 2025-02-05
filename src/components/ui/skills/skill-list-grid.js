import React from "react"
import "./styles.css"

const getSkillIconName = (skillName) => {
  const skillMappings = {
    HTML: "html",
    CSS: "css",
    SCSS: "sass",
    "Styled Components": "styledcomponents",
    JavaScript: "js",
    React: "react",
    Gatsby: "gatsby",
    Astro: "astro",
    GraphQL: "graphql",
    MD: "md",
    Vite: "vite",
    NPM: "npm",
    WordPress: "wordpress",
    "Next Js": "nextjs",
    Webpack: "webpack",
    Netlify: "netlify",
  }
  return skillMappings[skillName] || skillName.toLowerCase().replace(/\s+/g, "")
}

const skillList = [
  "HTML",
  "CSS",
  "SCSS",
  "Styled Components",
  "JavaScript",
  "React",
  "Gatsby",
  "Astro",
  "GraphQL",
  "MD",
  "Vite",
  "NPM",
  "WordPress",
  "Next Js",
  "Webpack",
  "Netlify",
]

const SkillListGrid = () => {
  return (
    <section className="skill-section">
      <div className="skill-container">
        {skillList.map((skill, index) => (
          <img
            key={index}
            src={`https://skillicons.dev/icons?i=${getSkillIconName(
              skill
            )}&theme=dark`}
            alt={skill}
            className="skill-icon"
          />
        ))}
      </div>
    </section>
  )
}

export default SkillListGrid
