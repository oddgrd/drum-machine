import { React } from "react";

function Settings({
  volume,
  setVolume,
  power,
  togglePower,
  bank,
  toggleBank,
  curKey,
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
    togglePower(!power);
  };
  const handleBankToggle = () => {
    if (power) {
      toggleBank(!bank);
    }
  };
  //useEffect(() => {}, [curKey]);
  //disabled bank button with power disabled
  const bankId = power ? "bank-switch" : "disabled";
  return (
    <div className="settings-container">
      <div className="settings-text" id="display">
        {power ? curKey : ""}
      </div>
      <label htmlFor="volume-slider" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={sliderVal}
        className="slider"
        id="volume-slider"
        onChange={handleVolumeChange}
      />
      <div className="switches-div">
        <p className="switch-description">Power</p>
        <input type="checkbox" id="power-switch" onClick={handlePowerToggle} />
        <label htmlFor="power-switch" className="switches"></label>
        <p className="switch-description">Bank</p>
        <input type="checkbox" id={bankId} onClick={handleBankToggle} />
        <label htmlFor="bank-switch" className="switches"></label>
      </div>
    </div>
  );
}

export default Settings;
