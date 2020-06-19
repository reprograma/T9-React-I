import React, { Component } from 'react';
import Button from '../Button/Button';
import gato from '../../img/gato.jpg';
import cachorro from '../../img/cachorro.jpg';

class SecaoPets extends Component {
    constructor() {
        super();
        this.state = {
            imagem: ""
        }
    }

    alterarParaGato = () => {
        this.setState({ imagem: gato })
    }

    render() {
        return (
            <div>
                {this.state.imagem && <img src={this.state.imagem} alt="pet"></img>}

                <div>
                    <Button clique={this.alterarParaGato}
                    nome="gato"
                    classe="button-blue"
                    />
                    {/* <button onClick={
                        () => {
                            this.setState({ imagem: gato })
                        }
                    }> Gato </button> */}

                    <Button clique={() => {
                            this.setState({ imagem: cachorro })
                        }
                    }
                    classe="button-blue"
                    nome="Cachorro"/>

                    {/* <button onClick={
                        () => {
                            this.setState({ imagem: cachorro })
                        }
                    }> Cachorro </button> */}

                </div>
            </div>
        );
    }

}
export default SecaoPets;