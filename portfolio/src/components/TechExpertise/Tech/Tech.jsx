import react from "react";
import "./Tech.css";

export default function Tech({url,docs}) {
    return (
        <div className="technology">
            <a href={docs} target="_blank">
            <img src={url} style={{
                    "height": "100%",
                    "width":"100%"
                }} />
            </a>
        </div>
    )
}



