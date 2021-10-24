import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {

  const [inputList, setinputList] = useState();
  const [items, setItems] = useState([]);

  const event = (e) => {
    if (e.target.value) {
      setinputList(e.target.value)
    }


  }

  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList("");
  }

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>Todo List</h1>
        <input type="text" placeholder="Add Items" id="textbox" onChange={event} value={inputList} />
        <button onClick={addItem}>+</button>
        <ul>
          {items.map((val, index) => {
            return <Button list={val} id={index} onSelect={deleteItems} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
