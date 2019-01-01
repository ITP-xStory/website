import React from 'react'
import Helmet from 'react-helmet'
import Attributes from '../components/attributes'

import favicon from '../favicon.png'

const Guide = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title, date } = frontmatter

  return (
    <div>
      <Attributes />
      <Helmet
        title={`${title}`}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <br />
        <p>Update date: {date}</p>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query docsPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        path
      }
    }
  }
`

export default Guide
