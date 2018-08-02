import React from 'react'
import Link from 'gatsby-link'
import '../layouts/styles.css'

const Section = ({ headline, body }) => (
  <div className="section">
    <div
      style={{
        margin: '0 auto',
        paddingTop: '10px',
      }}
    >
      <h2>{headline}</h2>
      <p>{body}</p>
    </div>
  </div>
)

export default Section
