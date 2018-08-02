import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'

import orfleisher from '../images/orfleisher.jpg';
import drorayalon from '../images/drorayalon.jpg';

const Team = ({ }) => (
  <div>
    
    <div className="member">
      <img className="member_photo" src={orfleisher} alt="Of Fleisher"/>
      <div className="member_name">Or Fleisher</div>
      <div className="member_name">orfleisher@nyu.edu</div>
      <a href="http://www.orfleisher.com" target="_blank" className="noUnderline member_name"><div className="member_name">www.orfleisher.com</div></a>
    </div>

  <div className="member">
    <img className="member_photo" src={drorayalon} alt="Dror Ayalon"/>
    <div className="member_name">Dror Ayalon</div>
    <div className="member_name">dror.ayalon@nyu.edu</div>
    <a href="https://www.drorayalon.com" target="_blank" className="noUnderline member_name"><div className="member_name">www.drorayalon.com</div></a>
  </div>

</div>
)

export default Team
