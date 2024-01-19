import React from "react"
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import NavigationBtn from "../NavigationBtn/NavigationBtn";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="welcomeMsg">
        <marquee direction="right" behavior="alternate" scrollDelay={65}>
          {" "}
          <h3 className="display-4 ">
            <span className="firstN">Rakesh</span>
            <span className="lastN"> Mandal</span>
          </h3>
        </marquee>
      </div>
      <div className="homeContainer mx-2">
        <div className="homeRight my-3 ">
          <img
            className="profileImg "
            src="/profile Img.png"
            alt="profile_pic"
          />
        </div>

        <div className="homeLeft mx-2">
          <div>
            <p>
              <span style={{ color: "orange", lineHeight: "3em" }}>
                Hello everyone,
              </span>
              <br />I am a Web developer with a great interest for new
              Technologies. I have experise in javascript, nodejs ,
              expressjs,mongoDB , redux and reactjs . I have created and
              deployed several full stack projects and now I want to get started
              in this industry and sharpen my skills by collaborating with
              industry experts in the creation of real-life technical products.
            </p>

            <div className="my-5">
              <span
                style={{ background: "linear-gradient(90deg,black 40%,green)" }}
                className="fst-italic fs-5 p-2 rounded  "
              >
                connect with me @{" "}
              </span>
              <div className="socialChannels my-4">
                <div className="media">
                  <a
                    href="https://www.instagram.com/rakesh_mandal080499/"
                    target="_blank"
                  >
                    <InstagramIcon className="icon" />
                  </a>
                </div>

                <div className="media">
                  <a
                    href="https://www.facebook.com/profile.php?id=100009636102737"
                    target="_blank"
                  >
                    <FacebookIcon className="icon" />
                  </a>
                </div>

                <div className="media">
                  <a
                    href="https://www.linkedin.com/in/rakesh-mandal-27b809193"
                    target="_blank"
                  >
                    <LinkedInIcon className="icon" />
                  </a>
                </div>

                <div className="media">
                  <a href="https://github.com/Rakesh-08" target="_blank">
                    <GitHubIcon className="icon" />
                  </a>
                </div>
                <div className="media">
                  <a
                    href="https://www.youtube.com/channel/UCFQz6AUsISAJOCMwWYxVSGA"
                    target="_blank"
                  >
                    <YouTubeIcon className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
