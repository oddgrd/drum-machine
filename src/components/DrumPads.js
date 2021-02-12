import { React, useEffect, useRef } from "react";

function DrumPads({ keys, sliderVal, setDisplayKey, power, bank }) {
  const playSound = (obj) => {
    setDisplayKey(obj.description);
    const sound = document.getElementById(obj.triggerKey);
    sound.currentTime = 0;
    sound.volume = sliderVal;
    sound.play().catch((e) => {});
  };
  const handleClick = (e, obj) => {
    if (power) {
      playSound(obj);
    }
  };

  const keysArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const handleKeyPress = (e) => {
    const k = e.key.toUpperCase();
    const idx = keysArr.indexOf(k);

    console.log(k);
    if (idx !== -1 && power) {
      playSound(keys[idx]);
      document
        .getElementById(keys[idx].description)
        .classList.add("drum-pad-active");
      setTimeout(
        () =>
          document
            .getElementById(keys[idx].description)
            .classList.remove("drum-pad-active"),
        200
      );
    }
  };
  const padRef = useRef(null);
  useEffect(() => {
    setTimeout(() => padRef.current.focus(), 500);
  });

  return (
    <div className="drumpad-container">
      {keys.map((key, index) => (
        <button
          ref={padRef}
          disabled={!power}
          key={index}
          className={power ? "drum-pad" : "drum-pad-disabled"}
          onKeyDown={(e) => handleKeyPress(e)}
          onClick={(e) => handleClick(e, key)}
          id={key.description}
          onBlur={() => setTimeout(() => padRef.current.focus(), 500)}
        >
          {key.triggerKey}
          <audio id={key.triggerKey} className="clip" src={key.url}></audio>
        </button>
      ))}
    </div>
  );
}

export default DrumPads;
