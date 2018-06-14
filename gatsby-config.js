module.exports = {
  siteMetadata: {
    title: 'georgemoon.io',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
        `Lato`,
        `Roboto+Slab`
        ]
      }
    }
  ],
}
