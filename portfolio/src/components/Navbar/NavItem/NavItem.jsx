import react from "react";
import "./NavItem.css";

export default function NavItem({heading,id,windowProp}) {
   
  
    return (
        <div className="headings">
            <a href={id} ><h1 onClick={()=>windowProp(id)}>{heading}</h1></a>
            
        </div>
    )
}





