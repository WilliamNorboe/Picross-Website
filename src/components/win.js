
import { useState } from 'react';
import './button.css';

let run = true;
function Win(props) {
  console.log(props.playerBoard);
  let board = [];
  let row = [];
  if(run){
    for (let i = 0; i < props.playerBoard.length; i++) {
      for (let j = 0; j < props.playerBoard[i].length; j++) {
        if(props.playerBoard[i][j] == 1){
          row.push(<td className= 'box marked' key = {j}></td>);
        }
        else{
          row.push(<td className= 'box' key = {j}></td>);
        }
      }
      board.push(<tr className='row' key = {i}>{row}</tr>);
    }
    run = false;
  }

  
  return (
      <div className='page'>
        <h1>Picross</h1>
        <p>Good Job! You did it!</p>
        <button className="btn-2" onClick = {()=>{window.location.reload();}}><span>Restart</span></button>
          {board}
      </div>
  );
}

export default Win;
