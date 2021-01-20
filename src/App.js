import React, { useState, useEffect } from "react";
import "./App.css";
import DrumPads from "./components/DrumPads";
import Settings from "./components/Settings";

const keys1 = [
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    triggerKey: "Q",
    description: "Heater 1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    triggerKey: "W",
    description: "Heater 2",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    triggerKey: "E",
    description: "Heater 3",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    triggerKey: "A",
    description: "Heater 4-1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    triggerKey: "S",
    description: "Heater 6",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    triggerKey: "D",
    description: "Dsc Oh",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    triggerKey: "Z",
    description: "Kick n Hat",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    triggerKey: "X",
    description: "RP4 Kick 1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    triggerKey: "C",
    description: "Cev H2",
  },
];

const keys2 = [
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    triggerKey: "Q",
    description: "Chord 1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    triggerKey: "W",
    description: "Chord 2",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    triggerKey: "E",
    description: "Chord 3",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    triggerKey: "A",
    description: "Give us a light",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    triggerKey: "S",
    description: "Dry ohh",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    triggerKey: "D",
    description: "Bld H1",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    triggerKey: "Z",
    description: "Punchy kick",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    triggerKey: "X",
    description: "Side Stick",
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    triggerKey: "C",
    description: "Brk Snr",
  },
];
function App() {
  const [keys, setKeys] = useState(keys1);
  const [volume, setVolume] = useState(30);
  const [power, togglePower] = useState(false);
  const [bank, toggleBank] = useState(false);
  const [displayKey, setDisplayKey] = useState("");
  const [sliderVal, setSliderVal] = useState(0.3);

  useEffect(() => {
    bank ? setKeys(keys2) : setKeys(keys1);
    setDisplayKey("");
  }, [bank]);
  useEffect(() => {
    setDisplayKey(`Volume: ${volume}`);
  }, [volume]);

  return (
    <div id="drum-machine" className="App">
      <DrumPads
        keys={keys}
        setKeys={setKeys}
        sliderVal={sliderVal}
        setDisplayKey={setDisplayKey}
        power={power}
      />
      <Settings
        volume={volume}
        setVolume={setVolume}
        power={power}
        togglePower={togglePower}
        bank={bank}
        toggleBank={toggleBank}
        displayKey={displayKey}
        sliderVal={sliderVal}
        setSliderVal={setSliderVal}
      />
    </div>
  );
}

export default App;
