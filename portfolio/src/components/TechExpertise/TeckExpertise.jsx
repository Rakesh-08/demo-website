import react from "react";
import "./TechExpertise.css";
import Tech from "./Tech/Tech";
import techStack from "../../../output/static/constants";

export default function TechExpertise() {
  const { techImages } = techStack;

  return (
    <div className="techStack" id="techStack">
      <div>
        <h2 className="techTitle fs-4">{"< Tech-Stack />" }</h2>
        <div className="techIntro">
         At first , I  learned  HTML , CSS and Javascript then i continued to learn some other new technologies such as  nodejs , expressjs , jest , mysql , mongodb , react , redux and bootstrap  and still a lot to  add ....
        </div>
      </div>

      <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        <div className="techContainer">
        {techImages.map((tech, i) => (
          <Tech key={i} url={tech?.link} docs={tech?.documentaion} />
        ))}
      </div></div>
     
    </div>
  );
}
