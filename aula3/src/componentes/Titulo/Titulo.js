import React from 'react';
import './Titulo.css';

function Titulo(props) {
    return (
        <h1 className="vermelho">
            {props.tituloPagina}
        </h1>
    )
}

export default Titulo;