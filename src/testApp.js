import React, {useState} from 'react'
import './App.css'

function App(){
    return(
    <div className="todo-page">
      <center>
        <div className="header">
            <h1> TODO LIST </h1> 
        </div>
        <div className="item-list">
          <div className="current-item">
              <span>
                <input type='text' placeholder='Add your TODO' />
              </span>
              <button className='addButton'> + </button>
          </div>
          <br />
            <ul className="saved-item">
                <li>
                    <input type='checkbox' />
                    <span>Dummy Text</span>
                    <button className='delButton'> X </button>
                </li>
            </ul>
          <h1>Items Done</h1>
            <h3> Dummy items done </h3>
        </div>
      </center> 
    </div>
    );
}

export default App;