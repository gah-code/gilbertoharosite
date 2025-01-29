import React from "react"

// Utility function to remove trailing slashes
export const normalizeUrl = (url) => {
  if (!url) return ""
  return url.replace(/\/$/, "") // Remove trailing slash
}

export default function SEOHead({ title, description, image, url }) {
  const cleanedUrl = normalizeUrl(url)
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      <title>{title}</title>
      <meta name="description" content={description || "Default description"} />

      {cleanedUrl && <link rel="canonical" href={cleanedUrl} />}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || "Default description"}
      />
      <meta property="og:url" content={cleanedUrl} />
      {image && <meta property="og:image" content={image.url} />}
    </>
  )
}
