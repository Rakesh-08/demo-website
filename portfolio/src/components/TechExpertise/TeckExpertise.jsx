import react from "react";
import "./TechExpertise.css";

export default function TechExpertise() {
    let techStack= fetch("../../../resource/constants.jsx").then((res)=>res.json())
    return (
        <div className="techStack">
           
            <div>
                <Tech/>
            </div>
        </div>
    )
}




