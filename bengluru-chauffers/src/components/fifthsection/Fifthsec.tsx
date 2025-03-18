import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Fifthsec.scss"
import data from "../../../feedback.json"
import comma from "../../assets/comma.png"

const Fifthsec:React.FC=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,  // Ensures all slides fit properly
        variableWidth: false,  // Prevents incorrect slide calculations
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    
    
  return (
    <div className='fifthsec'>
        <div className='div1'>
            <div className='text1'>Testimonials</div>
            <div className='text2'>Customer Feedbacks</div>
        </div>
        <div className='slider'>
        <Slider {...settings}>
        {data.map((item) => (
          <div className="feedback-card" key={item.id}>
            <img src={comma} className='comma'/>
            <p className="feedback-text">"{item.feedback}"</p>
            <h4 className="feedback-name">{item.name}</h4>
          </div>
        ))}
      </Slider>
        </div>
    </div>
  )
}

export default Fifthsec