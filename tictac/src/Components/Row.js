import React from "react";
import '../App.css';
import Square from './Square';

const Row=({ row, rowIdx, markSquare })=>{
    return(
        <div className="board-row">
      {row.map((square, idx) => (
        <Square
          key={idx}
          value={square}
          markSquare={() => markSquare(rowIdx, idx)}
        />
      ))}
    </div>
    );

};

export default Row;