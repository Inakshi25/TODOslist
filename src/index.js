import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodosList";


var destination = document.querySelector('#container');


ReactDOM.render(
  <div>
  <TodoList/>
  </div>, 
  destination
);