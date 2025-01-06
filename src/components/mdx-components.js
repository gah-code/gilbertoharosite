import React from "react"

const components = {
  h1: (props) => <h1 style={{ color: "#004ca3" }} {...props} />,
  p: (props) => (
    <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }} {...props} />
  ),
  a: (props) => (
    <a style={{ color: "#ff5722", textDecoration: "underline" }} {...props} />
  ),
  code: (props) => (
    <code
      style={{
        backgroundColor: "#f5f5f5",
        padding: "0.2rem 0.4rem",
        borderRadius: "4px",
      }}
      {...props}
    />
  ),
}

export default components
