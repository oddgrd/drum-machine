import React, { useState, useEffect } from "react";
import "./App.css";
import DrumPads from "./components/DrumPads";
import Settings from "./components/Settings";

const keys1 = [
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    key: "Q",
    description: "Heater 1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    key: "W",
    description: "Heater 2",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    key: "E",
    description: "Heater 3",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    key: "A",
    description: "Heater 4-1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    key: "S",
    description: "Heater 6",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    key: "D",
    description: "Dsc Oh",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    key: "Z",
    description: "Kick n Hat",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    key: "X",
    description: "RP4 Kick 1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    key: "C",
    description: "Cev H2",
  },
];

const keys2 = [
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    key: "Q",
    description: "Chord 1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    key: "W",
    description: "Chord 2",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    key: "E",
    description: "Chord 3",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    key: "A",
    description: "Give us a light",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    key: "S",
    description: "Dry ohh",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    key: "D",
    description: "Bld H1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    key: "Z",
    description: "Punchy kick",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    key: "X",
    description: "Side Stick",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    key: "C",
    description: "Brk Snr",
  },
];
function App() {
  const [keys, setKeys] = useState(keys1);
  const [volume, setVolume] = useState(50);
  const [power, togglePower] = useState(false);
  const [bank, toggleBank] = useState(false);
  const [curKey, setCurKey] = useState("");

  useEffect(() => {
    bank ? setKeys(keys2) : setKeys(keys1);
    setCurKey("");
  }, [bank]);
  useEffect(() => {
    setCurKey(`Volume: ${volume}`);
  }, [volume]);
  return (
    <div id="drum-machine" className="App">
      <DrumPads
        keys={keys}
        setKeys={setKeys}
        volume={volume}
        setCurKey={setCurKey}
      />
      <Settings
        volume={volume}
        setVolume={setVolume}
        power={power}
        togglePower={togglePower}
        bank={bank}
        toggleBank={toggleBank}
        curKey={curKey}
      />
    </div>
  );
}

export default App;
