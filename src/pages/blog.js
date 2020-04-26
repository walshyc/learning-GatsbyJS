import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from './blog.module.scss'

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="">
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${post.node.fields.slug}`}>
                  <h2>{post.node.frontmatter.title}</h2>
                  <p>{post.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default Blog
