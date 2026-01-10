import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// Importing x and y from module.js
import { x, y } from "./module";
// import function test from module.js
import { test } from "./module";
// import default function test2 from module.js
import test2 from "./module";
import Child from "./Components/Child";
import Listitem from "./Components/Listitem";

function App() {
  const [person, setPerson] = useState({
    name: "ramzi",
    age: 30,
  });
  const villes = [
    { name: "Tunis", surface: 100 },
    { name: "Sfax", surface: 50 },
    { name: "Sousse", surface: 70 },
    { name: "monastir", surface: 70 },
    { name: "Gabes", surface: 40 },
  ];
  function changeName() {
    setPerson({
      name: "ali",
      age: 25,
    });
  }
  function handleClick() {
    console.log("Button clicked!");
  }
  return (
    <>
      <Listitem ville={villes} />
      <h1>Welcome to react {x}</h1>
      <h1>Welcome to react {x + y}</h1>
      <button onClick={test}>Click me to test</button>
      <button onClick={test2}>Click me to test2</button>
      <Child />
      <button onClick={handleClick}>handleClick btn</button>
      <button onClick={changeName}>ChangeName</button>

      <p>{person.name}</p>
      <p>{person.age}</p>
    </>
  );
}

export default App;
