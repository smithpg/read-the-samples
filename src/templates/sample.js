import React from "react"
import Layout from "../components/layout"

export default function sampleTemplate(props) {
  const sampleText = props.pageContext.text.replace(/\\n/g, "<br>")

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: sampleText }} />
    </Layout>
  )
}
