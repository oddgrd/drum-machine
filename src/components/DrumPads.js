import React from "react";

function DrumPads({ keys }) {
  return (
    <div className="drumpad-container">
      {keys.map((key) => (
        <div className="drum-pad grid-item">
          {key}
          <audio></audio>
        </div>
      ))}
    </div>
  );
}

export default DrumPads;
