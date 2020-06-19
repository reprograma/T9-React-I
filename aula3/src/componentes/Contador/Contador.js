import React, { Component } from 'react';
import Button from '../Button/Button';

import './Contador.css';

class Contador extends Component {
    constructor() {
        super();
        this.state = {
            numero: 0
        }
    }

    aumentar = () => {
        this.setState((estado) => ({
            numero: estado.numero + 1
        }))

       
    }

    diminuir = () => {
        this.setState((estado) => ({
            numero: estado.numero - 1
        }))
    }

    render() {
        return (
            <div className="container-contador">

                <Button nome="-" clique={this.diminuir} classe="button-menos" />

                {/* <button className="button-menos"
                    onClick={this.diminuir} > - </button> */}

                <p className="numero"> {this.state.numero} </p>
                {/* <button className="button-mais"
                    onClick={this.aumentar} > + </button> */}

                <Button nome="" clique={this.aumentar} classe="button-mais" />


            </div>
        )
    }
}
export default Contador;

