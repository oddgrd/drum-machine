import React, { useState, useEffect } from "react";
import "./App.css";
import DrumPads from "./components/DrumPads";
import Settings from "./components/Settings";
const keyArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

function App() {
  const [keys] = useState(keyArr);
  const [volume, setVolume] = useState(50);
  const [power, togglePower] = useState(false);
  const [bank, toggleBank] = useState(false);
  return (
    <div id="drum-container" className="App">
      <DrumPads keys={keys} />
      <Settings
        volume={volume}
        setVolume={setVolume}
        power={power}
        togglePower={togglePower}
        bank={bank}
        toggleBank={toggleBank}
      />
    </div>
  );
}

export default App;
