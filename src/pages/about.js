import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/Head"

const About = () => {
  return (
    <Layout>
      <Head title="About"></Head>
      <div className="">
        <h1>About</h1>
        <h2>I'm Conor, a Full Stack Developer living in Ireland</h2>
        <p>
          <Link to="/contact">Contact Me</Link>
        </p>
      </div>
    </Layout>
  )
}

export default About
