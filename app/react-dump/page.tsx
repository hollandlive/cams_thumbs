"use client";

import { useState } from "react";

function CounterButton() {
  const [count, setCount] = useState(0);

   // console.log (count);


  function handleClick() {
    console.log("clicked " + count);
    setCount(count + 1);
  }

 // console.log (count);

  return (
    <button onClick={handleClick}>
      You clicked {count} times
    </button>
  );
}

export default function ReactDumpPage() {
  return (
    <div>
      <h1>Counter Example</h1>
      <CounterButton />
    </div>
  );
}