import react from "react";
import "./FormResponse.css"

export default function FormResponse({handleFormSubmit}) {
    
    return (
        <div className="formResponse">

            <h2>Thankyou for contacting me , you will very soon listen from my side</h2>
            <span onClick={handleFormSubmit}>
                go back
            </span>
        </div>
    )
}
