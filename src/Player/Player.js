import { ImVolumeLow } from "react-icons/im";
import { ImVolumeMedium } from "react-icons/im";
import { ImVolumeHigh } from "react-icons/im";
import { ImVolumeMute2 } from "react-icons/im";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import VolumeSlider from "../VolumeSlider/VolumeSlider";
import "./player.css";
import { useState } from "react";
export default function Player() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div class="music-player-block text-center">
        <div class="player">
          <div class="volume-container">
            <VolumeSlider
              value={value}
              handleChange={handleChange}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div class="track-frame">
            <div class="track-photo"></div>
            <span class="track-name">Till I Collapse</span>
            <div class="track-progress">
              <span class="track-elapsed">00:00</span>
              <input class="track-slider" type="range" min="0" max="100" />
              <span class="track-length">11:11</span>
            </div>
            <div class="track-play-control">
              <span class="play-previous">
                <IoPlaySkipBack />
              </span>
              <span class="play-stop">
                <IoPlay />
              </span>
              <span class="play-next">
                <IoPlaySkipForward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
