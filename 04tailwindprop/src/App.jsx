import "./components/Card";
import Card from "./components/Card";
// props are way to pass data from one comp to another component.
function App() {
  return (
    //passing props
    <>
      <Card cardversion="CARD V1" />
      <Card cardversion="CARD V2" />
      <div
        className="
      text-white bg-gray-950 flex flex-cols justify-center items-center border-t-[1px] border-t-zinc-700"
      >
        <button className="border border-blue-700 p-3 bg-blue-700 px-6 rounded-md hover:bg-blue-800 m-2">
          Press me
        </button>
      </div>
    </>
  );
}

export default App;
