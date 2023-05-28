import react from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home" id='home'>
      <div className="welcomeMsg">
        <h4><span>Software</span>
            <span> Development</span></h4>
      </div>
      <div className="homeContainer">
        <div className="homeLeft">
          <img
            className="profileImg"
            src="../../../resource/Profile-pic (1).jpeg"
            alt="profile_pic"
          />
        </div>
        <div className="homeRight">
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          repellat natus adipisci consequuntur deleniti eius itaque temporibus
          laboriosam culpa non neque maiores exercitationem saepe facere
            corrupti blanditiis sint laborum recusandae.
            </p>
          <br/><br/>

          -@Rakesh Mandal
        </div>
      </div>
    
    </div>
  );
}
