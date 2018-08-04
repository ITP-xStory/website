import React from 'react'
import Link from 'gatsby-link'
import '../layouts/styles.css'

const Section = ({ headline, body, small=false }) => (
  <div className="section">
    <div
      style={{
        margin: '0 auto',
        paddingTop: '10px',
      }}
    >
      {small==false ? <h2>{headline}</h2> : <h3>{headline}</h3>}
      {body ? <p>{body}</p> : ''}
    </div>
  </div>
)

export default Section
