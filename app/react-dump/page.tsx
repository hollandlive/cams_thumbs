"use client";

function MyButton() {
  function handleClick() {
    alert("You clicked me!11");
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default function ReactDumpPage() {
  return (
    <div>
      <h1>React Dump</h1>
      <MyButton />
    </div>
  );
}