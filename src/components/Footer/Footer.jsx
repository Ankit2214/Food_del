import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import Logo from './logo.jpeg'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={Logo} alt="" className='logo' />
            <p>FoodFlare is an innovative food delivery app that brings a burst of culinary excitement to your doorstep, offering a diverse selection of local and gourmet restaurants. Enjoy fast delivery, real-time tracking, and personalized recommendations for a delightful dining experience every time.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@foodflare.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FoodFlare.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
