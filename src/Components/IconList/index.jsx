import React from "react";
import Icons from "../I-cons";
import { Row, Col } from "react-bootstrap";


const Iconlist = ({data = []}) => {
    return(
        <Row className="icons-container">
            {data.map(icon => (
                <Col key={icon.id} xs={12} sm={6} md={4} className="d-flex justify-content-center mb-4">
                    <Icons info={icon} />
                </Col>
            ))}
        </Row>
       /* data.map(icon => <Icons key={icon.id} info={icon}/>)*/
    )
}
export default Iconlist