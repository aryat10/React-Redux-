import React from "react";
import { UseSelector, useSelector } from "react-redux";
import './Image.css'

const Counter = () =>{
    const count = useSelector(state=>state)
    return (
        <div>
        <h2>{count}</h2>
    </div>
    )
    
}

export default Counter;