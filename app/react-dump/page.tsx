"use client";

import { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(0);


  function handleClick() {
    // console.log("clicked " + count);
    setCount(prev => prev + 1);
  }

 // console.log (count);

  return (
    <button onClick={handleClick}>
      You clicked {count} times
    </button>
  );
}

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(prev => !prev);
  }

  return (
    <button onClick={handleToggle}>
      {isOn ? "ON 🔥" : "OFF ❄️"}
    </button>
  );
}

export default function ReactDumpPage() {
  return (
    <div>
      <h1>Counter Example</h1>
      <CounterButton />
      <h2>
        <ToggleButton />
      </h2>
    </div>
    
  );
}