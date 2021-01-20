import { React } from "react";
import useKeyPress from "../custom-hooks/useKeyPress";
function DrumPads({ keys, sliderVal, setDisplayKey, power }) {
  const playSound = (obj) => {
    setDisplayKey(obj.description);
    const sound = document.getElementById(obj.triggerKey);

    sound.currentTime = 0;
    sound.volume = sliderVal;
    sound.play();
  };
  const handleClick = (obj) => {
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
      document.getElementById(key.description).className = "drum-pad-activated";
      setTimeout(
        () => (document.getElementById(key.description).className = "drum-pad"),
        300
      );
    }
  };

  return (
    <div className="drumpad-container">
      {keys.map((key, index) => (
        <div
          key={index}
          className="drum-pad"
          onClick={() => handleClick(key)}
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
