import React, { useEffect, useState } from "react";
import "./pages.css";
import image from "./music.jpg";

import image2 from "./music2.jpg";

import image3 from "./music3.jpg";

import image4 from "./music4.jpg";

import image5 from "./music5.jpg";
import { BsFillPlayCircleFill } from 'react-icons/bs';
export default function Home() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://639c6f3e42e3ad69273199eb.mockapi.io/music/music")
    .then((res)=> {
      return res.json();
    })
    .then((res)=>setData(res));
  });
  return (
    <>
      <div class="home-container">
        <span class="home-title">@ Home</span>
        <div class ="best-of-artist-block">
            <span class="best-of-artist-span">Best Of Artist</span>
            <a class="show-all" href=" ">SHOW ALL</a>
          
            <div class ="best-of-artist">
              <div class="best-of-artist-card card">
                <img src={image} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card">
                <img src={image2} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card">
                <img src={image3} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card">
                <img src={image4} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card">
                <img src={image5} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>

            </div>
        </div>
        <div class ="best-of-artist-block">
            <span class="best-of-artist-span">Category</span>
            <div class ="best-of-artist"></div>
        </div>
        <div class ="best-of-artist-block">
            <span class="best-of-artist-span">Recently Played</span>
            <div class ="best-of-artist"></div>
        </div>
        <div class ="best-of-artist-block">
            <span class="best-of-artist-span">On Top</span>
            <div class ="best-of-artist"></div>
        </div>
        <div class ="best-of-artist-block">
            <span class="best-of-artist-span">Recently Played</span>
            <div class ="best-of-artist"></div>
        </div>

      </div>
    </>
  );
}
