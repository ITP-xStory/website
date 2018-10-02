module.exports = {
  pathPrefix: `/`,
  
  siteMetadata: {
    title: 'ITP xStory: Experiments in Storytelling',
    siteUrl: 'https://www.itpxstory.com',
    url: 'https://www.itpxstory.com'
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
}
