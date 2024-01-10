import React from 'react'
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";



function Sidebar({ show, setShow,children }) {
    let handleClose = () => {
    setShow(false)
    }
    

  return (
    <>
          <Offcanvas style={{height:"9em",background:"black",fontFamily:"Times"}}  className="sidebar  "  show={show} onHide={handleClose} placement="top">
          <Offcanvas.Header  ><Button onClick={handleClose} style={{background:"transparent",border:0,outline:"none",color:"darkGray", fontSize:"1.4em",cursor:"pointer"}}>x</Button></Offcanvas.Header>
        <Offcanvas.Body>
                   {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar

