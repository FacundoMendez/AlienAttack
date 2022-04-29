import React from 'react'
import "./footer.css"
import esrb from "../../img/esrb.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="blurFooter"></div>
        <div className="logoFooter">
            <p>AlienAttack</p>
        </div>
        <div className="terms">
            <p>©2002-2016 AlienAttack. All rights reserved. AlienAttack and the AlienAttack logo are trademarks of AlienAttack in the U.S. and/or other countries.
                 All other trademarks are the property of their respective owners. 
            </p><br />
            <div className='listTerms'>
                <ul>
                    <li><a href="/home"> • Privacy Policy</a></li>
                    <li><a href="/home"> • Terms and Conditions </a></li>
                    <li><a href="/home"> • Cookie Policy </a></li>
                    <li><a href="/home"> • Legal Notices </a></li>
                    <li><a href="/home"> • EULA </a></li>
                </ul>
            </div>
        </div>
        <div className="esrbContainer">
            <img src={esrb} alt="esrb" />
            <ul>
                <li>Blood</li>
                <li>Fantasy Violence</li>
                <li>Mild Suggestive Themes</li>
                <li>Online Interactions Not Rated by The ESRB</li>
            </ul>
        </div>

    </div>
  )
}

export default Footer;