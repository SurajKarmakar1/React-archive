import { useState, useCallback } from "react";

function App() {
  //these 3 are the states(for password generation) based on which things will be changing .
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      Math;
    }
  });

  return (
    <div className="bg-black w-full h-lvh sm:h-lvh sm:w-full flex flex-col justify-center items-center border-box">
      <div className="sm:w-100 max-w-md mx-auto shadow-md px-4 py-3  bg-black text-white h-50 border border-zinc-800">
        <h1 className="text-2xl  mb-2 text-center">Password Generator</h1>
        <div className="flex border border-zinc-800 mt-6 overflow-hidden">
          <input
            type="text"
            value={password}
            className=" w-full outline-none px-2 py-1"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none border bg-white text-black px-3 py-0.5 shrink-0 ">
            copy
          </button>
        </div>

        <div className="flex text-sm  mt-6 ">
          <div className="flex items-center gap-x-1 border border-zinc-800 px-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer outline-none px-4 py-2 "
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-x-1 border border-zinc-800 p-1 px-3 ">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>

          <div className="flex items-center gap-x-1 border border-zinc-800 p-1 px-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => {
                  !prev;
                });
              }}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>

        <div className="mt-1">
          <label className="text-sm " htmlFor="length">
            Password Length : {length}
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
