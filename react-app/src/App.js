import './App.css';
import React from 'react';
import TextBox from './TextBox.js';

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Let's Fight Spam Messages Together!</h1>
      </div>
      <TextBox />
    </div>
  );
}

export default App;