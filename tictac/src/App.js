import React from "react";
import Board from "./Components/Board";
import "./App.css";


class App extends React.Component{
  state={
    board:[[null,null,null],[null,null,null],[null,null,null]],
    currentPlayer:"X"
  };

  markSquare=(row,sq)=>{
    const{board,currentPlayer}=this.state;
    if(board[row][sq]) return;
    const newBoard=[
      board.slice(0,row),
      Object.assign([],board[row],{[sq]:currentPlayer}),
      ...board.slice(row+1)
    ];

    this.setState({
      board:newBoard,
      currentPlayer:currentPlayer==="X"?"O":"X"
    });
  };
  render(){
    const{board,currentPlayer}=this.state;
    const winner=getWinner(board);
    return(
      <div>
         <Board board={board} markSquare={this.markSquare} />
        {winner ? <div>{winner}</div> : <div>Next Player: {currentPlayer}</div>}
      </div>
    );
  }
}

export default App;


const getWinner = board => {
  const flatBoard = [].concat.apply([], board);
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]
    .map(combo => new Set(combo.map(idx => flatBoard[idx])))
    .find(set => set.size === 1 && !set.has(null));
  if (winningCombination) {
    if (winningCombination.has('X')) return 'Player X wins!';
    else return 'Player O wins!';
  }
};