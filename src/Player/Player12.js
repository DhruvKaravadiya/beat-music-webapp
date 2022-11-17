
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import { GiPauseButton } from "react-icons/gi";
import VolumeSlider from "../VolumeSlider/VolumeSlider";
import "./player.css";
import { useState } from "react";
import TrackSlider from "./TrackSlider";
export default function Player() {
  const [volValue, setVolValue] = useState(50);

  const handleVolChange = (event) => {
    setVolValue(event.target.value);
  };

  const [trackvalue, settrackvalue] = useState(50);
  const handletrackchange = (trackevent) => {
    settrackvalue(trackevent.target.value);
  }
  return (
    <>
      <div class="music-player-block text-center">
        <div class="player">
          <div class="volume-container">
            <VolumeSlider
              value={volValue}
              handleChange={handleVolChange}
              min={0}
              max={100}
              step={1}
            />
          </div>
          <div class="track-frame">
            <div class="track-photo"></div>
            <span class="track-name">Till I Collapse</span>
              <div class="track-slider">
               <TrackSlider
                 value={trackvalue}
                 handleChange = {handletrackchange}
                 min = {0}
                 max = {100}
                 step= {1}
                />
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


