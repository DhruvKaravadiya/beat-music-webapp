import React from "react";
import styled from "styled-components";
import { ImVolumeLow } from "react-icons/im";
import { ImVolumeMedium } from "react-icons/im";
import { ImVolumeHigh } from "react-icons/im";
import { ImVolumeMute2 } from "react-icons/im";
export default function VolumeSlider({ value, handleChange, min, max, step }) {
  return (
    <>
      <SpanTag>
      {value > 0 && value <= 33 && <ImVolumeLow class = "volume-value-icon"/>}
          {value > 33 && value <= 66 && <ImVolumeMedium class = "volume-value-icon"/>}
          {value > 66 && <ImVolumeHigh class = "volume-value-icon"/>}
          {value == 0 && <ImVolumeMute2 class = "volume-value-icon"/>}</SpanTag>
        <SliderContainer class="volume-slider-container">
          
          <Slider
            class="volume-slider"
            type="range"
            defaultValue={value}
            onChange={handleChange}
            min={min}
            max={max}
            step={step}
          />
          <ProgressBar min={min} max={max} step={step} value={value}/>
     
        </SliderContainer>
    </>
  );
}


const SpanTag = styled.span`
width:20px;
height: 20px;
background-color:blue;
position: absolute;
z-index:2;
`
const SliderContainer = styled.div`  
  width: 70%;
  height: 40px;
  display:flex;
  top:50;
  position:relative;
  background-color:yellow;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: center;
  `;
const Slider = styled.input`
  -webkit-appearance:none;
  position:absolute;
  height:3.5px;
  width:50%;
  -webkit-transition:0.2s;
  transition:opacity 0.2s;
  background-color:transparent;
  outline:none;
  border:0;
  z-index:9;  
  
  ::-webkit-slider-thumb{
    -webkit-appearance:none;
    height:7px;
    width:7px;
    border-radius:15px;
    background-color:transparent;
    outline:none;
    border:0;
    cursor:pointer;
  }
  ::-webkit-slider-thumb:hover{
    background-color:orangered;
  }
  ::moz-rage-thumb{
    height:7px;
    width:7px;
    border-radius:15px;
    background-color:transparent;
    outline:none;
    border:0;
    cursor:pointer;
  }
  ::moz-rage-thumb:hover{
    background-color:orangered;
  }
`
  const ProgressBar = styled.progress`
  -webkit-appearance:none;
  width:50%;
  height: 3.5px;
  background-color: #21222C;
  overflow: hidden;
  position:absolute;

  ::-webkit-progress-bar{
    background-color: #D9D9D9;
}
  ::-webkit-progress-value{
    background-color: #21222C;
}
`
