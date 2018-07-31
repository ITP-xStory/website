import React from 'react'
import Link from 'gatsby-link'

const Button = ({ text }) => (
<div>
    <button
        style={{
        border: '1px solid #000000',
        borderRadius: '5px',
        padding: '13px',
        background: 'transparent',
        cursor: 'pointer'
        }}
    >
    {text}
    </button>
    <br/><br/>
  </div>
)

export default Button
