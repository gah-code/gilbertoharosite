import * as React from "react"

export default function SEOHead({ title, description, image, url }) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Title and Description */}
      <title>{title}</title>
      <meta
        name="description"
        content={description || "Gilberto Alejandro Haro Web Developer Website"}
      />

      {/* Canonical URL */}
      {url && <link rel="canonical" href={url} />}

      {/* Open Graph Metadata */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || "Default description"}
      />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image.url} />}
      {image && <meta property="og:image:alt" content={image.alt || "Image"} />}

      {/* Twitter Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={description || "Default description"}
      />
      {image && <meta name="twitter:image" content={image.url} />}
      {image && (
        <meta name="twitter:image:alt" content={image.alt || "Image"} />
      )}
    </>
  )
}
