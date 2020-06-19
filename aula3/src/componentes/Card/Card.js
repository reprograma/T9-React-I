import React from 'react';

// function Card(props){
//     return (
//         <div>
//             <img src={props.imagem} alt={props.alt}></img>
//             <h1>{props.titulo}</h1>
//             <p>{props.subtitulo}</p>
//         </div>
//     )
// }

class Card extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imagem} alt={this.props.alt}></img>
                <h1>{this.props.titulo}</h1>
                <p>{this.props.subtitulo}</p>
            </div>
        )
    }
}


export default Card;