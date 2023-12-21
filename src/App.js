import './App.css';
import { useState } from 'react';


// let columnHint =  (picrossAnswer)=>{

// }
let createBoard = (size)=>{
  let picrossBoard = [];
  let playerBoard = [];
  for(let i = 0; i < size; ++i){
    let row = []
    let playerRow = [];
    for(let j = 0; j < size; ++j){
      row.push(Math.floor(Math.random()*2));
      playerRow.push(0);
    }
    picrossBoard.push(row);
    playerBoard.push(playerRow)
  }
  return [picrossBoard, playerBoard]
}


let changeSize = (setSize, setPlayerBoard) =>{
  let newSize = prompt("Enter a new Size for the board: ");
  let playerBoard = [];
  for(let i = 0; i < newSize; ++i){
    let playerRow = [];
    for(let j = 0; j < newSize; ++j){
      playerRow.push(0);
    }
    playerBoard.push(playerRow)
  }
  setPlayerBoard(playerBoard)
  setSize(newSize);
}

let boxClicked = (i, j, board, setBoard) =>{
  console.log(i + " " + j);
  let t = structuredClone(board);
  if(t[i][j] == 0){
    t[i][j] = 1;
  }
  else{
    t[i][j] = 0;
  }
  
  setBoard(t);
}

let printb = (b1, b2) =>{
  console.log(b1);
  console.log(b2);
}
function App() {
  const [size, setSize] = useState(5);
  let result = createBoard(size);
  let picrossAnswer = result[0];
  // let playerBoard = result[1];
  const [playerBoard, setPlayerBoard] = useState(result[1]);
  let board = [];
  let row = [];
  // const [board, setBoard] = useState([]);
  // const [row, setRow] = useState([]);
  board.push(
  <tr>

  </tr>)
  for (let i = 0; i < playerBoard.length; i++) {
    row = []
    for (let j = 0; j < playerBoard[i].length; j++) {
      if(playerBoard[i][j] == 1){
        row.push(<td className= 'box marked' key = {j} onClick = {()=>{boxClicked(i, j, playerBoard , setPlayerBoard)}} >{playerBoard[i][j]}</td>);
      }
      else{
        row.push(<td className= 'box' key = {j} onClick = {()=>{boxClicked(i, j, playerBoard , setPlayerBoard)}}>{playerBoard[i][j]}</td>);
      }
      if( i == size-1 && j == size-1){
        // row.push(<div className  = "numbers">3 3</div>)
      }
    }
    board.push(<tr className='row' key = {i}>{row}</tr>);
  }
  
  return (
    <div className="App">
      <div className='page'>
        <h1>Picross</h1>
        <button onClick = {()=>{changeSize(setSize, setPlayerBoard)}} >Change Size</button>
        {/* {board} */}
        <table>
        <tbody>
        {board}
        </tbody>
      </table>
        <button onClick = {()=>{printb(playerBoard, picrossAnswer)}} >Check</button>
      </div>
    </div>
  );
}

export default App;
