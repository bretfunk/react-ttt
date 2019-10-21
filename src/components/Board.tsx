import React, { useState } from "react";
import { Square } from "./Square";

export const Board: React.FC = () => {
  const [array, setArray] = useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-"
  ]);
  const [xTurn, setXTurn] = useState(true);
  const handleClick = (num: number) => {
    setXTurn(!xTurn);
    const newArray = array;
    newArray[num] = xTurn ? "X" : "O";
    setArray(newArray);
  };

  return (
    <div className="text-3xl">
      <h1>{xTurn ? "X" : "O"}'s Turn</h1>
      <div className="md:flex">
        <Square
          value={array[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={array[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={array[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="md:flex">
        <Square
          value={array[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={array[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={array[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="md:flex">
        <Square
          value={array[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={array[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={array[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
};
