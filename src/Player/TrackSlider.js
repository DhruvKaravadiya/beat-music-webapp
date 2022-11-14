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
        class="track-slider"
        type="range"
        defaultValue={trackvalue}
        onChange={handletrackchange}
        min={trackmin}
        max={trackmax}
        step={trackstep}
      />
      <progress class="track-progress" 
        value={trackvalue}
        min={trackmin}
        max={trackmax}
        step={trackstep}>
        </progress>
        </div>
    </>
  );
}
