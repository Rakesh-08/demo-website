import react from "react";
import "./NavItem.css";

export default function NavItem({heading,id}) {
    return (
        <div className="headings">
            <a href={id} style={{"text-decoration":"none"}}><h1>{heading}</h1></a>
            
        </div>
    )
}





