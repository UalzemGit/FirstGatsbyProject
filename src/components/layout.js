import * as React from "react"
import Menu from "../components/Menu"
import Footer from "./Footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
