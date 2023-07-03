import React from "react";
import "./App.css";
import { Board } from "./components/Board";
import { GameProvider } from "./contexts/useGame.context";

function App() {
  return (
    <div className="app">
      <GameProvider>
        <Board />
      </GameProvider>
    </div>
  );
}

export default App;
