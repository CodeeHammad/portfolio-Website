import React from 'react'
import './footer.css'
import { LiaLinkedin } from "react-icons/lia";
import { VscGithubInverted } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
   <footer>
    <a href="#" className="footer__logo">Hammad</a>
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/hammadullah-jan-711a86274/" target='_blank'><LiaLinkedin />
</a>
      <a href="https://github.com/hammadjan" target='_blank'><VscGithubInverted /></a>
      <a href="https://twitter.com/CodeeHam " target='_blank'><BsTwitterX /></a>
    </div>
    <div className="footer_copyright">
      <small>&copy; CodeeHammad. All rights reserved/</small>
    </div>
   </footer>
  )
}

export default Footer