import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/nathnael-gebre-6348b41a6/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/natyfbg" target='_blank'><FaGithub /></a>
        <a href="https://dribbble.com/nathnaelgebre" target='_blank'><FaDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocials