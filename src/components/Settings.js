import { React } from "react";

function Settings({
  setVolume,
  power,
  togglePower,
  bank,
  toggleBank,
  displayKey,
  sliderVal,
  setSliderVal,
}) {
  const handleVolumeChange = (e) => {
    if (power) {
      setSliderVal(e.target.value);
      setVolume(Math.round(e.target.value * 100));
    }
  };
  const handlePowerToggle = () => {
    if (power) {
      togglePower(!power);
      toggleBank(false);
      document.getElementById("bank-switch").checked = false;
      document.getElementById("bank-switch").disabled = true;
    } else {
      togglePower(!power);
      document.getElementById("bank-switch").disabled = false;
    }
  };
  const handleBankToggle = () => {
    if (power) {
      toggleBank(!bank);
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-text unselectable" id="display">
        {power ? displayKey : ""}
      </div>
      <label htmlFor="volume-slider" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={sliderVal}
        className="slider"
        style={{ background: power ? "#d3d3d3" : "#4e4e50" }}
        id="volume-slider"
        onChange={handleVolumeChange}
      />
      <div className="switches-div">
        <p className="switch-description">Power</p>
        <input
          type="checkbox"
          id="power-switch"
          onClick={() => handlePowerToggle()}
        />
        <label htmlFor="power-switch" className="switches"></label>
        <p className="switch-description">Bank</p>
        <input
          type="checkbox"
          id="bank-switch"
          onClick={() => handleBankToggle()}
        />
        <label htmlFor="bank-switch" className="switches"></label>
      </div>
    </div>
  );
}

export default Settings;
