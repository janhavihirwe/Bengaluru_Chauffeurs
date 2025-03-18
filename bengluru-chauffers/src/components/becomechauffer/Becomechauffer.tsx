import React, { forwardRef, useState } from "react";
import "./Becomechauffer.scss";
import useUserStore from "../../store/useUserStore";
import { RiFileUploadLine } from "react-icons/ri"; // Import an upload icon

const Becomechauffer = forwardRef<HTMLDivElement>((props, ref) => {
    const { name, age, mobileNumber, address, document, setUserDetails, clearUserDetails } = useUserStore();
    const [fileName, setFileName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "document" && files) {
            setUserDetails({ document: files[0] });
            setFileName(files[0].name);
        } else {
            setUserDetails({ [name]: name === "age" ? Number(value) : value });
        }
    };

    return (
        <div className='becomechauffer' ref={ref} id="becomechauffer">
            <div className="div1">
                <div className="subdiv1">Enter the Details</div>
                <div className="subdiv2">Become a Chauffeur</div>
            </div>
            <div className="div2">
                <div className='inputContainer'>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="name"
                        value={name}
                        className="input-field"
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="number" 
                        placeholder="Age" 
                        name="age"
                        className="input-field" 
                        value={age || ""}  
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <input 
                        type="tel" 
                        placeholder="Mobile Number" 
                        name="mobileNumber"
                        className="input-field" 
                        value={mobileNumber} 
                        onInput={(e) => {
                            const input = e.target as HTMLInputElement;
                            input.value = input.value.replace(/\D/g, '').slice(0, 10);
                          }}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Address" 
                        name="address"
                        value={address}
                        className="input-field"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='inputContainer'>
                    <label className="custom-file-upload">
                        <input 
                            type="file" 
                            name="document"
                            className="file-input"
                            onChange={handleChange}
                            required
                        />
                        <span className="file-placeholder">{fileName || "Upload Driving License"}</span>
                        <RiFileUploadLine className="upload-icon" />
                    </label>
                    <button className='btn'>Book a Chauffeur</button>
                </div>
            </div>
        </div>
    );
});

export default Becomechauffer;
