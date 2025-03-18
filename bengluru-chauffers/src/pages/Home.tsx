import React, { forwardRef } from "react";
import Navbar from '../components/navbarComponent/Navbar'
import Herosec from '../components/herosection/Herosec'
import "./Home.scss"
import Secondsec from '../components/secondsection/Secondsec'
import Thirdsec from '../components/thirdsection/Thirdsec'
import Forthsec from '../components/forthsection/Forthsec'
import Fifthsec from '../components/fifthsection/Fifthsec'
import Sixthsec from '../components/sixthsection/Sixthsec'
import Footer from '../components/footerComponent/Footer'
import Becomechauffer from "../components/becomechauffer/Becomechauffer";

const Home=forwardRef<HTMLDivElement>((props, ref)=>{
  return (
    <div className='home' ref={ref} id="home">
        <Navbar />
        <Herosec/>
        <Secondsec/>
        <Thirdsec/>
        <Forthsec/>
        <Fifthsec/>
        <Becomechauffer/>
        <Sixthsec/>
        <Footer/>
    </div>
  )
})

export default Home