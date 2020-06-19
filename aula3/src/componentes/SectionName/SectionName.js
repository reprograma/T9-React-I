import React from 'react';

function SectionName() {
    let valor = "digite algo";
    return (
        <div>
            <input onChange={(event) => console.log(event.target.value)}></input>
            <p>{valor}</p>
        </div>
    )
}

export default SectionName;