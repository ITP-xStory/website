import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'

const Team = ({}) => (
  <div>
    <div className="member">
      <img
        className="member_photo"
        src="https://imgur.com/download/WN4Gd7L"
        alt="Of Fleisher"
      />
      <div className="member_name">Or Fleisher</div>
      <div className="member_name">orfleisher@nyu.edu</div>
      <a
        href="https://orfleisher.com"
        target="_blank"
        className="noUnderline member_name"
      >
        <div className="member_name">www.orfleisher.com</div>
      </a>
    </div>

    <div className="member">
      <img
        className="member_photo"
        src="https://imgur.com/download/oS7GpfK"
        alt="Dror Ayalon"
      />
      <div className="member_name">Dror Ayalon</div>
      <div className="member_name">dror.ayalon@nyu.edu</div>
      <a
        href="https://www.drorayalon.com"
        target="_blank"
        className="noUnderline member_name"
      >
        <div className="member_name">www.drorayalon.com</div>
      </a>
    </div>

    <div className="member">
      <img
        className="member_photo"
        src="https://imgur.com/download/EYSqurq"
        alt="Lisa Jamhoury"
      />
      <div className="member_name">Lisa Jamhoury</div>
      <div className="member_name">lisa.jamhoury@nyu.edu</div>
      <a
        href="http://lisajamhoury.com/"
        target="_blank"
        className="noUnderline member_name"
      >
        <div className="member_name">www.lisajamhoury.com</div>
      </a>
    </div>
  </div>
)

export default Team
