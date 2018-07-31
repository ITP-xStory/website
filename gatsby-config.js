module.exports = {
  pathPrefix: `https://github.com/ITP-Xstory/website`,
  siteMetadata: {
    title: 'Experiments in Storytelling.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
  ],
};