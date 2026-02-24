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
    console.log (isOn);
    setIsOn(prev => !prev);
  }
// console.log("toggle is " + isOn);

  return (
    <button
      onClick={handleToggle}
      style={{
        backgroundColor: isOn ? "green" : "gray",
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {isOn ? "System is Active 🟢" : "System is Sleeping 😴"}

    </button>
  );
}

function NameInput() {
  const [name, setName] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }


  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Type your name..."
        style={{ padding: "8px" }}
      />

      <p>Hello, {name}</p>
     
    </div>
  );
}

function Parent() {
  const message = "Hello from Parent";

  return (
    <div>
      <Child text={message} />
    </div>
  );
}

function Child({ text }: { text: string }) {
  return <h2>{text}</h2>;
}

export default function ReactDumpPage() {
  return (
    <div>
      <h1>Counter Example</h1>
      <CounterButton />

      <h2>Toggle Example</h2>
      <ToggleButton />

      <h2>Name Input</h2>
      <NameInput />

      <h2>Parent / Child Example</h2>
      <Parent />
    </div>
  );
}

// // vanilla JS
// if (isOn) {
//   document.body.style.backgroundColor = "green"
// }