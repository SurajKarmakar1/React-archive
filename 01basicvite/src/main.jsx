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
//React functional component that uses JSX to define the UI.
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
//JSX is a syntax that looks like HTML but is actually JavaScript under the hood. It allows you to write UI structures in a declarative way, which React transpiles into JavaScript using tools like Babel.
//This JSX creates a React element representing an <a> tag with attributes (href, target) and the text content "Visit Google".
//Under the hood, JSX is transpiled into a React.createElement call, which creates a JavaScript object (a React element) that React uses to build the DOM.
const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);
//This is the raw JavaScript equivalent of the JSX in AnotherElement.
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
