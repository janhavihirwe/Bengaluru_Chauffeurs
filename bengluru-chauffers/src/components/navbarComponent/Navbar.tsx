import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/chauffers_logo.png";
import { LuMenu } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";
import { CiMobile2 } from "react-icons/ci";

const Navbar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    // Function to handle navigation and scrolling
    const handleNavigation = (sectionId: string) => {
        setShowModal(false); // Close modal on navigation
        if (location.pathname !== "/") {
            navigate("/", { replace: false });
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

    // Toggle modal visibility
    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <div className="navbar">
            <div className={`navdiv1 ${location.pathname === "/terms" ? "yellow-bg" : ""}`}>
                <p className="p"><CiMobile2 className="icon" />+91 9035471947</p>
                <p className="email">bengaluruchauffers@gmail.com</p>
            </div>
            {location.pathname !== "/book" && location.pathname !== "/terms" && (
                <div className="navdiv2">
                    <div className="subdiv1">
                        <img src={logo} alt="Logo" />
                        <div className="subdiv2">
                            <div className="links" onClick={() => handleNavigation("home")}>Home</div>
                            <div className="links" onClick={() => handleNavigation("secondsec")}>Services</div>
                            <div className="links" onClick={() => handleNavigation("aboutus")}>About Us</div>
                            <div className="links" onClick={() => handleNavigation("booking")}>Booking</div>
                            <div className="links" onClick={() => handleNavigation("becomechauffer")}>Become Chauffeur</div>
                        </div>
                    </div>
                    <button className="contactus-button" onClick={() => handleNavigation("contactus")}>
                        Contact Us
                    </button>
                    
                    {/* Menu Icon */}
                    <LuMenu className="menu" onClick={toggleModal} />

                    {/* Modal */}
                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <div className="links" onClick={() => handleNavigation("home")}>Home</div>
                                <div className="links" onClick={() => handleNavigation("secondsec")}>Services</div>
                                <div className="links" onClick={() => handleNavigation("aboutus")}>About Us</div>
                                <div className="links" onClick={() => handleNavigation("booking")}>Booking</div>
                                <div className="links" onClick={() => handleNavigation("becomechauffer")}>Become Chauffeur</div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
