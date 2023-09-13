import react from "react";
import "./Navbar.css";
import NavItem from "./NavItem/NavItem";

export default function Navbar({windowProps}) {
  return (
    <div className="navbar">
      <div className="navLogo">
        <img
          className="navImg"
          src="https://www.pngitem.com/pimgs/m/376-3763008_royal-mavericks-rm-logo-png-transparent-png.png"
        />
      </div>
      <div className="navHeadings">
        <NavItem windowProp={windowProps} heading="Home" id="#home" />
        <NavItem windowProp={windowProps} heading="About" id="#about" />
        <NavItem windowProp={windowProps} heading="Projects" id="#projects" />
        <NavItem
          windowProp={windowProps}
          heading="Tech-Stack"
          id="#techStack"
        />
      </div>
    </div>
  );
}
