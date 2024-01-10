import react from "react";
import "./About.css";
import Comment from "./Comment/Comment";


export default function About({windowProps}) {

  let content1 = "I always consider  pros and cons of any given problem while making my most of the decisions.";
  
  let content2 = " I was a quick learner from the beginning,I adapt to new things quite well and efficiently.";

  let content3 = "Some people might think searching for perfection is a wastage of time but for me its investment of time to get satisfactory outcome.";
    return (
      <div className="aboutMe" id='about'>
        <div className="break"></div>
        <div style={{fontSize:"1.4rem",margin:"1em", color:"pink"}}>
            Personal Info
         </div>
        <div className='commentsContainer'>
          <Comment title="Analytical thinking" content={content1} />
          <Comment title="Adaptive learner" content={content2} />
          <Comment title="Perfectionist" content={content3} />
        </div>
        <div className="cvFormContainer">
            <div className="cvPart">
            <h5 className="cvIntro"> Hey guys,  I am from delhi and i have done my schooling and degrees from delhi itself and I hold a masters degree in Economics from Delhi University .  To know more  , have a look over my resume below -</h5>
            <a href="/CV_SDE_Rakesh.pdf" target="_blank" className="resume"> RESUME </a>
        </div>
          <div className="form">
           
          <a href="#footer">
            <button className="msgMe p-2" onClick={()=>windowProps("#footer")}>Get In Touch</button>
          </a>
          
          </div>
        </div>
      </div>
    );
}
