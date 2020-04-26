import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Head from "../components/head"

const Error = () => {
  return (
    <Layout>
      <Head title="Page Not Found"></Head>
      <div className="">
        <h1>Page not found</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Layout>
  )
}

export default Error
