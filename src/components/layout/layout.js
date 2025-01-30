import * as React from "react"
import styles from "../design-system/styles.css"
import { Slice } from "gatsby"

const Layout = ({ children }) => {
  // console.log("Rendering Header Slice")
  // console.log("Rendering Footer Slice")

  return (
    <>
      <Slice alias="header" />
      <main>{children}</main>
      <Slice alias="footer" />
    </>
  )
}

export default Layout
