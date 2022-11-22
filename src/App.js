import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Login from "./Login/Login"
import TrackSlider from "./Player/TrackSlider";
import SignUp from './Sign Up/SignUp';
import styled from "styled-components";
import Player from "./SongPlayer/Player";
import Front from './Front/Front';
import Playlist from "./SongPlayer/Playlist";
export default function App() {

  return (
    <>
<Body><Sidebar/>
    <Player />
    </Body>    </>
  );
}

const Body = styled.div`
  padding:1.5rem;
`