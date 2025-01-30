import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BlockLink, Space, Subhead, Kicker, Text } from "../ui/ui"

export default function PostCard({
  slug,
  image,
  title,
  excerpt,
  author,
  category,
}) {
  return (
    <BlockLink
      to={`/blogs/${slug}`}
      style={{
        padding: "10px",
        border: "1px solid #eee",
        borderRadius: "8px",
        width: "350px",
      }}
    >
      {image && (
        <>
          <GatsbyImage
            alt={image.alt}
            image={getImage(image)}
            style={{
              borderRadius: "8px",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <Space size={4} />
        </>
      )}
      <Subhead>
        <Kicker>{category}</Kicker>
        {title}
      </Subhead>
      {excerpt && <Text as="p">{excerpt}</Text>}
      {/* If you have author information, you can add it here */}
    </BlockLink>
  )
}
