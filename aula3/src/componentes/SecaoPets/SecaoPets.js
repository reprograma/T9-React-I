import React, { Component } from 'react';
import gato from '../../img/gato.jpg';
import cachorro from '../../img/cachorro.jpg';

class SecaoPets extends Component {
    constructor() {
        super();
        this.state = {
            imagem: ""
        }
    }

    render() {
        return (
            <div>


              { this.state.imagem && <img src={this.state.imagem} alt="pet"></img>}

                <div>
                    <button onClick={
                        () => {
                            this.setState({ imagem: gato })
                        }
                    }> Gato </button>

                    <button onClick={
                        () => {
                            this.setState({ imagem: cachorro })
                        }
                    }> Cachorro </button>

                </div>
            </div>
        );
    }

}
export default SecaoPets;