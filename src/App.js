///*global request*/
import React from 'react';
import './App.css';
const WhichBrowser = require('which-browser');
const result = new WhichBrowser(navigator.userAgent);

function App()
{

  return (
      <div className="App">
        <div className="App-content">
          <div className="App-browser">
            You are using {result.browser.name} {result.browser.version.value}
          </div>
          <div className="App-os">
            running on {result.os.toString()} to access this page
          </div>
        </div>
      </div>
  );
}

export default App;
