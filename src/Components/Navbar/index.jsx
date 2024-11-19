import React from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./BarNav.css";

function Barnav() {
    return (
      <>
       <Navbar className="navbar-general" style={{ backgroundColor: "transparent"}}>
        <Container className="navbar-container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Navbar.Brand className="d-flex aling-items-center">
        <NavLink to="/" style={{ textDecoration: "none", alignItems: "center", display: "flex", marginLeft:"15px" }}>
            <img
              alt=""
              src="/images/8-removebg-preview.png"
              width="130"
              height="130"
              //className="d-inline-block" 
              
            />{' '}
           <span style={{ color: "#DCE4C9", fontWeight: "bold", fontSize: "25px", marginLeft:"10px", display:"flex", justifyContent:"space-between" }}> SOLUCIONES AMBIENTALES</span>
           </NavLink>
          </Navbar.Brand>
          <Nav style={{ display:"flex", justifyContent:"flex-end", alignItems: "start"}}>
            <NavLink to="/" style={ linkStyle }>INICIO</NavLink>
            <NavLink to="/Nosotros"style={ linkStyle }>NOSOTROS</NavLink>
            <NavLink to= "/Contacto" style={ linkStyle }>CONTACTO</NavLink>
          </Nav>
        </Container>
      </Navbar>
      
       </>
    );
  }

  const linkStyle = {
    color: "#D0E8C5",  
    fontWeight: "bold",
    fontSize: "1.2em",    
   textDecoration: "none",
     marginLeft:"35px", 
    
   
  };
  
  
  export default Barnav;