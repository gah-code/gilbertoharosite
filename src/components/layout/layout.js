import * as React from "react"
import styles from "../design-system/styles.css.ts"
import { Slice } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <Slice alias="header" />
      <main>{children}</main>
      <Slice alias="footer" />
    </>
  )
}

export default Layout
