import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Maker</h1>

      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
