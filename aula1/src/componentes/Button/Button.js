import React from 'react';

function Button(props) {
    // const props = {
    //     clicar: () => {},
    //     texto: ''
    // }

    return (
    <button onClick={props.clique}> {props.texto}  </button>
   // <button onClick={() => alert('oi')}> Clique aqui </button>
    ); 
}
export default Button;
