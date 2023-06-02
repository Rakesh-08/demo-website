import react from "react";
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavigationBtn from "../NavigationBtn/NavigationBtn";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="welcomeMsg">
        <h3>
          <span className='firstN'>Rakesh</span>
          <span className="lastN">   Mandal</span>  
      </h3>
        
      </div>
      <div className="homeContainer">
        <div className="homeLeft">
          <p className="intro">
            <span style={{color:"orange" ,lineHeight:"3em"}}>Hello everyone,</span>
            <br/>
             I am an aspiring software developer with a keen interest for the  new technologies and having expertise in mainly  javascript, nodejs , expressjs , react and redux etc . I hope  i could  deliver my best to the oppotuinities i will get along  my  journey.
          </p>
          <br />
          <br />

            <h4 className="connect">connect with me @ </h4>
          <div className="socialChannels">
            
            <a
              href="https://www.instagram.com/rakesh_mandal080499/"
              target="_blank"
            >
              
              <InstagramIcon fontSize="large" className="icon" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100009636102737"
              target="_blank"
            >
              <FacebookIcon fontSize="large" className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/rakesh-mandal-27b809193"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" className="icon" />
            </a>

            <a href="https://github.com/Rakesh-08" target="_blank">
              <GitHubIcon fontSize="large" className="icon" />
            </a>
          </div>
        </div>
        <div className="homeRight">
          <img
            className="profileImg"
            src="../../../output/static/Profile-pic (1).jpeg"
            alt="profile_pic"
          />
        </div>
      </div>
    </div>
  );
}
