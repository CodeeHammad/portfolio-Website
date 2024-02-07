import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/hammadullah-jan-711a86274/" target='_blank'><FaLinkedin />
</a>
        <a href="https://github.com/hammadjan" target='_blank'><FaSquareGithub /></a>
        <a href="https://twitter.com/CodeeHam" target='_blank'><FaSquareXTwitter />
</a>
    </div>

 )
}

export default HeaderSocials