import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import "./Footer.css"

function Footer() {
    return (

        <Navbar className="footer fixed-bottom">
        <div className="footer-content">
          <Navbar.Brand href="#home">
            <img
              src="/images/instagram.svg"
              width="30"
              height="30"
              className="social-icon"
              alt="Instagram"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src="/images/whatsapp (2).svg"
              width="30"
              height="30"
              className="social-icon"
              alt="Facebook"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img
              src="/images/linkedin.svg"
              width="30"
              height="30"
              className="social-icon"
              alt="LinkedIn"
            />
          </Navbar.Brand>
        </div>
      </Navbar>
      
      
        
        
        
        
        
        
        
    
        
    );
}
 export default Footer;