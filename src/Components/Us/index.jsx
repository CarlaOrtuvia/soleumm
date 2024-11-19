import React from "react";

import Card from 'react-bootstrap/Card';

export const Us = () =>{
    return (
        <Card className="icon-card" style={{
            marginLeft: "35px",
            marginTop: "45px",
            backdropFilter:" blur(6px) brightness(1.2)", 
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
           
             }}>
        <Card.Header as="h5"> 
        <img
    src="/images/8-removebg-preview.png"
    alt= "icon-image"
    style={{ width: "60px", height: "60px" }}/><h4>NOSOTROS</h4>
  </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text style={{marginRight:"15px", color:"#D0E8C5"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
}
export default Us