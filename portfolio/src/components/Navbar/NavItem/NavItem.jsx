import react from "react";
import "./NavItem.css";

export default function NavItem({heading,id,windowProp,handleClose}) {
   
  
    return (
        <div className="headings">
            <a href={id} ><h1 className="nav" onClick={() => {
                windowProp(id);
                handleClose();
            }}>{heading}</h1></a>
            
        </div>
    )
}





