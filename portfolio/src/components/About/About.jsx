import react from "react";
import "./About.css";
import Comment from "./Comment/Comment";


export default function About() {
    return (
      <div className="aboutMe">
        <div className="break"></div>
        <div>
          <Comment content="comment1" />
          <Comment content="comment2" />
          <Comment content="comment3" />
            </div>
            <div>
                
            </div>
      </div>
    );
}
