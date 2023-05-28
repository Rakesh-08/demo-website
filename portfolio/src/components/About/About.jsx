import react from "react";
import "./About.css";
import Comment from "./Comment/Comment";


export default function About() {
    return (
      <div className="aboutMe" id='about'>
        <div className="break"></div>
        <div className='commentsContainer'>
          <Comment content="comment1" />
          <Comment content="comment2" />
          <Comment content="comment3" />
            </div>
            <div>
                this part could contain my cv and whatsapp
            </div>
      </div>
    );
}
