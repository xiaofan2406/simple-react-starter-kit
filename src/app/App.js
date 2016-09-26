import React from 'react';

import logo from './logo.svg';
import './App.css';


/* Use functions rather than constant elements for better debugging */
function App() {
  return (
    <div className="App-root">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-title">React Starter Kit</span>
      </div>
      <div className="App-main" >
        Hello world
      </div>
    </div>
  );
}


export default App;
