import React from "react";
import './TrackSlider.css';
export default function TrackSlider(
  trackvalue,
  handletrackchange,
  trackmin,
  trackmax,
  trackstep
) {
  return (
    <>
    <div class = "track-slider-container">
      <input
        class="track-sliders"
        type="range"
        defaultValue={trackvalue}
        onChange={handletrackchange}
        min={trackmin}
        max={trackmax}
        step={trackstep}
      />
      <progress class="track-progresss" 
        value="50"
        min="0"
        max="100"
        step={trackstep}>
        </progress>
        </div>
    </>
  );
}
