import React, { Component } from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css'

import Section from '../components/section'
import Button from '../components/button'
import Team from '../components/team'
import Attributes from '../components/attributes'

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    return (
      <div className='container'>
        
        <Attributes/>

        {/* Past Projects */}
        <Section headline="Projects" body="" />
          <div className="fluid-container">
            <div className="row">
              {posts.map(({ node: post }) => {
                const { frontmatter } = post
                return (
                  <Link
                    to={frontmatter.path}
                    className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 noUnderline"
                    >
                    <div className='project'>
                    <div className='projectThumbnail'>
                      <img  src={frontmatter.thumbnail} alt={frontmatter.title}/>
                    </div>
                    <h4>
                      {frontmatter.title}
                    </h4>
                    <p>{frontmatter.excerpt}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

        {/* About */}
        <Section
          headline="xStory is back! 🤘"
          body="
          ITP xStory is an organization dedicated to support, to promote and to publish innovative creative projects and tools in the field of digital storytelling and digital art, by ITP studets and alumni.

          The organization vision is to reach as many digital creators as possible, to inspire them with cutting edge ideas and creation tools, and to build a community of explorers around these ideas.
          
          The organization is sponsored and supported by NYU ITP.
          "
        />

        {/* Applications */}
        <Section
          headline="Applications are now open"
          body="
          ITP xStory is an organization dedicated to support, to promote and to publish innovative creative projects and tools in the field of digital storytelling and digital art, by ITP studets and alumni.

          The organization vision is to reach as many digital creators as possible, to inspire them with cutting edge ideas and creation tools, and to build a community of explorers around these ideas.
  
          The organization is sponsored and supported by NYU ITP.
        "
        />

        <Button
          text="Submit your application"
          url="https://goo.gl/forms/Emz3OTjOSUGIzct13"
        />

        <p>* The application deadline is August 30th, 2018.</p>

        {/* FAQ */}
        <Section
          headline="What are we looking for?"
          body="
          Innovative projects, that could inspire the creative community as a whole and the ITP / IMA community in particular, or tools, that will allow these community to create innovative projects."
          small={true}
        />

         <Section
          headline="Who can apply?"
          body="
          Groups or individuals of existing students at NYU ITP or NYU IMA."
          small={true}
        />

        <Section
          headline="What do you get?"
          small={true}
        />
        <div className="fluid-container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <center>
                <h1>💰</h1>
                <p>
                  <b>Financial support</b>
                </p>
                <p>
                  Individual winners will receive $1,000
                  per semester for a full academic year.
                  Groups will receive $2,000 per semester for a full academic year.
                </p>
              </center>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <center>
                <h1>💻</h1>
                <p>
                  <b>Development expenses</b>
                </p>
                <p>
                  xStory will cover all development costs. From cloud storage to
                  GPUs for convolutional networks training. We got your back!
                  Think big!
                </p>
              </center>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <center>
                  <h1>👩‍🔬</h1>
                  <p>
                    <b>Mentorship</b>
                  </p>
                  <p>
                    A group of mentors, coming from the industry, the creative community
                    and the ITP alumni network, will be available and will assist in the project direction.
                  </p>
                </center>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <center>
                  <h1>📰</h1>
                  <p>
                    <b>Publication costs coverage</b>
                  </p>
                  <p>
                  xStory will guide the winners though the process of publishing
                  the project or the tool, and will cover all costs for festivals or conference submissions.
                  </p>
                </center>
              </div>
          </div>
        </div>

        {/* Team */}
        <Section headline="The xStory Team" body="Please feel free to reach out for anything! We would love to hear from you!" />
        <Team/>
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            thumbnail
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
