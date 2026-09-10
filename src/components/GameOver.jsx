import React from "react";

import './GameOver.css';

//Cria o componente GameOver (Fim do Jogo)
//Recebe duas propriedades (props) do App.jsx
//retry = tentar novamente/reiniciar
//score = pontuação
function GameOver({ retry, score }) {
    return (
        <>
            <h1>Game Over</h1>

            {/* Exibe o valor da variável score utilizando
            interpolação do JavaScript dentro do JSX */}
            <h2>
                A sua pontuação foi: <span>{score}</span>
            </h2>

            {/* O evento onClick executa a função retry
            quando o usuário clicar no botão.
            
            A função retry foi criada no App.jsx e 
            recebida neste componente através das props. */}
            <button onClick={retry}>
                Resetar Jogo
            </button>
        </>
    )
}

export default GameOver