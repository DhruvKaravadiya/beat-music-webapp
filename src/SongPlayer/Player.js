import React from "react";
import "./Player.css";
import { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import {BsSkipBackwardFill,BsSkipForwardFill, BsPlayFill,BsPauseFill,} from "react-icons/bs";
import {ImVolumeMute2,ImVolumeLow,ImVolumeHigh,ImVolumeMedium,} from "react-icons/im";
import { TbRepeat } from "react-icons/tb";
import Eminem from "./Eminem.png";
import VolumeSlider from "./VolumeSlider";
import TrackSlider from "./TrackSlider";

export default function Player() {

   
    const [value, setValue] = useState(50);

    const handleChange = (event) => {
      setValue(event.target.value);
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
            <RiHeartLine class="liked" />
          </div>
          <div class="track-image">
            <img src={Eminem} class="image" alt="" />
          </div>
          <span class="track-name">Till I Collapse</span>
          <div class="track-slider-block">
            <div class="track-time">
              <span class="track-elapsed">0.00</span>
              <span class="track-length">3.20</span>
            </div>
            <TrackSlider value={trackvalue}
        handleChange={handletrackChange}
        min={0}
        max={100}
        step={1}/>
          </div>
        </div>
        <div class="track-control">
          <div class="track-icons">
            <HiOutlineDownload class="track-control-icon" />
            <BsSkipForwardFill class="track-control-icon" />
            <BsPlayFill class="track-control-icon" />
            <BsSkipBackwardFill class="track-control-icon" />
            <TbRepeat class="track-control-icon" />
          </div>
        </div>
        <div class="track-volume-block">
          <ImVolumeMedium class="volume-icon" />
            <VolumeSlider value={value}
        handleChange={handleChange}
        min={0}
        max={100}
        step={1}/>

        </div>
      </div>
    </>
  );
}
