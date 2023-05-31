import react from "react";
import "./Projects.css";
import Project from "./Project/Project";
import projects from "../../../resource/projectLinks";


export default function Projects() {
   
    return (
        <div className="projects" id="projects">
            <h2>My Projects</h2>
            <div>
                technologies used
            </div>
        <div className="projectContainer">
          {projects.map((proj, index) => {
            return <Project key={index} name={proj.name} link={proj.link} />;
          })}
            </div>
          
      </div>
    );
}

