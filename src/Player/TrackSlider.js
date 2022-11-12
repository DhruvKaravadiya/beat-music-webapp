import React from "react";
export default function TrackSlider(
  trackvalue,
  handletrackchange,
  trackmin,
  trackmax,
  trackstep
) {
  return (
    <>
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
    </>
  );
}
