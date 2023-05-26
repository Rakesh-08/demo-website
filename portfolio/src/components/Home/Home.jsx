import react from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="welcomeMsg">
        <h4>Rakesh Mandal</h4>
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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          repellat natus adipisci consequuntur deleniti eius itaque temporibus
          laboriosam culpa non neque maiores exercitationem saepe facere
          corrupti blanditiis sint laborum recusandae.
        </div>
      </div>
    
    </div>
  );
}
