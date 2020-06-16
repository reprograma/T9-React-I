import React from 'react';
import Button from '../../componentes/Button/Button';
import BemVinda from '../../componentes/BemVinda/BemVinda';
import './Home.css';
import imagemGoogle from '../../img/google.png';

function Home() {
    const cliqueBotao = () => {
        alert('oi')
    }
    return (
        <div className="centro">
            <img src={imagemGoogle} alt="google" />
            <input type="text" />
            <div>
                <Button
                 clicar={cliqueBotao} 
                 texto="Diga oi"/>
                <Button 
                clicar={() => alert('tchau')}
                texto="Diga tchau"/>
            </div>
            {/* <BemVinda 
            nome="Bruna"
            cidade="Guarulhos"
            />
            <BemVinda 
            cidade="Rio"
            nome="Nina"/>
            <BemVinda
            cidade="São Paulo"
            nome="Jani"
            /> */}
            

        </div>
    );
}
export default Home;