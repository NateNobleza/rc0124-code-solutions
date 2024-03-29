import { useState } from 'react';
import './ToggleSwitch.css';

let text;
let switchClassName = 'switch';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(true);

  function toggleSwitch() {
    setIsOn(!isOn);
  }
  if (isOn) {
    text = 'ON';
  } else {
    text = 'OFF';
  }
  if (isOn) {
    switchClassName += 'On';
  } else {
    switchClassName += 'Off';
  }
  return (
    <div
      className={`toggle-switch ${isOn ? 'on' : 'off'}`}
      onClick={toggleSwitch}>
      <div className="slider">
        <div className={switchClassName}></div>
      </div>
      <span>{text}</span>
    </div>
  );
}
