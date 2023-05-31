import react from "react";
import "./About.css";
import Comment from "./Comment/Comment";


export default function About({windowProps}) {

  let content1 = "we should always consider the pros and cons of any given problem while making decisions it helps us to make insightful decisions .";
  let content2 = "";
  let content3 = "";
    return (
      <div className="aboutMe" id='about'>
        <div className="break"></div>
        <div className='commentsContainer'>
          <Comment title="Analytical thinking" content={content1} />
          <Comment title="Adaptive learner" content={content2} />
          <Comment title="Perfectionist" content={content3} />
        </div>
        <div className="cvFormContainer">
            <div className="cvPart">
            <h5 className="cvIntro">  I  am from delhi and i have done my schooling and degrees from delhi itself. I hold a masters degree in Economics from Delhi University .  To know more , have a look over my resume-</h5>
            <a href="../../../resource/Rakesh kumar Mandal (1).pdf" target="_blank" className="resume"> RESUME </a>
        </div>
          <div className="form">
           
          <a href="#footer">
            <button className="msgMe" onClick={()=>windowProps("#footer")}>Drop a message</button>
          </a>
          
          </div>
        </div>
      </div>
    );
}
