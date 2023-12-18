import './App.css';
import { useState } from 'react';

let createBoard = (size)=>{
  let picrossBoard = [];
  for(let i = 0; i < size; ++i){
    let row = []
    for(let j = 0; j < size; ++j){
      row.push(Math.floor(Math.random()*2));
    }
    picrossBoard.push(row);
  }
  return picrossBoard
}


let changeSize = (setSize) =>{
  let newSize = prompt("Enter a new Size for the board: ");
  setSize(newSize);
}

function App() {
  const [size, setSize] = useState(5);
  let picrossAnswer = createBoard(size);
  // let board = [];
  let row = [];
  const [board, setBoard] = useState([]);
  // const [row, setRow] = useState([]);
  for (let i = 0; i < picrossAnswer.length; i++) {
    row = []
    for (let j = 0; j < picrossAnswer[i].length; j++) {
      if(picrossAnswer[i][j] == 1){
        row.push(<div className= 'box marked' key = {j}>{picrossAnswer[i][j]}</div>);
      }
      else{
        row.push(<div className= 'box' key = {j}>{picrossAnswer[i][j]}</div>);
      }
      console.log(row[j]);
    }
    board.push(<div className='row' key = {i}>{row}</div>);
  }

  return (
    <div className="App">
      <div className='page'>
        <h1>Picross</h1>
        <button onClick = {()=>{changeSize(setSize)}} >Change Size</button>
        {board}
      </div>
      
    </div>
  );
}

export default App;
