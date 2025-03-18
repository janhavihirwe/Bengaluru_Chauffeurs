import React, { forwardRef } from "react";
import "./Forthsec.scss"
import chaufferimg1 from "../../assets/chauffer-img1.png"

const Forthsec=forwardRef<HTMLDivElement>((props, ref)=>{
  return (
    <div className='forthsec' ref={ref} id="aboutus">
        <div className='div1'>
            <div className='subdiv1'>Why Choose Us</div>
            <div className='subdiv2'>We deliver exceptional value.</div>
        </div>
        <div className='div2'>
                <div className='divs'>
                    <div className='text1'>Extensive Screening</div>
                    <div className='text'>Reliability</div>
                    <div className='text'>Safety</div>
                    <div className='text'>Customer Satisfaction</div>
                    <div className='text'>Distinctive Selection</div>
                </div>
                <div className='div3'>
                    <div className='subdiv1'>
                        <div className='text1'>Personal Drivers</div>
                        <div className='text2'> If you are in need of a dependable and trustworthy driver to assist you with your daily commuting or special occasions, we offer personal driver services tailored to meet your specific requirements. Our drivers are experienced, skilled, and well-groomed, ensuring that you have a comfortable and safe journey.</div>
                    </div>
                    <img src={chaufferimg1} className='img'/>
                </div>
        </div>
    </div>
  )
})

export default Forthsec