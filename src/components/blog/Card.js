// src/components/blog/Card.js
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BlockLink, Space, Subhead, Kicker, Text } from "../ui/ui"

function Card({ children, to, style = {} }) {
  return (
    <BlockLink
      to={to}
      style={{
        padding: "10px",
        borderRadius: "8px",
        width: "350px",
        ...style,
      }}
    >
      {children}
    </BlockLink>
  )
}

function CardImage({ image }) {
  if (!image) return null
  const img = getImage(image)

  return (
    <>
      <GatsbyImage
        alt={image?.alt || "Blog post image"}
        image={img}
        style={{
          borderRadius: "8px",
          height: "200px",
          objectFit: "cover",
          width: "100%",
        }}
      />
      <Space size={3} />
    </>
  )
}

function CardTitle({ category, title }) {
  return (
    <Subhead>
      <Kicker>{category}</Kicker>
      {title}
    </Subhead>
  )
}

function CardExcerpt({ excerpt }) {
  return excerpt ? <Text as="p">{excerpt}</Text> : null
}

/* 
  Attach child components as static properties on Card 
  so we can do <Card.Image />, <Card.Title />, etc.
*/
Card.Image = CardImage
Card.Title = CardTitle
Card.Excerpt = CardExcerpt

export default Card
