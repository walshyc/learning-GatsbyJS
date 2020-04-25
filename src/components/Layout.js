import React from "react"
import Footer from "./Footer"
import Header from "./Header"

const Layout = props => {
  return (
    <div className="">
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
