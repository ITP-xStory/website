import React from 'react';
import Link from 'gatsby-link';
import 'bootstrap/dist/css/bootstrap.min.css';

import Section from '../components/section';
import Button from '../components/button';

const IndexPage = ({data}) => {
  const {edges: posts} = data.allMarkdownRemark;
  return (
    <div>
      {/* About */}
      <Section headline='XStory is back! 🤘' body='
        ITP XStory is an organization dedicated to support, to promote and to publish innovative creative projects and tools in the field of digital storytelling and digital art, by ITP studets and alumni.

        The organization vision is to reach as many digital creators as possible, to inspire them with cutting edge ideas and creation tools, and to build a community of explorers around these ideas.
        
        The organization is sponsored and supported by NYU ITP.
      ' />

      {/* Applications */}
      <Section headline='Applications are now open' body='
         ITP XStory is an organization dedicated to support, to promote and to publish innovative creative projects and tools in the field of digital storytelling and digital art, by ITP studets and alumni.

         The organization vision is to reach as many digital creators as possible, to inspire them with cutting edge ideas and creation tools, and to build a community of explorers around these ideas.
 
         The organization is sponsored and supported by NYU ITP.
      ' />

      <Button text='Submit your application now' />

      <p>
        * The application deadline is August 30th, 2018.
      </p>

      {/* FAQ */}
      <Section headline='What are we looking for?' body='
        Innovative projects, that could inspire the creative community as a whole and the ITP / IMA community in particular, or tools, that will allow these community to create innovative projects.  WHO CAN APPLY?
        Groups or individuals of existing students at NYU ITP or NYU IMA.
      ' />

      <Section headline='What do you get?' body='
        Innovative projects, that could inspire the creative community as a whole and the ITP / IMA community in particular, or tools, that will allow these community to create innovative projects.  WHO CAN APPLY?
        Groups or individuals of existing students at NYU ITP or NYU IMA.
      ' />
      <br/>
      <div className='fluid-container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
            <center>
              <h1>💰</h1>
              <p>
                <b>Financial support</b>
              </p>
              <p>
                Individual winners will receive $1,000 per semester to develop a project or a tool for two semesters (full academic year).
  Groups will receive $2,000 to develop a project or a tool per semester for two semsters.
              </p>
            </center>
          </div>
          <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
            <center>
              <h1>💻</h1>
              <p>
                <b>Development expenses</b>
                </p>
                <p>
                XStory will cover all development costs. From cloud storage to GPUs for convolutional networks training. We got your back! Think big!
              </p>
            </center>
          </div>
          <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
            <center>
              <h1>👩‍🔬</h1>
              <p>
                <b>Mentorship</b>
              </p>
              <p>
                A group of mentors, from the industry, the creative community and the ITP alumni network, will be assigned to each project or tool. These mentors will be available for the developers of the project and will assist in the project development and guidance.
              </p>
            </center>
          </div>
        </div>
      </div>


      {/* Past Projects */}
      <Section headline='Projects' body='' />
      <div className='fluid-container'>
        <div className='row'>
          {posts.map (({node: post}) => {
            const {frontmatter} = post;
            return (
              <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3'>
                <h4>
                  <img src={frontmatter.thumbnail} />
                  <Link to={frontmatter.path}>
                    {frontmatter.title}
                  </Link>
                </h4>
                <p>{frontmatter.excerpt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

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
`;

export default IndexPage;