import './App.css';
import React, {Fragment, useState} from "react"

import InputTodos from './components/InputTodos';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodos />  
      </div>
    </Fragment>
  );
}

export default App;
