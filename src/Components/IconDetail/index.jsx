import React from "react";

import Card from 'react-bootstrap/Card';
import "./IconDetail.css";


export const IconDetail = ({ data }) =>{
    return (
        <Card className="icon-card" style={{
            margin: "0 auto",
            backdropFilter:" blur(6px) brightness(1.2)", 
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
           
             }}>
        <Card.Header as="h5"> <img
    src={data.image}
    alt= "icon-image"
    style={{ width: "30px", height: "30px" }} />
  </Card.Header>
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.text}</Card.Text>
          
        </Card.Body>
      </Card>
    );
}
export default IconDetail