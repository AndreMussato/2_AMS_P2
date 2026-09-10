import React from "react";

import './StartScreen.css';

//Cria o componente StartScreen (Tela Inicial)
//Recebe através das props:
//startGame = iniciar jogo
function StartScreen({ startGame }) {
    return (
        <>
        <div className="start">

            <h1>Secret Word</h1>

            <p>Clique no botão abaixo para começar a jogar</p>

            {/* onClick é um evento executado quando o
            usuário clica no botão.
            
            startGame é uma função criada no App.jsx
            e recebida neste componente através das props.
            
            Não utilizamos startGame() aqui, pois queremos
            que a função seja executada somente após o clique. */}
            <button onClick={startGame}>
                Começar o Jogo
            </button>
        </div>
        </>
    )
}

export default StartScreen;