import react from "react";
import "./Navbar.css";
import NavItem from "./NavItem/NavItem";

export default function Navbar() {
  return (
      <div className="navbar">
          <div className="navLogo">
              <img className='navImg' src="../../../resource/Signature.jpeg"/>
          </div>
      <div className="navHeadings">
        <NavItem heading="Home" id='#home' />
        <NavItem heading="About" id='#about' />
        <NavItem heading="Projects" id='#projects' />
        <NavItem heading="Tech-Stack" id='#techStack' />
      </div>
    </div>
  );
}
