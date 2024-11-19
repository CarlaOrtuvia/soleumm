import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contact.css"

export const Contact = () =>{
    return (
        <Card className="icon-card" style={{
          margin:"60px",
            backdropFilter:" blur(6px) brightness(1.2)", 
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            width:"660px",
            height:"380px"
           
             }}>
        <Card.Header className="card-header"> 
        <img
    src="/images/8-removebg-preview.png"
    alt= "icon-image"
    style={{ width: "60px", height: "60px" }}/><h4 style={{color:"#D0E8C5"}}>CONTACTO</h4>
  </Card.Header>
        <Card.Body className="card.body">        
          <Card.Text className="card-text">
            <div>
              <h4>NUESTROS MEDIOS DE CONTACTO</h4>
            </div>
            <div style={{marginLeft: "30px"}}>
            <Form className="form-container">
      <Form.Group className=" ml-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Nunca compartiremos tu email con otra persona
        </Form.Text>
      </Form.Group>
      <Form.Group className=" ml-3" controlId="formBasicPassword">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>     
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
            </div>
            <div style={{marginLeft:"20px", marginTop:"5px"}}>
              <h5>Tambien puedes contactarnos en a travéz de nuestras redes sociales</h5>
              <h6>Al email: VALERIABRAVO@GMAIL.COM
                 </h6>
            </div>

          </Card.Text>
          
        </Card.Body>
      </Card>
    );
}
export default Contact