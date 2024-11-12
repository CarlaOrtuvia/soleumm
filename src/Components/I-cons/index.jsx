import React from "react";
import { Link } from "react-router-dom";

import "./Icons.css";

const Icons = ({ info }) => {
    if (!info) {
        return null; 
    }
    return(
        <div className="icons-container">
<div className="icon-content"> 
    <Link to= {`/detalle/${info.id}`} className="icon-link" >

    <div className="circle-background">
        <img
        src= {info.image} 
        alt= "Icon" 
        className="icon-image" 
        />
    </div>
   <div className="title-icon">
    <h5>{info.title}</h5>
   </div>
   </Link>
</div>

</div>
    )
}
export default Icons