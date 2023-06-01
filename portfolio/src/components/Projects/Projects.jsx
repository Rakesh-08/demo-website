import react from "react";
import "./Projects.css";
import Project from "./Project/Project";
import projects from "../../../resource/projectLinks";


export default function Projects() {
   
    return (
        <div className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="projectsHeading">
            To create these full stack apps , I have used react and redux for the frontend  and nodeJS , expressJS  for the backend part along with mongodb or mysql  database 
            </div>
        <div className="projectContainer">
          {projects.map((proj, index) => {
            return <Project key={index} name={proj.name} link={proj.link} />;
          })}
            </div>
          
      </div>
    );
}

