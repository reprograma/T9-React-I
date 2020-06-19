import React from 'react';

function Input(props) {
    console.log(props)
    return (
        <>
            <input type={props.tipo}></input>
        </>
    )
}
export default Input;