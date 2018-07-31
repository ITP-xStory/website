import React from 'react'
import Link from 'gatsby-link'

const Section = ({ headline, body }) => (
  <div>
    <div
        style={{
            margin: '0 auto',
            paddingTop: '10px'
        }}
    >
        <h2>
            {headline}
        </h2>
        <p>
            {body}
        </p>
    </div>
  </div>
)

export default Section
