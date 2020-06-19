import React from 'react';

class SectionNameClass extends React.Component {
    //inicializa os valores da nossa classe
    constructor(props) {
        super(props);
        //o state é um objeto onde armazenamos as variaveis que desejamos que se atualizem bi html
        this.state = {
            valor: ""
        }
    }

    //funcao para capturar o valor do input
    pegaValorInput = (event) => {
        //variaval para armazenar o value do input
        let input = event.target.value;

        //ao executar o setState, o state é atualizado e o render é rodado novamente, entao o html chama o state novamente e tem o seu valor atualizado
        this.setState({
            valor: input
        })
    }
    
    render() {
        return (
            <div>
                <input onChange={this.pegaValorInput}></input>
                <p>{this.state.valor}</p>
            </div>
        );
    }
}

export default SectionNameClass;