import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Login from "./Login/Login"
import TrackSlider from "./Player/TrackSlider";
import SignUp from './Sign Up/SignUp';
import styled from "styled-components";
import Player from "./SongPlayer/Player";
import Front from './Front/Front';
export default function App() {

  return (
    <>

    <Front />
    </>
  );
}

const Body = styled.div`
  padding:1.5rem;
`