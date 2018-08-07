import React from 'react'
import Link from 'gatsby-link'

const Button = ({ text, url }) => (
  <div>
    <a className="btn btn-outline-primary" href={url} role="button" target="_blank">{text}</a>
    <br />
    <br />
  </div>
)

export default Button
