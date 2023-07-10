

import * as React from "react"
import Menu from '../components/Menu'



import "./layout.scss"

const Layout = ({ children }) => {
  

  return (
    <>
        <Menu/>
        <main>{children}</main>
       
    </>
  )
}

export default Layout
