import react,{useState} from "react";
import "./NavigationBtn.css";

export default function NavigationBtn({ link,windowProps }) {
    let { currentPage, navigateTo } = windowProps;
    
   
    return (
        <div className={`btnCover ${currentPage.includes(link) && "activeBorder"}`}>
            
        <button onClick={()=>navigateTo(link)} className={`navBtn ${ currentPage.includes(link)&& "active"}`}>
               
        </button> </div>
    )
    
}
