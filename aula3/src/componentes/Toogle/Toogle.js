import React, { Component } from 'react';

class toogle extends Component {
    constructor() {
        super();
        this.state = {
            visivel: false
        }
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.setState({ visivel: !this.state.visivel })}> toogle </button>
                </div>


                {this.state.visivel && <div>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            Contato
                        </li>
                        <li>
                            Sobre
                        </li>
                    </ul>
                </div>
                }
            </div>
        );
    }

}
export default toogle;