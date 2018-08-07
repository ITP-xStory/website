import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'ITP xStory is an organization dedicated to support, to promote and to publish innovative creative projects and tools in the field of digital storytelling and digital art, by ITP studets and alumni. The organization vision is to reach as many digital creators as possible, to inspire them with cutting edge ideas and creation tools, and to build a community of explorers around these ideas. The organization is sponsored and supported by NYU ITP.' },
            { name: 'keywords', content: 'Creative, ITP, xStory, NYU, Innovation, Machine Learning, Open Source, VR, AR' },
          ]}
        />
        <Header
          siteTitle={this.props.data.site.siteMetadata.title}
        />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
