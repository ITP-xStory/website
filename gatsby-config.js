module.exports = {
  pathPrefix: `/website`,
  siteMetadata: {
    title: 'ITP xStory: Experiments in Storytelling',
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