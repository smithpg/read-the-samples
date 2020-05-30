import React from "react"
import Layout from "../components/layout"
import RandomButton from "../components/randomButton"
import useNavigator from "../hooks/useNavigator"

export default function SampleTemplate({ pageContext }) {
  const { prev, random, next } = useNavigator()
  const sampleText = pageContext.text.replace(/\\n/g, "<br>")
  const number = pageContext.number
  const containerStyle = { fontFamily: "monospace" }

  return (
    <Layout>
      <div id="navigator">
        <button onClick={prev}>Prev</button>
        <button onClick={random}>Random</button>
        <button onClick={next}>Next</button>
      </div>
      <h2>Sample #{number}</h2>
      <div
        style={containerStyle}
        dangerouslySetInnerHTML={{ __html: sampleText }}
      />
    </Layout>
  )
}
