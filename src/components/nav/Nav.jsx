import React from 'react'
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

import { AiFillMessage } from "react-icons/ai";
import { useState } from 'react';



const Nav = () => {
  const[activeNav , setActiveNav]=useState('#')
  return (
  <nav>
    <a href="#"onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
    <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><FaBookOpen/></a>
    <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerService2Line /></a>
    <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>
  </nav>
  )
}

export default Nav