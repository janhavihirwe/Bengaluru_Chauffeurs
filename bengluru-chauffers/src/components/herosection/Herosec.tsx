import React from 'react'
import "./Herosec.scss"
import { useNavigate } from 'react-router-dom'

const Herosec:React.FC=()=>{
  const navigate=useNavigate()
  const handleNavigation = (sectionId: string, path: string) => {
    if (location.pathname !== path) {
      navigate(path);

      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='parent'>
      <div className='div1'>
      <div className='text1'>100+ Chauffeurs</div>
      <div className='text2'>Welcome to Bengaluru Chauffeurs</div>
      <div className='text3'>Your one stop solution for Chauffeurs</div>
      <div className='buttongrp'>
        <button className='btn1'onClick={() => handleNavigation("secondsec", "/")}>Our Services</button>
        <button className='btn2' onClick={() => handleNavigation("booking", "/")}>Book a Chauffeurs</button>
      </div>
      </div>
    </div>
  )
}

export default Herosec