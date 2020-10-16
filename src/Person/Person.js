import React from 'react';
import './person.css';
import styled from 'styled-components';
 const Person = (props) => {
 return(
 
 <div className="person">
     <p>I am {props.name} and I am a {props.age} years old </p>
 <p>{props.children}</p>
 </div>

 )
};
export default Person;