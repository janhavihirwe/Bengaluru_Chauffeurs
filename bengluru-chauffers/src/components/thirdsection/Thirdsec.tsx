import React, { forwardRef } from "react";
import "./Thirdsec.scss"
import { useNavigate } from "react-router-dom";

const Thirdsec=forwardRef<HTMLDivElement>((props, ref)=>{
    const navigate=useNavigate()
    const book=()=>{
      navigate("/book")
    }
  return (
    <div className='thirdsec' ref={ref} id="booking">
        <div className='div1'>
            <div className='subdiv1'>Bengaluru Chauffeur Pricing</div>
            <div className='subdiv2'>Your one stop solution for chauffeurs</div>
        </div>
        <div className='div2'>
            <div className='card'>
                <div className='text1'>Basic Plan</div>
                <div className='text2'>₹2000</div>
                <div>
                    <div className='text3'><span className='line'></span>Service Focus: Professional driving in <br/> Bangalore.</div>
                    <div className='text3'><span className='line'></span>Priority: Smooth, stress-free commute.</div>
                    <div className='text3'><span className='line'></span>Vehicle Type: Standard vehicles.</div>
                    <div className='text3'><span className='line'></span>Suitability: Daily commutes & small events.</div>
                </div>
                <button className='btn' onClick={book}>Book a Chauffeurs</button>
            </div>
            <div className='card'>
            <div className='text1'>Executive Plan</div>
                <div className='text2'>₹3000</div>
                <div>
                    <div className='text3'><span className='line'></span>Service Focus: Premium & luxury cars.</div>
                    <div className='text3'><span className='line'></span>Priority: Experienced chauffeurs for in-city & outstation.</div>
                    <div className='text3'><span className='line'></span>Vehicle Type: Luxury vehicles.</div>
                    <div className='text3'><span className='line'></span>Suitability: Business trips & special occasions.</div>
                </div>
                <button className='btn' onClick={book}>Book a Chauffeurs</button>
            </div>
            <div className='card'>
            <div className='text1'>Premium Plan</div>
                <div className='text2'>₹5000</div>
                <div>
                    <div className='text3'><span className='line'></span>Service Focus: High-profile clients & events.</div>
                    <div className='text3'><span className='line'></span>Priority: Top-tier service for corporate & weddings.</div>
                    <div className='text3'><span className='line'></span>Vehicle Type: High-end luxury vehicles.</div>
                    <div className='text3'><span className='line'></span>Suitability: Corporate events, weddings, & special occasions.</div>
                </div>
                <button className='btn' onClick={book}>Book a Chauffeurs</button>
            </div>
        </div>
    </div>
  )
})

export default Thirdsec