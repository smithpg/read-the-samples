import React from "react"
import Layout from "../components/layout"

export default function sampleTemplate({ pageContext }) {
  const sampleText = pageContext.text.replace(/\\n/g, "<br>")
  const number = pageContext.number
  const containerStyle = { fontFamily: "monospace" }

  return (
    <Layout>
      <h2>Sample #{number}</h2>
      <div
        style={containerStyle}
        dangerouslySetInnerHTML={{ __html: sampleText }}
      />
    </Layout>
  )
}
