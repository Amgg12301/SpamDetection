import './App.css';
import React, { useState, useEffect } from 'react';
import TextBox from './TextBox.js';
import Result from './Result.js';

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
      <h1>Let's Fight Spam Together!</h1>
      <TextBox />
      <p>Flask says that 'URGENT! Your Mobile No 1234 was awarded a Prize' is {type}</p>
      <Result state={type} />
    </div>
  );
}

export default App;
