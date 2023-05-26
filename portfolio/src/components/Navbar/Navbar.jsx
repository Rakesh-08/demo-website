import react from "react";
import "./Navbar.css";
import NavItem from "./NavItem/NavItem";

export default function Navbar() {
  return (
      <div className="navbar">
          <div className="navLogo">
              <img className='profileImg' src="../../../resource/Signature.jpeg"/>
          </div>
      <div className="navHeadings">
        <NavItem heading="Home" />
        <NavItem heading="About" />
        <NavItem heading="Projects" />
        <NavItem heading="Tech-Stack" />
      </div>
    </div>
  );
}
