import React from 'react';
import './App.css';
import {Control} from './Components/Control';
import {Input} from './Components/Input';
import {List} from './Components/List';

const todoConfig = [
  "learn react",
  "finish to do list",
  "eat smth",
  "read a book",
  "play the piano", 
  "walk the dog",
  "sleep"
]

function App() {
  return (
    <div className="app">
      <h1>To-Do List</h1>
      <Control />
      <Input />
      <List elements={todoConfig}/>
    </div>
  );
}

export default App;
