const fs = require("fs")
const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // If the node is a .txt file
  if (node.ext === ".txt") {
    // Attach file text and sample number as fields
    // on the new node

    createNodeField({
      node,
      name: "text",
      value: fs.readFileSync(node.absolutePath).toString(),
    })
    createNodeField({
      node,
      name: "sampleNumber",
      value: Number(node.name.match(/0|([1-9][0-9]*)/)[0]),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const sampleTemplate = path.resolve(`src/templates/sample.js`)

  return graphql(
    `
      query loadSamplesQuery {
        allFile {
          edges {
            node {
              name
              fields {
                text
                sampleNumber
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create sample pages.
    result.data.allFile.edges.forEach(edge => {
      const {
        node: {
          name,
          fields: { text, sampleNumber },
        },
      } = edge

      createPage({
        path: name,
        component: sampleTemplate,
        context: {
          text,
          number: sampleNumber,
          test: 5,
        },
      })
    })
  })
}
