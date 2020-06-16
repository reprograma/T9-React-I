import React from 'react';

function Button(props) {
    // const props = {
    //     clicar: () => {},
    //     texto: ''
    // }
    return (
       <button onClick={props.clicar}> {props.texto}  </button>
    // <button onClick={() => alert('')}> Clique aqui </button>
    ); 
}
export default Button;
