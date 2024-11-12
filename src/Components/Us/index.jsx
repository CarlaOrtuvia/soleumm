import React from "react";

import Card from 'react-bootstrap/Card';

export const Us = () =>{
    return (
        <Card className="icon-card" style={{
            margin: "0 auto",
            backdropFilter:" blur(6px) brightness(1.2)", 
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
           
             }}>
        <Card.Header as="h5"> 
        <img
    src="/images/8-removebg-preview.png"
    alt= "icon-image"
    style={{ width: "30px", height: "30px" }}/>
  </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          
        </Card.Body>
      </Card>
    );
}
export default Us