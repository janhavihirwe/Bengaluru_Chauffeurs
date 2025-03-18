import React, { forwardRef } from "react";
import "./Sixthsec.scss"
import { CiLocationOn } from "react-icons/ci";
import { CiMobile2 } from "react-icons/ci";



const Sixthsec=forwardRef<HTMLDivElement>((props, ref)=>{
  return (
    <div className='sixthsec' ref={ref} id="contactus">
        <div className='div1'>
            <div className='subdiv1'>Contact</div>
            <div className='subdiv2'>Connect with Us</div>
        </div>
        <div className='div2'>
            <div className='subdiv1'>
                <div className='locdiv'>
                    <CiLocationOn className='location'/>
                    <div className='info'>
                        <div className='heading'>Location</div>
                        <p>4thcross,5thmain, Navodaya nagar </p>
                        <p>JPnagar 7th phase Bengaluru -560078</p>
                    </div>
                </div>
                <div className='contactdiv'>
                    <CiMobile2 className='location'/>
                    <div className='info'>
                        <div className='heading'>Contact : Mahesh</div>
                        <p>+91 9035471947</p>
                        <p>+91 9108065999</p>
                    </div>
                </div>
            </div>
            <div className="subdiv2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4633671008764!2d77.56548357483975!3d12.877898937428924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15537b893be1%3A0x933694c720d300d4!2sS%20L%20V%20SPLENDOUR%2C%208th%20Phase%2C%20J.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1742187138779!5m2!1sen!2sin"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map'></iframe>
            </div>
        </div>
    </div>
  )
}) 

export default Sixthsec