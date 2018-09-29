import React from "react";
import Row from "./Row";

const Board=({board,markSquare})=>{
    return(
        <div>
            {board.map((row, idx) => (
        <Row key={idx} rowIdx={idx} row={row} markSquare={markSquare} />
      ))}
        </div>
    );
};

export default Board;