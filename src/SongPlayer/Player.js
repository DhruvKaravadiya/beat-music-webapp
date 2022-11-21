import React from "react";
import "./Player.css";
import { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import {
  BsSkipBackwardFill,
  BsSkipForwardFill,
  BsPlayFill,
  BsPauseFill,
} from "react-icons/bs";
import {
  ImVolumeMute2,
  ImVolumeLow,
  ImVolumeHigh,
  ImVolumeMedium,
} from "react-icons/im";
import {
  TbRepeat,
  TbArrowsShuffle,
  TbRepeatOnce,
  TbRepeatOff,
} from "react-icons/tb";
import Eminem from "./Eminem.png";
import VolumeSlider from "./VolumeSlider";
import TrackSlider from "./TrackSlider";



export default function Player() {
  const [volumeValue, setVolumeValue] = useState(50);

  const handleVolumeChange = (event) => {
    setVolumeValue(event.target.value);
  };
  const [trackvalue, settrackValue] = useState(0);

  const handletrackChange = (trackevent) => {
    settrackValue(trackevent.target.value);
  };

  return (
    <>
      <div class="player-container">
        <div class="first-block">
          <div class="like-icon">
            <svg
              id="liked"
              class="liked edit1 edit2"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.568 10.2447L21.5026 10.3168L21.4721 10.3672L15.334 16.6162C13.5212 18.4613 10.4788 18.4612 8.66672 16.6163L8.66667 16.6163L2.5279 10.3672L2.4975 10.3169L2.43218 10.2449C1.53776 9.25985 1 7.97374 1 6.56951C1 3.52002 3.55069 1 6.75565 1C8.56901 1 10.1803 1.80992 11.2328 3.0699L12.0003 3.98859L12.7677 3.0699C13.8203 1.80988 15.431 1 17.2449 1C20.4493 1 23 3.51996 23 6.56951C23 7.97447 22.4627 9.25988 21.568 10.2447Z"
                fill="#F67341"
                stroke="#F67341"
                stroke-width="2"
              />
            </svg>
          </div>
          <div class="track-image">
            <img src={Eminem} class="image" alt="" />
          </div>
          <span class="track-name">Till I Collapse</span>
          <span class="track-artist ">Eminem</span>
          <div class="track-slider-block">
            <div class="track-time">
              <span class="track-elapsed">{trackvalue}</span>
              <span class="track-length">3.20</span>
            </div>
            <TrackSlider
              class="trackSlider"
              value={trackvalue}
              handleChange={handletrackChange}
              min={0}
              max={3.2}
              step={0.01}
            />
          </div>
        </div>
        <div class="track-control">
          <div class="track-icons">
            <div class="track-control-icon track-download">
              <HiOutlineDownload />
            </div>
            <div class="track-control-icon track-prev">
              <BsSkipBackwardFill />
            </div>

            <div
              class="track-control-icon track-play-pause"
            >
              <BsPlayFill />
            </div>
            <div class="track-control-icon track-next" >
              <BsSkipForwardFill />
            </div>
            <div class="track-control-icon track-repeat" >
              <TbRepeat />
            </div>
          </div>
        </div>
        <div class="track-volume-block">
          {volumeValue == 0 && <ImVolumeMute2 class="volume-icon" />}
          {volumeValue > 0 && volumeValue <= 33 && (
            <ImVolumeLow class="volume-icon" />
          )}
          {volumeValue > 33 && volumeValue <= 66 && (
            <ImVolumeMedium class="volume-icon" />
          )}
          {volumeValue > 66 && <ImVolumeHigh class="volume-icon" />}
          <VolumeSlider
            class="volumeSlider"
            value={volumeValue}
            handleChange={handleVolumeChange}
            min={0}
            max={100}
            step={1}

          />
        </div>
      </div>
    </>
  );
}
