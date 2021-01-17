import { React } from "react";

function DrumPads({ keys, volume, setCurKey, power }) {
  const handleClick = (idx) => {
    if (power) {
      setCurKey(keys[idx].description);
    }
  };
  return (
    <div className="drumpad-container">
      {keys.map((key, index) => (
        <div
          key={index}
          className="drum-pad"
          onClick={() => handleClick(index)}
          id={keys[index].description}
        >
          {keys[index].key}
          <audio
            id={keys[index].key}
            className="clip"
            src={keys[index].url}
          ></audio>
        </div>
      ))}
    </div>
  );
}

export default DrumPads;
