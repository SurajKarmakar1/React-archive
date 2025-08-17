import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// const reactElement = {
//   //custom declaration so react dont under this
//   type: "a",
//   props: {
//     target: "_blank",
//     href: "https://react.dev/",
//   },

//   children: "click me to visit react",
// };

function MyApp() {
  const username = "suraj";
  return (
    <>
      //jsx
      <h1>Vite react app{2 + 2}</h1>
      <h2>example{username}</h2>
    </>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const areactElement = React.createElement(
  //parameter order: element , attributes, children
  "a",

  { href: "https://google.com", target: "_blank" },

  "click to visit google"
);

createRoot(document.getElementById("root")).render(
  // <App />    // this is jsx syntax for rendering a react component
  //   <MyApp />
  //reactElement               // this wont work as react dont understand this.
  //AnotherElement

  areactElement //This refers directly to the value stored in the areactElement variable.
);
