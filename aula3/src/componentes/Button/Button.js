import React from 'react';
import './Button.css';

const Button = props => (
 <button className={props.classe}  onClick={props.clique} > {props.nome} </button>
)
export default Button;