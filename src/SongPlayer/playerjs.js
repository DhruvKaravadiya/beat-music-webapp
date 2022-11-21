const track_name = document.querySelector(" .track-name");
const track_image = document.querySelector(" .track-image img");
const track_artist = document.querySelector(".track-artist");
const play_pause_btn = document.querySelector(" .track-play-pause");
const next_btn = document.querySelector(" .track-next");
const download_bnt = document.querySelector(" .track-download");
const suffler_btn = document.querySelector(" .track-repeat");
const volume_slider = document.querySelector(" .volumeSlider");
const track_slider = document.querySelector(" .trackSlider");
const track_elapsed = document.querySelector(" .track-elapsed");
const track_length = document.querySelector(" .track-length");
const curr_track = document.createElement("audio");
const colorFlag = true;
const track_index = 0;
const isPlaying = false;
const isRandom = false;
let updateTimer;

const music_list = [
  {
    img: "./Eminem.png",
    name: "Till I Collapse",
    music: "./TillICollapse.mp3",
    artist: "./Eminem",
  },
  {
    img: "./Beautiful.jpeg",
    name: "Beautiful",
    music: "./Beautiful.mp3",
    artist: "Slim Shady",
  },
];
const likeToggler = () => {
  if (colorFlag) {
    colorFlag = false;
    // const liked = document.getElementById("liked");
    // liked.classList.toggle("");

    document.getElementById("liked").style.fill = "#222327";
  } else {
    colorFlag = true;
    document.getElementById("liked").style.stroke = "#F67341";
  }
};

loadTrack(track_index);
function loadTrack(track_index) {
  clearInterval(updateTimer);
  reset();
  curr_track.src = music_list[track_index].music;
  curr_track.load();

  track_image.style.backgroundImage =
    "url(" + music_list[track_index].img + ")";
  track_name.textContent = music_list[track_index].name;
  track_artist.textContent = music_list[track_index].artist;

  updateTimer = setInterval(setUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
}

function reset() {
  track_elapsed.textContent = "00:00";
  track_length.textContent = "00:00";
  track_slider.value = 0;
}



function repeatTrack() {
  const current_index = track_index;
  loadTrack(current_index);
  playTrack();
}
function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
  curr_track.play();
  isPlaying = true;

  play_pause_btn.innerHTML = '<BsPauseFill />';
}
function pauseTrack(){
curr_track.pause();
isPlaying = false;

play_pause_btn.innerHTML = '<BsPlayFill />';
}
function nextTrack(){
if(track_index < music_list.length - 1 && isRandom === false){
    track_index += 1;
}else if(track_index < music_list.length - 1 && isRandom === true){
    const random_index = Number.parseInt(Math.random() * music_list.length);
    track_index = random_index;
}else{
    track_index = 0;
}
loadTrack(track_index);
playTrack();
}
function previousTrack(){
if(track_index > 0){
    track_index -= 1;
}else{
    track_index = music_list.length -1;
}
loadTrack(track_index);
playTrack();
}
function seekTo() {    const seekto = curr_track.duration * (track_slider.value / 100);
curr_track.currentTime = seekto;}

function setUpdate() {
  const seekPosition = 0;
  if(!isNaN(curr_track.duration)){
      seekPosition = curr_track.currentTime * (100 / curr_track.duration);
      track_slider.value = seekPosition;

      const currentMinutes = Math.floor(curr_track.currentTime / 60);
      const currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
      const durationMinutes = Math.floor(curr_track.duration / 60);
      const durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

      if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
      if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
      if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
      if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

      track_elapsed.textContent = currentMinutes + ":" + currentSeconds;
      track_length.textContent = durationMinutes + ":" + durationMinutes;
  }
}
function setVolume() {curr_track.volume = volume_slider.value / 100;}
