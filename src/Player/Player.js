
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { GiPauseButton } from "react-icons/gi";
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
            ></VolumeSlider>
          </div>
          <div class="track-frame">
            <div class="track-photo"></div>
            <span class="track-name">Till I Collapse</span>
              <div class="track-slider">
                <input class="track-slider" type="range" min="0" max="100" />
                <progress class="track-progress" min="0" max="100" value="50"></progress>
              
              
            </div>
            <span class="track-elapsed">00:00</span>
              <span class="track-length">11:11</span>
            <div class="track-play-control">
              <span class="play-previous play-btns">
                <IoPlaySkipBack class="play-icon" id="prev" />
              </span>
              <span class="play-stop  play-btns">
                <GiPauseButton class="play-icon" id="playstop" />
              </span>
              <span class="play-next play-btns">
                <IoPlaySkipForward class="play-icon" id="next" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
