
import { useState } from 'react';

let prevSize = 0;
let picrossAnswer;
let choice = "black";

// side answer functions
let columnHint =  (picrossAnswer, size)=>{
  let result = [];
  let counter;
  for(let i = 0; i < size; ++i){
    counter = 0;
    let row  = [];
    for(let j = 0; j < size; ++j){
      if(picrossAnswer[j][i] == 1){
        counter++;
      }
      if((picrossAnswer[j][i] == 0 && counter != 0) || j == size-1){
        if(counter == 0){
          row.push(<></>);
          break;
        }
        row.push(<>{counter}<br/></>);
        counter  = 0;
      }
      
    }
    result.push(<td>{row}</td>);
  }
  return result;
}

let rowHint =  (picrossAnswer, size)=>{
  let result = [];
  let counter;
  for(let i = 0; i < size; ++i){
    counter = 0;
    let row  = [];
    for(let j = 0; j < size; ++j){
      if(picrossAnswer[i][j] == 1){
        counter++;
      }
      if((picrossAnswer[i][j] == 0 && counter != 0) || j == size-1){
        if(counter == 0){
          row.push(<></>);
          break;
        }
        row.push(<>{counter} </>);
        counter  = 0;
      }
      
    }
    result.push(<td>{row}</td>);
  }
  return result;
}

// create board functions
let createBoard = (size)=>{
  if(size == prevSize){
    return
  }
  let picrossBoard = [];
  for(let i = 0; i < size; ++i){
    let row = []
    for(let j = 0; j < size; ++j){
      row.push(Math.floor(Math.random()*2));
    }
    picrossBoard.push(row);
  }
  return picrossBoard;
}

let createEmptyBoard = (size)=>{
  let playerBoard = [];
  for(let i = 0; i < size; ++i){
    let playerRow = [];
    for(let j = 0; j < size; ++j){
      playerRow.push(0);
    }
    playerBoard.push(playerRow)
  }
  return playerBoard;
}

let changeSize = (setSize, setPlayerBoard) =>{
  let newSize = prompt("Enter a new Size for the board: ");
  let playerBoard = createEmptyBoard(newSize);
  setPlayerBoard(playerBoard)
  setSize(newSize);
}

let boxClicked = (i, j, board, setBoard) =>{
  console.log(i + " " + j);
  let t = structuredClone(board);
  if(t[i][j] == 0){
    if(choice == "not"){
      t[i][j] = 2;
    }
    else{
      t[i][j] = 1;
    }
  }
  else{
    t[i][j] = 0;
  }
  
  setBoard(t);
}

let printb = (b1, b2, setResult) =>{
  // console.log(b1);
  // console.log(b2);
  for(let i = 0; i < b1.length; ++i){
    for(let j= 0; j < b1[0].length; ++j){
      if(b1[i][j] == 2 && b2[i][j] == 0){
        continue;
      }
      if(b1[i][j] != b2[i][j]){
        console.log("no")
        return false;
      }
    }
  }
  setResult(b2);
  return true;
}

function Picross(props) {
  const [size, setSize] = useState(5);
  const [playerBoard, setPlayerBoard] = useState(createEmptyBoard(size));
  let board = [];
  let row = [];
  // const [board, setBoard] = useState([]);
  // const [row, setRow] = useState([]);
  if(size != prevSize){
    picrossAnswer = createBoard(size);
    prevSize = size;
  }

  
  let test = columnHint(picrossAnswer, size);
  let test2 = rowHint(picrossAnswer, size);
  // console.log(test);
  board.push(
  <tr key = {size+8}>
    <td></td>
    {test}
  </tr>)
  for (let i = 0; i < playerBoard.length; i++) {
    row = [test2[i]]
    for (let j = 0; j < playerBoard[i].length; j++) {
      if(playerBoard[i][j] == 1){
        row.push(<td className= 'box marked' key = {j} onClick = {()=>{boxClicked(i, j, playerBoard , setPlayerBoard)}} ></td>);
      }
      else if(playerBoard[i][j] == 2){
        row.push(<td className= 'box cross' key = {j} onClick = {()=>{boxClicked(i, j, playerBoard , setPlayerBoard)}} ></td>);
      }
      else{
        row.push(<td className= 'box' key = {j} onClick = {()=>{boxClicked(i, j, playerBoard , setPlayerBoard)}}></td>);
      }
    }
    board.push(<tr className='row' key = {i}>{row}</tr>);
  }
  
  return (
      <div className='page'>
        <h1>Picross</h1>
        <button onClick = {()=>{changeSize(setSize, setPlayerBoard)}} >Change Size</button>
        <div className = "choices">
          <div className='box marked' onClick= {()=>{choice = "black"}}></div>
          <div className='box cross' onClick= {()=>{choice = "not"}}></div>
        </div>
        <table>
          <tbody>
          {board}
          </tbody>
      </table>
        <button onClick = {()=>{props.finished(printb(playerBoard, picrossAnswer, props.setResult))}} >Check</button>
      </div>
  );
}

export default Picross;
