import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [val, setVal] = useState("");
  function handleClick() {
    setVal(
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  }
  return (
    <div id="main">
      {val}
      <button id="click" onClick={handleClick}>
        button
      </button>
    </div>
  );
}

export default App;
