import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">

                    <a href='/'><img src={assets.logo} alt='' /></a>
                    <div className="footer-social-icons">
                    <a href="https://www.facebook.com/YourPageName"><img src={assets.facebook_icon} alt='' /></a>
                    <a href="https://twitter.com/your_twitter_handle"><img src={assets.twitter_icon} alt='' /></a>
                    <a href="https://www.linkedin.com/in/bill-nye-science-guy-9488063b"><img src={assets.linkedin_icon} alt='' /></a>

                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                       <a href='/'><li>Home</li></a>
                       <a href='/'><li>About us</li></a>
                       <a href='/'><li>Delivery</li></a>
                       <a href='/'><li>Privacy Policy</li></a>

                    </ul>

                </div>
                <div className="footer-content-right">

                  <h2>GET IN TOUCH</h2>
                  <ul>
                  <a href="tel:+1234567890"><li>+1-423-673-9040</li></a>
                  <a href="mailto:example@example.com"><li>contact@zomato.com</li></a>
                  </ul>
                </div>
            </div>
             <hr/>
             <p className="footer-copyright">
                Copyright 2025 &copy; Zomato.com - All Right Reserved.
             </p>
           </div>
    )
}

export default Footer