import react, { useState } from "react";
import "./Navbar.css";
import NavItem from "./NavItem/NavItem";
import Sidebar from "./sidebar";

export default function Navbar({ windowProps }) {
  let [show, setShow] = useState(false);
  return (
    <div className="navbar">
      <div className="navLogo">
        <img
          className="rounded-circle"
          height={45}
          src="https://www.pngitem.com/pimgs/m/376-3763008_royal-mavericks-rm-logo-png-transparent-png.png"
        />
      </div>

      <NavItems windowProps={windowProps} />
      <div className="sidebar mx-2">
        <img
          onClick={() => setShow(true)}
          src="/more.png"
          alt="moreIcon"
          width={25}
        />
        <div>
          <Sidebar show={show} setShow={setShow}>
            <NavItems
              setShow={setShow}
              sidebar="sidebar"
              windowProps={windowProps}
            />
          </Sidebar>
        </div>
      </div>
    </div>
  );
}

let NavItems = ({ windowProps, sidebar, setShow }) => {
  let handleClose = () => {
    if (setShow) {
      setShow(false)
    }
    
  }
  return (
    <div className={`navHeadings ${!sidebar && "navitems"}`}>
      <NavItem
        windowProp={windowProps}
        handleClose={handleClose}
        heading="Home"
        id="#home"
      />
      <NavItem
        windowProp={windowProps}
        handleClose={handleClose}
        heading="About"
        id="#about"
      />
      <NavItem
        windowProp={windowProps}
        handleClose={handleClose}
        heading="Projects"
        id="#projects"
      />
      <NavItem
        windowProp={windowProps}
        handleClose={handleClose}
        heading="Tech-Stack"
        id="#techStack"
      />
    </div>
  );
};
