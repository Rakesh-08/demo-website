import react from "react";
import "./Projects.css";
import Project from "./Project/Project";
import projects from "../../../output/static/projectLinks";


export default function Projects() {
   
    return (
        <div className="projects" id="projects">
            <h2 className="my-5 fs-4">{"< My Projects />"}</h2>
        <div className="projectsHeading">
          <p style={{color:"rgb(222,288,233)"}}>
             I have created these applications with the help of MERN stack technologies such that frontend is being created using javascript ,reactjs,redux and bootstrap while backend is being built upon nodejs,expressjs and MongoDB.
          </p>
            
            </div>
        <div className="projectContainer  row">
          <div className="d-flex flex-wrap col-md-12 ">
             {projects.map((proj, index) => {
            return <Project key={index} name={proj.name} link={proj.link} poster={proj.poster} />;
          })}
          </div>
         
            </div>
          
      </div>
    );
}

