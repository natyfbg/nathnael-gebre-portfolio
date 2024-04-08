import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { RiServiceLine } from "react-icons/ri";
import { BiSolidMessageRounded } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <a href="#"><IoHomeOutline /></a>
      <a href="#about"><FaRegUser /></a>
      <a href="#experience"><CgWebsite /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><BiSolidMessageRounded /></a>
    </nav>
  )
}

export default Nav