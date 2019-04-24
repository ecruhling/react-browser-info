import React from 'react';
import './App.css';
import request from 'which-browser';

const WhichBrowser = require('which-browser');
const result = new WhichBrowser(request.headers);

console.log(result);

function App()
{
  return (
      <div className="App">

        <div className="App-content">

        </div>

      </div>
  );
}

export default App;
