import react from "react";
import "./TechExpertise.css";
import Tech from "./Tech/Tech";
import techStack from "../../../resource/constants";

export default function TechExpertise() {
  const { techImages } = techStack;

  return (
    <div className="techStack" id="techStack">
      <div>
        <h2 className="techTitle">Tech - Stack</h2>
        <div className="techIntro">
         In the very first step , I had learnt  HTML , CSS and Javascript and then i have accumulated the knowledge of nodejs , expressjs , jest , mysql , mongodb , react , redux and bootstrap and still there is  a lot to add ....
        </div>
      </div>
      <div className="techContainer">
        {techImages.map((tech, i) => (
          <Tech key={i} url={tech?.link} docs={tech?.documentaion} />
        ))}
      </div>
    </div>
  );
}
