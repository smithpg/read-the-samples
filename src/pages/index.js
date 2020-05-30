import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import useNavigator from "../hooks/useNavigator"

import Layout from "../components/layout"
import RandomButton from "../components/randomButton"
import "./index.css"

const IndexPage = () => {
  const res = useStaticQuery(graphql`
    query getSamplePathsQuery {
      allFile(sort: { fields: [fields___sampleNumber], order: ASC }) {
        edges {
          node {
            name
            fields {
              sampleNumber
            }
          }
        }
      }
    }
  `)

  const samples = res.allFile.edges.map(({ node }) => {
    return { path: node.name, number: node.fields.sampleNumber }
  })

  const linkContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 5,
    "& > button": {
      background: "white",
    },
  }

  return (
    <Layout>
      <h3>All Samples sourced from OpenAI/GPT-3/175b_samples.jsonl</h3>
      <RandomButton />
      <div style={linkContainerStyle}>
        {samples.map(s => (
          <SampleLink sample={s} key={s.number} />
        ))}
      </div>
    </Layout>
  )
}

function SampleLink({ sample }) {
  const { select } = useNavigator()

  return (
    <button onClick={() => select(sample.number)}>
      Sample #{sample.number}
    </button>
  )
}

export default IndexPage
