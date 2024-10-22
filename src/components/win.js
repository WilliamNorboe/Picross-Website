
import { useState } from 'react';
import './button.css';

function Win(props) {

  
  return (
      <div className='page'>
        <h1>Picross</h1>
        <p>Good Job! You did it!</p>
        <button className="btn-2" onClick = {()=>{window.location.reload();}}><span>Restart</span></button>
        <table>
          <tbody>
          {props.playerBoard}
          </tbody>
      </table>
      </div>
  );
}

export default Win;
