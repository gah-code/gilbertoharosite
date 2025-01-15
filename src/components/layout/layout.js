import * as React from "react"
import "../design-system/styles.css"
import { Slice } from "gatsby"

// Debug logs
console.log("Rendering Layout Component")

const Layout = ({ children }) => {
  console.log("Rendering Header Slice")
  console.log("Rendering Footer Slice")

  return (
    <>
      <Slice alias="header" />
      <main>{children}</main>
      <Slice alias="footer" />
    </>
  )
}

export default Layout
