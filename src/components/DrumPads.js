import { React, useState, useEffect } from "react";
import useKeyPress from "../custom-hooks/useKeyPress";
function DrumPads({ keys, sliderVal, setCurKey, power, curKey }) {
  const playSound = (obj) => {
    setCurKey(obj.description);
    const sound = document.getElementById(obj.triggerKey);
    sound.currentTime = 0;
    sound.volume = sliderVal;
    sound.play();
  };
  const handleClick = (idx, obj) => {
    if (power) {
      playSound(obj);
    }
  };
  const keyPresses = [
    useKeyPress("q"),
    useKeyPress("w"),
    useKeyPress("e"),
    useKeyPress("a"),
    useKeyPress("s"),
    useKeyPress("d"),
    useKeyPress("z"),
    useKeyPress("x"),
    useKeyPress("c"),
  ];
  const handleKeyPress = (key, idx) => {
    if (keyPresses[idx] && power) {
      playSound(key);
    }
  };
  return (
    <div className="drumpad-container">
      {keys.map((key, index) => (
        <div
          key={index}
          keycode={key.keycode}
          className="drum-pad"
          onClick={() => handleClick(index, key)}
          id={key.description}
        >
          {key.triggerKey}
          <audio
            id={key.triggerKey}
            className="clip"
            onKeyDown={handleKeyPress(key, index)}
            src={key.url}
          ></audio>
        </div>
      ))}
    </div>
  );
}

export default DrumPads;
