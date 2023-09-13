import react from "react";
import "./Projects.css";
import Project from "./Project/Project";
import projects from "../../../output/static/projectLinks";


export default function Projects() {
   
    return (
        <div className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="projectsHeading">
            I have created these full stack apps and I have used react and redux to create the frontend part  and nodeJS , expressJS  for the backend part along with mongodb or mysql  database 
            </div>
        <div className="projectContainer">
          {projects.map((proj, index) => {
            return <Project key={index} name={proj.name} link={proj.link} poster={proj.poster} />;
          })}
            </div>
          
      </div>
    );
}

