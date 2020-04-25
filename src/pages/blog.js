import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <div className="">
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <li>
                <h2>{post.node.frontmatter.title}</h2>
                <p>{post.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default Blog
