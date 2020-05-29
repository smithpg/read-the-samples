module.exports = {
  siteMetadata: {
    title: `Read the Samples`,
    description: `GPT-3 samples sourced from OpenAI/GPT-3 repo, presented in a readable format.`,
    author: `smithpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `samples`,
        path: `${__dirname}/samples`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
