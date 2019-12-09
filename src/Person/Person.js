import React from 'react'
import './Person.css';

const person = (props) => {
    return(
           <div className = "Person">
            <p onClick={props.click}>Hey Man I'm {props.name} and I am {props.age} Years Old</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
           </div>
    )
}; 

export default person;