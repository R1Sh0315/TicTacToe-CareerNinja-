import react, { useState } from 'react';
import Board from './Board';
import {calWinner} from '.'

const Game=()=>{
    const [History, setHistory]=useState( [Array(9).fill(null)] )
    const [stepNumber, setStepNumber]=useState(0);
    const [xIsNext, setXisNext]=useState(true);     //default X will start first
    const winner= calWinner(History[stepNumber]);
    const XO=xIsNext?"X":"O";       //<============== icon X and O

    
    const handleClick=(i)=>{
        const historyPoint=History.slice(0, stepNumber+1);
        const current =historyPoint[stepNumber];
        const square=[...current];

        if(winner || square[i] ) return;
        square[i]=XO;
        setHistory([...historyPoint, square]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);
    };

    const jumpTo=(move)=>{
        setStepNumber(step);
        setXisNext(step%2 ===0);
    }

    const renderMoves=()=>History.map((_step, move)=>{
        const destination=move?`Go to move num ${move}` : "Go to start";
        return(
            <li key={move}>
                <button onClick={()=>jumpTo(move)} >{destination}</button>
            </li>
        );
    });

    return(
        <>
            <h1>Tic Tac Toe</h1>
            <Board square={History[stepNumber]} onClick={handleClick} />
            <div className="info-wrapper">
                <div>
                    <h3>History</h3>
                    {renderMoves()}
                </div>
                <h3>{winner?"Winner: " +winner: "Next Player: "+XO} </h3>
            </div>
            
        </>
    )
}

export default Game;