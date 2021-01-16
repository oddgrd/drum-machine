import React from "react";

function Settings({ volume, setVolume, power, togglePower, bank, toggleBank }) {
  const handleVolumeChange = (e) => {
    if (power) {
      setVolume(e.target.value);
    }
  };
  const handlePowerToggle = () => {
    togglePower(!power);
  };
  const handleBankToggle = () => {
    if (power) {
      toggleBank(!bank);
    }
  };
  //disabled bank button with power disabled
  const bankId = power ? "bank-switch" : "disabled";
  return (
    <div className="settings-container">
      <div className="settings-text">{volume}</div>
      <label for="volume-slider" />
      <input
        type="range"
        min="1"
        max="100"
        value={volume}
        className="slider"
        id="volume-slider"
        onChange={handleVolumeChange}
      />
      <div className="switches-div">
        <p className="switch-description">Power</p>
        <input type="checkbox" id="power-switch" onClick={handlePowerToggle} />
        <label for="power-switch" className="switches"></label>
        <p className="switch-description">Bank</p>
        <input type="checkbox" id={bankId} onClick={handleBankToggle} />
        <label for="bank-switch" className="switches"></label>
      </div>
    </div>
  );
}

export default Settings;
