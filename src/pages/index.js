import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { navigate } from "@reach/router"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const res = useStaticQuery(graphql`
    query getSamplePathsQuery {
      allFile(sort: { fields: [fields___sampleNumber], order: ASC }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  const paths = res.allFile.edges.map(e => e.node.name)

  function getRandomSamplePath() {
    return `/${paths[Math.floor(Math.random() * paths.length)]}`
  }

  return (
    <Layout>
      <h1>All Samples from OpenAI/GPT-3/175b_samples.jsonl</h1>
      <button onClick={() => navigate(getRandomSamplePath())}>
        View a random sample
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {paths.map(path => (
          <span
            key={path}
            style={{
              border: "1px solid rgba(0,0,0,0.3)",
              borderRadius: 5,
              padding: 5,
            }}
          >
            <Link to={`/${path}`}>{path}</Link>
          </span>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
