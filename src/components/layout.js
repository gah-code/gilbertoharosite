// import * as React from "react"

// import "../styles.css"
// import { Slice } from "gatsby"

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Slice alias="header" />
//       <main>{children}</main>
//       <Slice alias="footer" />
//     </>
//   )
// }

// export default Layout

// import * as React from "react"
// import "../styles.css"

// // Dynamic imports for slices
// const Header = React.lazy(() => import("../components/header/header"))
// const Footer = React.lazy(() => import("../components/footer"))

// const Layout = ({ children }) => {
//   console.log("Rendering Layout Component") // Debug log

//   return (
//     <>
//       {/* Header with Suspense */}
//       <React.Suspense fallback={<div>Loading Header...</div>}>
//         <Header />
//       </React.Suspense>

//       <main>{children}</main>

//       {/* Footer with Suspense */}
//       <React.Suspense fallback={<div>Loading Footer...</div>}>
//         <Footer />
//       </React.Suspense>
//     </>
//   )
// }

// export default Layout

import * as React from "react"
import "../styles.css"

// Lazy load slices to fix SSR issues
// const Header = React.lazy(() => import("../components/header/header"))
// const Footer = React.lazy(() => import("../components/footer"))

// const Layout = ({ children }) => {
//   console.log("Rendering Layout Component") // Debugging

//   return (
//     <>
//       <React.Suspense fallback={<div>Loading Header...</div>}>
//         <Header />
//       </React.Suspense>

//       <main>{children}</main>

//       <React.Suspense fallback={<div>Loading Footer...</div>}>
//         <Footer />
//       </React.Suspense>
//     </>
//   )
// }

// export default Layout

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
