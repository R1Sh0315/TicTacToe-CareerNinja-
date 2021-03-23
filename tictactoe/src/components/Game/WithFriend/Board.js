import react from 'react';
import Square from "./Square";

const Board=({Square, onClick})=>{
    <div className="board">
        {Square.map((Square, i)=>(
            <Square key={i} value={Square} onClick={()=>onClick(i)} />
        ))}
    </div>
}

export default Board; 
