import React from "react";
import { ImVolumeLow } from "react-icons/im";
import { ImVolumeMedium } from "react-icons/im";
import { ImVolumeHigh } from "react-icons/im";
import { ImVolumeMute2 } from "react-icons/im";
import "./volumeslider.css";
export default function VolumeSlider({ value, handleChange, min, max, step }) {
  return (
    <>
      {" "}
      <div class="player-volume-block">
      {value > 0 && value <= 33 && <ImVolumeLow class="volume-value-icon" />}
        {value > 33 && value <= 66 && <ImVolumeMedium class="volume-value-icon" />}
        {value > 66 && <ImVolumeHigh class="volume-value-icon" />}
        {value == 0 && <ImVolumeMute2 class="volume-value-icon" />}
        <div class="volume-slider-container">
          
          <input
            class="volume-slider w-100  ms-3"   
            type="range"
            defaultValue={value}
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
          />
          <progress
            class="volume-slider-progress w-100 ms-3"
            min={min}
            max={max}
            step={step}
            value={value}
          />
        </div>
      </div>
    </>
  );
}
