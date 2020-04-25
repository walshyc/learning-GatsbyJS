import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import '../styles/index.scss'

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
