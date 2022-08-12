import './App.css';
import React, {Fragment, useState} from "react"

import InputTodos from './components/InputTodos';
import ListTodos from './components/ListTodos'

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodos />  
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
