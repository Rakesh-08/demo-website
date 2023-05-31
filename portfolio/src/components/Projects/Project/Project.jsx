import react from "react";
import "./Project.css";

export default function Project({ name, link }) {
  return (
    <div >
          <a href={link} target="_blank">
              <div className="singleProject">
                  {name}
              </div>
      </a>
    </div>
  );
}
