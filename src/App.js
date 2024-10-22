import './App.css';
import { useState } from 'react';
import Picross from './components/picross';
import Win from './components/win';

function App() {
  const [finished, setFinished] = useState(false);
  const [playerBoard, setPlayerBoard] = useState(false);

  
  return (
    <div className="App">
      {finished ? (
        <Win playerBoard = {playerBoard} />
      ) : (
        <Picross finished = {setFinished} setResult = {setPlayerBoard} />
      )}
    </div>
  );
}

export default App;
