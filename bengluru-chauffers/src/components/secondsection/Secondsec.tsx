import React, { forwardRef } from "react";
import "./Secondsec.scss"
import chaufferimg1 from "../../assets/chauffer-img1.png"
import chaufferimg2 from "../../assets/chauffer-img2.png"

const Secondsec=forwardRef<HTMLDivElement>((props, ref)=>{
  return (
    <div className='secondsec'ref={ref} id="secondsec">
        <div className='secondsec-div1'>
            <div className='secondsec-subdiv1'>Your Trusted Source for Exceptional Drivers</div>
            <div className='secondsec-subdiv2'>
                Welcome to our website! We are thrilled to provide you with all the information you need to know about hiring drivers. Whether you are an individual looking for a reliable driver for your personal needs or a business searching for professional drivers for your fleet, we have got you covered.
            </div>
        </div>
        <div className='secondsec-div2'>
            <div className='secondsec-subdiv1'>
                <img src={chaufferimg1} className='chaufferimg'/>
                <div className='innerdiv'>
                    <div className='heading'><span className='line'></span>Personal Drivers</div>
                    <div className='subpara'>
                    If you are in need of a dependable and trustworthy driver to assist you with your daily commuting or special occasions, we offer personal driver services tailored to meet your specific requirements. Our drivers are experienced, skilled, and well-groomed, ensuring that you have a comfortable and safe journey.
                    </div>
                </div>
            </div>
            <div className='secondsec-subdiv2'>
                <img src={chaufferimg2} className='chaufferimg'/>
                <div className='innerdiv'>
                    <div className='heading'><span className='line'></span>Corporate Fleet</div>
                    <div className='subpara'>
                    When it comes to building a team of drivers to cater to your business needs, we understand the importance of professionalism, punctuality, and commitment. With our recruitment solutions, we connect you with skilled and licensed drivers who reflect your company's values and deliver exceptional service consistently.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
})

export default Secondsec