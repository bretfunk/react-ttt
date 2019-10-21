import React from "react";
import { Board } from "./Board";

export const Game: React.FC = () => {
  return (
    <div className="bg-blue-400 text-center">
      <div style={{ height: "10px" }} />
      <div className="bg-red-500 text-blue-700 font-bold border-8 border-black text-6xl text-center m-5 p-2">
        Tic Tac Toe
      </div>
      <div style={{ height: "20px" }} />
      <Board />
      <div style={{ height: "300px" }} />
    </div>
  );
};
