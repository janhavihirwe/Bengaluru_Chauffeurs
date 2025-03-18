import React from 'react'
import "./Book.scss"
import Navbar from '../navbarComponent/Navbar'
import { IoArrowBack } from "react-icons/io5";
import useTripStore from '../../store/useTripStore';
import { useNavigate } from 'react-router-dom';

const Book:React.FC=()=>{
    const {
        tripType,
        name,
        mobileNumber,
        pickupLocation,
        dropLocation,
        pickupDate,
        pickupTime,
        setTripType,
        setName,
        setMobileNumber,
        setPickupLocation,
        setDropLocation,
        setPickupDate,
        setPickupTime,
        resetTrip,
      } = useTripStore();
      const navigate=useNavigate()
  return (
    <div className='book'>
        <Navbar/>
        <div className='div1'>
            <div className='subdiv1'>
                <IoArrowBack className='icon' onClick={()=>navigate("/")}/>
                <div className='heading'>
                    <div className='p1'>QUICK BOOKING</div>
                    <div className='p2'>Your one stop solution for chauffeurs</div>
                </div>
            </div>
            <div className='subdiv2'>
                <div className="radioContainer">
                    <div>
                        <input
                            type="radio"
                            name="tripType"
                            value="oneWay"
                            onChange={(e) => setTripType(e.target.value)}
                            checked={tripType === "oneWay"}
                        />
                        <label>One Way</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="tripType"
                            value="roundtrip"
                            onChange={(e) => setTripType(e.target.value)}
                            checked={tripType === "roundtrip"}
                        />
                        <label>Round Trip</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="tripType"
                            value="outstation"
                            onChange={(e) => setTripType(e.target.value)}
                            checked={tripType === "outstation"}
                        />
                        <label>Out Station</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="tripType"
                            value="permanent"
                            onChange={(e) => setTripType(e.target.value)}
                            checked={tripType === "permanent"}
                        />
                        <label>Permanent</label>
                    </div>
                </div>
                <div className='inputContainer'>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name"
                        value={name}
                        className="input-field"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input 
                        type="tel" 
                        placeholder="Mobile Number" 
                        name="mobile"
                        className="input-field" 
                        pattern="[0-9]{10}"
                        value={mobileNumber} 
                        onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.replace(/\D/g, '').slice(0, 10);
                          }}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                    />

                </div>
                <div className='inputContainer'>
                    <input 
                        type="text" 
                        placeholder="Pickup Location" 
                        name="pickuplocation"
                        className="input-field"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Drop Location" 
                        name="droplocation"
                        value={dropLocation}
                        className="input-field"
                        onChange={(e) => setDropLocation(e.target.value)}
                        required
                    />

                </div>
                <div className='inputContainer'>
                    <input
                        type="date"
                        className="input-field"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        required
                    />

                    <input
                        type="time"
                        className="input-field"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        required
                    />

                </div>
                <button className='btn'>Book a Chauffer</button>
                <div className='subdiv3'>
                <div className='heading'>Please Note</div>
                <div className='note'>These prices are valid for ten hours , extra hours will cost you 100 rupees per hour.One way drive in the city limits will be 1000 rupees only ,Food and accommodation is included for outstation trips.<br/> 
                For Permanent drivers please contact below numbers Mahesh :- +91 9035471947</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Book