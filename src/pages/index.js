import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from '../components/Head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"></Head>
      <div className="">
        <h1>Hello</h1>
        <h2>I'm Conor, a Full Stack Developer living in Ireland</h2>
        <p>
          Need a developer <Link to="/contact">Contact me.</Link>
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
