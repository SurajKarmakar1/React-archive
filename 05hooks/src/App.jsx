import { useState } from "react";

import "./App.css";

function App() {
  //these 3 are the states(for password generation) based on which things will be changing .
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-sm px-4 py-3 my-8 bg-gray-800 text-zinc-300">
      <h1 className="text-2xl font-bold mb-2 text-center">
        Password Generator
      </h1>
    </div>
  );
}

export default App;
