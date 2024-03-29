import react from "react";
import "./Project.css";

export default function Project({ name, link, poster }) {
  
  return (
    <div style={{ margin: "0.4em",minWdth:"20em"}}>
      <a href={link} target="_blank">
        <div className="singleProject ">
          <img
            style={{ height: "100%", width: "100%",borderRadius:"1em",border:"1px solid " }}
            src={poster}
            alt="poster"
          />
        </div> 
      </a>
      <p className="projectName">{name}</p>
    </div>
  );
}
