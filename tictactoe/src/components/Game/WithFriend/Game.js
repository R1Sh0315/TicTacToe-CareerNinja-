import React, { useState } from "react";
import { calculateWinner } from "../Helper";
import Board from "./Board";
import SetBtn from "./SetBtn";
import '../style.css';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);     //by default it will be X
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  // const jumpTo = (step) => {
  //   setStepNumber(step);
  //   setXisNext(step % 2 === 0);
  // };

  // const renderMoves = () =>
  //   history.map((_step, move) => {
  //     const destination = move ? `Go to move #${move}` : "Go to Start";
  //     return (
  //       <li key={move}>
  //         <button onClick={() => jumpTo(move)}>{destination}</button>
  //       </li>
  //     );
  //   });

  return (
    <div className="container">

      <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
     
      <div className="info-wrapper">
        <div>
        <Board squares={history[stepNumber]} onClick={handleClick} />
        </div>
      </div>
      <SetBtn />
    </div>
  );
};

export default Game;