import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Text, Link } from "../ui.jsx"
import {
  certItem,
  certImage,
  certTitle,
  certLink,
  certProvider,
} from "./resume-styled-cert-list.css.ts"

export function CertificateItem({
  title,
  provider,
  date,
  image,
  link,
  length,
}) {
  return (
    <Box className={certItem}>
      {/* Optimized Image Handling */}
      {image.childImageSharp ? (
        <GatsbyImage
          image={getImage(image)}
          alt={`Certificate: ${title}`}
          className={certImage}
        />
      ) : (
        <img
          src={image}
          alt={`Certificate: ${title}`}
          className={certImage}
          loading="lazy"
        />
      )}

      <Box>
        <Text className={certTitle}>{title}</Text>
        <Text className={certProvider}>
          <span>{provider}</span> &middot;
          <span>{date}</span> &middot;
          <span>{length} hours</span>
        </Text>
      </Box>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={certLink}
      >
        View
      </Link>
    </Box>
  )
}
