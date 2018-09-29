import React from "react";
import "../App.css";

const Square=props=>{
    return(
        <button className ="square" onClick={props.markSquare}>
        {props.value}
        </button>
    );
};

export default Square;