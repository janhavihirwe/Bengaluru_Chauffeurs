import React from 'react'
import Navbar from '../navbarComponent/Navbar'
import "./Terms.scss"
import { IoArrowBack } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Terms:React.FC=()=>{
    const navigate=useNavigate()
  return (
    <div className='terms'>
        <Navbar/>
        <div className='maindiv'>
            
            <div className='heading'><IoArrowBack className='icon' onClick={()=>navigate("/")}/>BengaluruChauffeurs Terms and Conditions</div>
            <div className='p1'>These terms and conditions ("Terms") govern your use of the BengaluruChauffeurs website ("Website") and the services provided therein. By accessing or using our Website, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using our services</div>
            <div className='p1'>1. Services <br/>BengaluruChauffeurs provides a platform to connect users ("Customers") with chauffeurs ("Chauffeurs") for transportation services. The services offered include but are not limited to hiring chauffeurs for driving customers in their own vehicles</div>
            <div className='p1'>2. User Eligibilit<br/>Users must be at least 18 years old to access our services. By using the Website, you confirm that you are of legal age and possess the authority to enter into these Terms</div>
            <div className='p1'>3. Booking and Payment<br/>Customers may book chauffeur services through the Website. All bookings are subject to availability. Payment terms, including rates, fees, and any additional charges, will be specified during the booking process</div>
            <div className='p1'>4. Chauffeur Services<br/>a. Responsibilities: BengaluruChauffeurs aims to provide experienced and professional chauffeurs. However, we do not directly employ the chauffeurs and cannot guarantee their conduct or actions.<br/>b. Vehicle Condition: Customers are responsible for ensuring the safety and condition of their vehicles. BengaluruChauffeurs is not liable for any damage or loss to the vehicle during the chauffeur service.</div>
            <div className='p1'>5. Cancellation and Refunds<br/>Cancellation policies, including refund eligibility, will be provided during the booking process. Customers are encouraged to review and understand these policies before making bookings</div>
        </div>
    </div>
  )
}

export default Terms