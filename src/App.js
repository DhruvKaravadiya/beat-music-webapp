import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import  VolumeSlider  from "./VolumeSlider/VolumeSlider"
import signUp from "./Sign Up/SignUp";
import Login from "./Login/Login";
import Player from "./Player/Player";
export default function App() {
  
  return (
    <>
    <Sidebar />
    <Player />

    </>
  );
}