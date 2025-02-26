import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Text, Link } from "../ui"
import {
  certItem,
  certImage,
  certDetails,
  certTitle,
  certProvider,
  certLink,
} from "./resume-styled-cert-list.css.ts"

export function CertificateItem({
  title,
  provider,
  date,
  image,
  link,
  length,
}) {
  const gatsbyImage = image ? getImage(image) : null

  return (
    <Box className={certItem}>
      {gatsbyImage ? (
        <GatsbyImage image={gatsbyImage} alt={title} className={certImage} />
      ) : (
        <img src={image} alt={title} className={certImage} />
      )}
      <Box className={certDetails}>
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
        View Certificate
      </Link>
    </Box>
  )
}
