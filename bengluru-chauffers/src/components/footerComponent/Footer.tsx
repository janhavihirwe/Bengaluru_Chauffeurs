import React from 'react'
import "./Footer.scss"
import logo from "../../assets/logo2.png"
import { useNavigate } from 'react-router-dom'

const Footer:React.FC=()=>{
    const navigate=useNavigate()
    const handleNavigation = (sectionId: string) => {
        if (location.pathname !== "/") {
            navigate("/", { replace: false });

            // Wait for navigation before scrolling
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        } else {
            scrollToSection(sectionId);
        }
    };

    // Function to scroll to the section
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <div className='footer'>
        <div className='div1'>
            <div className='subdiv1'>
                <img src={logo}/>
                <p className='p1'>Bengaluru Chauffeurs</p>
                <p className='p2'>Your one stop solution for chauffeurs</p>
            </div>
            <div className='subdiv2'>
                <div className='heading'>Quick Links</div>
                <div className='links' onClick={() => handleNavigation("home")}>Home</div>
                <div className='links'onClick={() => handleNavigation("becomechauffer")}>Become chauffer</div>
                <div className='links'onClick={() => handleNavigation("secondsec")}>Services</div>
                <div className='links' onClick={() => handleNavigation("aboutus")}>About Us</div>
                <div className='links' onClick={() => handleNavigation("booking")}>Booking</div>
            </div>
            <div className='subdiv3'>
                <div className='heading'>Solutions</div>
                <div className='links'>Personal Drivers</div>
                <div className='links'>Corporate Fleet</div>
            </div>
            <div className='subdiv4'>
                <div className='heading'>Legal</div>
                <div className='links' onClick={()=>navigate("/terms")}>Terms Of Use</div>
                <div className='links'>Privacy Policy</div>
            </div>
        </div>
        <div className='div2'>
            <div className='subdiv1'>© 2025 Bengaluru Chauffeurs. All Rights Reserved</div>
            <div className='subdiv2'>Designed by <a href="https://www.thewebsort.com/" target="_blank" rel="noopener noreferrer" className='link'>Websort</a></div>
        </div>
    </div>
  )
}

export default Footer