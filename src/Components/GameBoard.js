import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw, getComputerMove } from "../helper";
import {
  NUM_OF_CIRCLES,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  GAME_STATE_IDLE,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "../Constants";
import "../Game.css";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    console.log("init game");
    setGameBoard(Array(16).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
    setGameState(GAME_STATE_PLAYING);
    setWinPlayer(NO_PLAYER);
  };

  const initBoard = () => {
    const circles = [];

    for (let i = 0; i < NUM_OF_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }

    return circles;
  };

  const suggestMove = () => {
    circleClicked(getComputerMove(gameBoard));
  };

  const circleClicked = (id) => {
    if (gameBoard[id] || gameState !== GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
    }

    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });
    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    console.log(gameBoard);
    console.log(`It is now player ${currentPlayer} turn`);
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };

  return (
    <>
      <Header
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
        gameState={gameState}
      />
      <div className="gameBoard">{initBoard()}</div>
      <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} />
    </>
  );
};

export default GameBoard;
