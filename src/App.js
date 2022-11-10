import React, { useState } from "react";
import styled from "styled-components";
import  VolumeSlider  from "./VolumeSlider/VolumeSlider"

export default function App() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <VolumeSlider
        value={value}
        handleChange={handleChange}
        min={0}
        max={100} 
        step={1}>
      </VolumeSlider>
    </>
  );
}