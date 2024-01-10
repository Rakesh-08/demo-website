import React from 'react'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";



function Sidebar({ show, setShow,children }) {
    let handleClose = () => {
    setShow(false)
    }
    

  return (
    <>
          <Offcanvas  className="sidebar bg-dark h-25 "  show={show} onHide={handleClose} placement="top">
          <Offcanvas.Header ><Button onClick={handleClose} style={{background:"transparent",border:0,outline:"none",color:"darkGray", fontSize:"1.4em",cursor:"pointer"}}>x</Button></Offcanvas.Header>
        <Offcanvas.Body>
                   {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar

