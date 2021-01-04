import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [type, setType] = useState('N/A');

  useEffect(() => {
    fetch("/results", {
      method: "POST",
      cache: "no-cache",
      headers: {
          "content_type":"application/json",
      },
      body: JSON.stringify('URGENT! Your Mobile No 1234 was awarded a Prize')
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setType(data.result);
    });
  }, [type]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextBox />
        <p>Flask says that 'URGENT! Your Mobile No 1234 was awarded a Prize' is {type}</p>
        <Result state={type} />
      </header>
    </div>
  );
}

export default App;
