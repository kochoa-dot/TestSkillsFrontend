import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";

function App() {
  const [currentForm, serCurrentForm] = useState('login');

  const toggleForm = (formName) =>{
    serCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}></Login>: <Register onFormSwitch={toggleForm}></Register>
      }

    </div>
  );
}

export default App;
