import React, { forwardRef, useState } from "react";
import "./Forthsec.scss";
import chaufferimg1 from "../../assets/chauffer-img1.png";

// Define a type that includes all valid keys for the options
type OptionKeys = "Extensive Screening" | "Reliability" | "Safety" | "Customer Satisfaction" | "Distinctive Selection";

const Forthsec = forwardRef<HTMLDivElement>((props, ref) => {
  // Define the content mapping
  const optionContent: Record<OptionKeys, string> = {
    "Extensive Screening": "Our thorough screening process is a testament to our unwavering commitment to safety and quality. We meticulously select drivers who meet the highest standards in qualifications, skills, and attitude. Through rigorous background checks and interviews, we ensure your safety and satisfaction every time you choose us. Trust in our service, where your well-being is our top priority.",
    "Reliability": "Our drivers are renowned for their unwavering commitment to punctuality, professionalism, and delivering exceptional service to our valued clients. With a dedication to reliability, they ensure you reach your destination on time, every time. Their courteous demeanor and strong work ethic make your journey with us not just safe and efficient but also a pleasant experience. Choose us for a service that sets the standard for excellence in transportation.",
    "Safety": "Safety is our paramount concern. Our drivers are rigorously selected, holding valid licenses and boasting extensive experience. They are well-versed in strict adherence to traffic rules and regulations, ensuring your peace of mind throughout your journey with us. Your safety is our top priority, and we take it seriously.",
    "Customer Satisfaction": "Our relentless commitment is to surpass customer expectations through exceptional service. Feedback is invaluable to us, and we actively nurture enduring relationships with our clients. Our goal is not only to meet but to consistently exceed your expectations, ensuring your satisfaction and trust in our service.",
    "Distinctive Selection": "Our chauffeurs are not just drivers; they are the epitome of sophistication and excellence. Carefully selected for their professionalism, expertise, and commitment to service, our drivers redefine luxury transportation. With a focus on safety, local knowledge, and personalized service, each journey becomes a seamless experience of comfort and class. Choose [Your Company Name] for a chauffeur service that stands out—a perfect blend of skill, courtesy, and distinctive style",
  };

  // Use the union type for selectedOption
  const [selectedOption, setSelectedOption] = useState<OptionKeys>("Extensive Screening");

  return (
    <div className="forthsec" ref={ref} id="aboutus">
      <div className="div1">
        <div className="subdiv1">Why Choose Us</div>
        <div className="subdiv2">We deliver exceptional value.</div>
      </div>
      <div className="div2">
        <div className="divs">
          {Object.keys(optionContent).map((option) => (
            <div
              key={option}
              className={`text ${selectedOption === option ? "active" : ""}`}
              onClick={() => setSelectedOption(option as OptionKeys)} // Type assertion here
            >
              {option}
            </div>
          ))}
        </div>
        <div className="div3">
          <div className="subdiv1">
            <div className="text1">{selectedOption}</div>
            <div className="text2">{optionContent[selectedOption]}</div>
          </div>
          <img src={chaufferimg1} className="img" alt="Chauffeur Service" />
        </div>
      </div>
    </div>
  );
});

export default Forthsec;
