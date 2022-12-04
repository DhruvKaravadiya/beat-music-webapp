import React from "react";
import "./Layout.css";
export default function TrackSlider({ value, handleChange, min, max, step }) {
  return (
    <>
      <div class="track-slider">
        <input
          type="range"
          defaultValue={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
        />
        <progress value={value} min={min} max={max} />{" "}
      </div>
    </>
  );
}
