import React from "react";
import {
  GAME_STATE_IDLE,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "../Constants";

const Header = ({ currentPlayer, winPlayer, gameState }) => {
  const renderLabel = () => {
    switch (gameState) {
      //case GAME_STATE_IDLE:

      case GAME_STATE_PLAYING:
        return `Player ${currentPlayer} Turn`;

      case GAME_STATE_WIN:
        return `Player ${winPlayer} Wins!`;

      case GAME_STATE_DRAW:
        return `Game Drawn 😕`;

      default:
        return "Welcome to Connect 4!";
    }
  };
  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;
