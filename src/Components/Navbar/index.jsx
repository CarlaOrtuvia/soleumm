import React from "react";
import { NavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Barnav() {
    return (
      <>
       <Navbar>
        <Container className="d-flex align-items-center" style={{backgroundColor: "transparent"}}>
        <Navbar.Brand className="d-flex align-items-center">
        <NavLink to="/" style={{ textDecoration: "none", display:"flex",alignItems: "center"  }}>
            <img
              alt=""
              src="/images/8-removebg-preview.png"
              width="120"
              height="120"
              className="d-inline-block align-top" 
              style={{marginTop:"20px"}}
            />{' '}
           <span style={{ color: "#FFF5E4", fontWeight: "bold", fontSize: "1.2em", marginLeft:"10px" }}> SOLUCIONES AMBIENTALES</span>
           </NavLink>
          </Navbar.Brand>
          <Nav className="ml-auto d-flex align-items-center"style={{marginTop:"20px"}}>
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
    color: "#FFF5E4",  
    fontWeight: "bold",
    fontSize: "1.2em",    
   textDecoration: "none",
   marginLeft: "0 20px" // Elimina el subrayado
  };
  
  
  export default Barnav;