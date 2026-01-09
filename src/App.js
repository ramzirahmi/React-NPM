import logo from "./logo.svg";
import "./App.css";
// Importing x and y from module.js
import { x, y } from "./module";
// import function test from module.js
import { test } from "./module";
// import default function test2 from module.js
import test2 from "./module";
import Child from "./Component/Child";
function App() {
  function handleClick() {
    console.log("Button clicked!");
  }
  return (
    <div>
      <h1>Welcome to react {x}</h1>
      <h1>Welcome to react {x + y}</h1>
      <button onClick={test}>Click me to test</button>
      <button onClick={test2}>Click me to test2</button>
      <Child />
      <button onClick={handleClick}>handleClick btn</button>
    </div>
  );
}

export default App;
