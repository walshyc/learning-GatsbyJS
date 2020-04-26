import React from "react"
import Layout from "../components/Layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact"></Head>
      <div className="">
        <h1>Contact</h1>
        <p>Email: conorwalsh0703@gmail.com</p>
        <p>
          Twitter:{" "}
          <a href="https://www.twitter.com/walshy_c" target="__blank">
            @walshy_c
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default Contact
