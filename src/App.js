import { useState } from "react";
import Header from "./components/Layout/Header";

function App() {
  const [mode, setMode] = useState(true);
  const modeHandler = () => setMode((pre) => !pre);
  return (
    <div className={`App ${mode ? "dark-mode" : ""}`}>
      {mode}
      <Header value={mode} modeHandler={modeHandler} />
    </div>
  );
}

export default App;
