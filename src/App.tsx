import "./App.css";
import { ClickCounter } from "./ClickCounter";
import { MouseCounter } from "./MouseOverCounter";

function App() {
  return (
    <>
      <ClickCounter title="Click Counter Title" />
      <MouseCounter imgSrc="https://svsmetal.com/wp-content/uploads/2023/05/placeholder.png" />
    </>
  );
}

export default App;
