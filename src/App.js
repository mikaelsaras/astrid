import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [calcMethod, setcalcMethod] = React.useState(null)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Hej Astrid här kommer din första hemsida
        </p>
      </header>
      <body>
      <p>Vilket räknesätt vill du andvända?</p>
      <button onClick={() => setcalcMethod("+")}>+</button>
      <button onClick={() => setcalcMethod("-")}>-</button>
      <button onClick={() => setcalcMethod("*")}>*</button>
      <button onClick={() => setcalcMethod("/")}>/</button>
      <h1>{calcMethod}</h1>
      </body>
    </div>
  );
}

export default App;
