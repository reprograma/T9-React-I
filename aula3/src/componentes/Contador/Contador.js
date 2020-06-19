import React, { Component } from 'react';
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
        this.setState((state) => ({
            numero: state.numero -1
        }))
    }

    render() {
        return (
            <div className="container-contador">
                <button className="button-menos" onClick={this.diminuir}> - </button>
                <p className="numero"> {this.state.numero} </p>
                <button className="button-mais" onClick={this.aumentar}> + </button>
            </div>
        )
    }
}
export default Contador;

