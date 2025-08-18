import { useState } from "react";
import "./App.css";
//any change in the state wil re render the web page.(why state was designed for in react.)
function App() {
  // let counter = 0;
  let [counter, setCounter] = useState(0); // hooks

  const addValue = () => {
    setCounter((prevCounter) => {
      prevCounter + 1;
    });
    setCounter((prevCounter) => {
      prevCounter + 1;
    });
    setCounter((prevCounter) => {
      prevCounter + 1;
    });
    setCounter((prevCounter) => {
      prevCounter + 1;
    });
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>React Practice: {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
