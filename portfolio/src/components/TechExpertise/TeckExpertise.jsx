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
        <div>
          comment on the knowledge and description about the technologies known
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
