import React from "react";

import './App.css'

//Importa Hooks do React:
//useState = Cria estados que podem ser alterados
//useEffect = executa uma ação quando determinados estados mudam
//useCallback = memoriza uma função para evitar que ela seja recriada
//desnecessariamente a cada renderização
import { useCallback, useEffect, useState } from "react";


//Importa a lista de palavras utilizada no jogo
import { wordsList } from './data/words';

//Importa os componentes utilizados na aplicação
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//Define as etapas do jogo:
//start = inicio
//game = jogo
//end = fim
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

//Quantidade inicial de tentativas
//guessesQty = quantidade de tentativas
const guessesQty = 5;

function App() {

  /* gameStage = etapa atual do jogo 
  setGameStage = altera a etapa atual
  O jogo começa na etapa "start". */
  const [gameStage, setGameStage] = useState(stages[0].name);

  /* words = palavra disponível no jog
  Recebe inicialmente o conteúdo de wordsList. */
  const [words] = useState(wordsList);

  /* pickedWord = palavra sorteada
  setPickedWord = altera a palavra sorteada */
  const [pickedWord, setPickedWord] = useState("");

  /* pickedCategory = categoria sorteada
  setPickedCategory = altera a categoria sorteada */
  const [pickedCategory, setPickedCategory] = useState("");

  /* letters = array contendo cada letra da palavra sorteada
  setLetters = altera esse array */
  const [letters, setLetters] = useState([]);

  /* guessedLetters = letras corretas já advinhadas
  wrongLetters = letras erradas já digitadas */
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  /* guesses = quantidade de tentativas restantes
  Começa com o valor definido em guessesQty. */
  const [guesses, setGuesses] = useState(guessesQty);

  /* score = pontuação atual do jogador */
  const [score, setScore] = useState(0);

  /* pickWordAndCategory = escolher palavra e categoria
  useCallback memoriza a função e só cria uma nova
  versão caso o valor de "words" seja alterado. */
  const pickWordAndCategory = useCallback(() => {

    /* Object.keys() retorna um array contendo todas as chaves
    do objeto words.
    Exemplo:
    {
      carro: [...],
      fruta: [...]
    }
      será transformado em:
      ["carro", "fruta"] */
    const categories = Object.keys(words);


    /* Math.random() gera um número aleatório entre 0 e 1.
    Math.floor() remove as casas decimais.
    Dessa forma, uma posição aleatório do array  de categorias
    é escolhida. */
    const category =
      categories[
      Math.floor(
        Math.random() * Object.keys(categories).length
      )
      ];

    console.log(category);

    /* Escolhe uma palavra aleatória dentro da categoria selecionada. */
    const word =
      words[category][
      Math.floor(
        Math.random() * words[category].length
      )
      ];

      console.log(word);

      //Retorna a palavra e a categoria escolhidas
      return { word, category }
  }, [words]);

  /* startGame = iniciar jogo
  useCallback evita que a função seja recriada
  desnecessariamente a cada renderização. */
  const startGame = useCallback(() => {

    //Limpa as letras utilizadas na rodada anterior
    clearLetterStates();

    //Recebe a palavra e a categoria sorteadas
    const { word, category } = pickWordAndCategory();

    /* split("") transforma uma palavra em um array.
    Exemplos: "React"
    vira: ["R", "e", "a", "c", "t"] */
    let wordLetters = word.split("");

    /* map() percorre cada letra do array.
    toLowerCase() transforma todas as letras em minúsculas
    para facilitar as comparações. */
    wordLetters = wordLetters.map(
      (l) => l.toLowerCase()
    );

    console.log(word, category);
    console.log(wordLetters);

    //Preenche os estados com os dados sorteados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    //Altera a etapa do jogo para "game"
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  
  /* verifyLetter = verificar letra
  Recebe a letra digitada pelo usuário */
  const verifyLetter = (letter) => {
    /* normalizedLetter = letra normalizada
    Converte a letra digitada para maiuscula
    para evitar diferença entre, por exemplo:
    "A" e "a" */
    const normalizedLetter = letter.toLowerCase();

    /* includes() verifica se determinado valor
    já existe dentro de um array.
    Se a letra já fpi utilizada, a função
    é interrompida pelo return */
  }

  return (
    <>
    </>
  )
}

export default App