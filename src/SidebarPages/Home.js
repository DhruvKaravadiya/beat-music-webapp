import "./pages.css";
import image from "./music.jpg";
import image2 from "./music2.jpg";
import image3 from "./music3.jpg";
import image4 from "./music4.jpg";
import image5 from "./music5.jpg";
import lofi1 from "./lofi1.jpg";
import lofi2 from "./lofi2.jpg";
import lofi3 from "./lofi3.jpg";
import lofi4 from "./lofi4.jpg";
import lofi5 from "./lofi5.jpg";
import lofitype from "./lofitype.jpg"

import poptype from "./poptype.jpg"

import jazztype from "./jazztype.jpg"

import rocktype from "./rocktype.jpg"
import { BsFillPlayCircleFill } from 'react-icons/bs';
export default function Home() {
  return (
    <>
      <div class="home-container">
        <span class="home-title">@ Home</span>
        <div class ="best-of-artist-block">
            <span class="best-of-artist-span">Best Of Artist</span>
            <a class="show-all" href=" ">SHOW ALL</a>
          
            <div class ="best-of-artist">
              <div class="best-of-artist-card card text-center">
                <img src={image} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={image2} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={image3} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={image4} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={image5} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>

            </div>
        </div>
        <div class ="best-of-artist-block">
            <span class="best-of-artist-span">Category</span>
            <div class ="best-of-artist">
            <div class="best-of-artist-card card text-center">
                <img src={lofitype} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={jazztype} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={poptype} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={rocktype} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={lofi5} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
            </div>
        </div>
        <div class ="best-of-artist-block">
            <span class="best-of-artist-span">Recently Played</span>
            <div class ="best-of-artist">
              <div class="best-of-artist-card card text-center">
                <img src={lofi1} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={lofi2} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={lofi3} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={lofi4} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
              <div class="best-of-artist-card card text-center">
                <img src={lofi5} alt=""/>
                <span>Till I Collapse</span>
                <BsFillPlayCircleFill class="card-play-btn"/>
              </div>
            </div>
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
