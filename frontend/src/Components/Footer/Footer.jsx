import React from 'react'
import './Footer.css'
import instagram_logo from '../Assets/instagram_logo.png'
import whatsapp_logo from '../Assets/whatsapp_logo.png'
import pinterest_logo from '../Assets/pinterest_logo.png'
import footer_logo from '../Assets/footer_logo.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="Footer logo" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_logo} alt="Instagram" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_logo} alt="Whatsapp" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_logo} alt="Pinterest" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Rights Reserved.</p>
        </div>
    </div>
  )
}
export default Footer