import "./mainframe.css";
import { RiHome2Fill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { RiFolderMusicFill } from "react-icons/ri";
import { MdAddBox } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import { ImVolumeLow } from "react-icons/im";
import { ImVolumeMedium } from "react-icons/im";
import { ImVolumeHigh } from "react-icons/im";
import { ImVolumeMute2 } from "react-icons/im";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
//GrHomeRounded
export default function Mainframe() {
  return (
    <>
      <div class="sidebar text-center">
        <div class="sidebar-logo">
          <svg
            width="53"
            height="60"
            viewBox="0 0 53 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3373 59.4154C23.9333 59.4154 21.5502 59.0911 19.2508 58.4488C16.2359 57.6056 13.4219 56.2436 10.8882 54.3982C9.77717 53.5885 8.72269 52.6868 7.75189 51.7181C3.20964 47.1758 0.491818 41.1522 0.102661 34.7542V7.79568C0.247026 7.64295 0.395575 7.4944 0.544124 7.34376C3.5151 4.37068 6.93801 1.95624 10.7208 0.165283V31.0488C10.6287 31.7225 10.5806 32.4297 10.5806 33.1348C10.5806 33.8399 10.6287 34.5471 10.7208 35.2354C11.179 38.629 12.7816 41.826 15.2337 44.2362C17.1481 46.1213 19.5291 47.4855 22.1151 48.178C23.4228 48.5295 24.7806 48.7073 26.1531 48.7073C26.2138 48.7073 26.2766 48.7073 26.3393 48.7052C30.4778 48.6571 34.3568 47.0042 37.2566 44.0542C40.1398 41.1251 41.7278 37.2481 41.7278 33.1348C41.7278 29.0235 40.1398 25.1466 37.2566 22.2154L37.1834 22.1401L26.5046 32.8189L33.4697 7.83334C37.7776 9.04475 41.7361 11.3671 44.9205 14.5515C49.8854 19.5164 52.6179 26.1153 52.6179 33.1348C52.6179 40.1563 49.8833 46.7574 44.9205 51.7181C39.9577 56.6829 33.3588 59.4154 26.3373 59.4154Z"
              fill="#21222C"
            />
            <path
              d="M10.6181 0.330574V31.0342C10.5261 31.7225 10.4779 32.4297 10.4779 33.1348C10.4779 33.8462 10.5261 34.5575 10.6202 35.25C11.0805 38.6667 12.6936 41.8845 15.1625 44.3115C17.0915 46.2092 19.4871 47.5817 22.0899 48.2784C23.4059 48.632 24.7742 48.8119 26.1551 48.8119C26.2179 48.8119 26.2806 48.8119 26.3392 48.8098C30.509 48.7617 34.4132 47.0984 37.3318 44.1274C40.2338 41.1795 41.8322 37.2753 41.8322 33.1348C41.8322 28.9963 40.2338 25.0922 37.3318 22.1422L37.1833 21.9915L26.7137 32.4611L33.5428 7.96097C37.7942 9.17656 41.7004 11.4759 44.8472 14.6248C49.7911 19.5687 52.5152 26.1425 52.5152 33.1348C52.5152 40.1292 49.7932 46.703 44.8472 51.6448C39.9032 56.5888 33.3294 59.3129 26.3371 59.3129C23.9436 59.3129 21.5689 58.9886 19.28 58.3505C16.2776 57.5115 13.474 56.1536 10.9508 54.3166C9.84399 53.509 8.79159 52.6114 7.82707 51.6469C3.30365 47.1256 0.59838 41.1271 0.209224 34.7563V7.83753C0.351496 7.68689 0.495861 7.54253 0.621395 7.41699C3.54425 4.49204 6.90648 2.10898 10.6181 0.330574ZM10.8273 0C6.9567 1.81188 3.45638 4.28281 0.472845 7.27053C0.311743 7.43163 0.154826 7.59065 0 7.75384V34.7605C0.403802 41.3991 3.26389 47.3767 7.67852 51.7913C8.6535 52.7663 9.70799 53.668 10.8273 54.4819C13.3297 56.3043 16.1646 57.6935 19.2235 58.5492C21.4873 59.1811 23.8725 59.52 26.3371 59.52C33.6244 59.52 40.2212 56.5658 44.9957 51.7913C49.7702 47.0189 52.7244 40.42 52.7244 33.1327C52.7244 25.8454 49.7702 19.2486 44.9957 14.4741C41.8239 11.3023 37.8486 8.93386 33.3984 7.70154L26.3371 33.0323V33.1348L37.1833 22.2886C39.9283 25.0797 41.623 28.9085 41.623 33.1348C41.623 37.3611 39.9304 41.1899 37.1833 43.981C34.4194 46.795 30.5844 48.5525 26.3371 48.6006C26.2764 48.6027 26.2158 48.6027 26.1551 48.6027C24.7679 48.6027 23.4226 48.4207 22.1443 48.0776C19.5269 47.3767 17.1836 46.0083 15.3089 44.163C12.9238 41.8176 11.296 38.7043 10.8273 35.2228C10.7353 34.5408 10.6872 33.8441 10.6872 33.1348C10.6872 32.4276 10.7353 31.7309 10.8273 31.0488V0Z"
              fill="#21222C"
            />
          </svg>
        </div>
        <div class="sidebar-icon-groups">
          <div class="sidebar-group-1">
            <div class="sidebar-icons">
              <RiHome2Fill class="sidebar-home sidebar-icon-animation sidebar-icon-size" />
            </div>

            <div class="sidebar-icons">
              <FaSearch class="sidebar-search sidebar-icon-animation sidebar-icon-size" />
            </div>

            <div class="sidebar-icons">
              <RiFolderMusicFill class="sidebar-library sidebar-icon-animation sidebar-icon-size" />
            </div>
          </div>
          <div class="sidebar-group-2">
            <div class="sidebar-icons">
              <MdAddBox class="sidebar-create sidebar-icon-animation sidebar-icon-size" />
            </div>

            <div class="sidebar-icons">
              <AiFillHeart class="sidebar-liked sidebar-icon-animation sidebar-icon-size" />
            </div>
          </div>
          <div class="sidebar-group-3">
            <div class="sidebar-icons">
              <IoPersonCircle class="sidebar-profile sidebar-icon-animation sidebar-icon-size" />
            </div>
            <div class="sidebar-icons sidebar-settings-icon">
              <RiSettings5Fill class="sidebar-settings sidebar-icon-animation sidebar-icon-size" />
            </div>
          </div>
        </div>
      </div>
      <div class="music-player-block text-center">
        <div class="player">
          <div class="volume-container">
            <div class="volume-icon"></div>
            <div class="volume-slider">
              <input type="range" min="0" max="100"/>
              <progress min="0" max="100" value="50"></progress>
            </div>
          </div>
          <div class="track-frame">
            <div class="track-photo"></div>
            <span class="track-name">Till I Collapse</span>
            <div class="track-progress">
              <span class="track-elapsed">00:00</span>
              <input class="track-slider" type="range" min="0" max="100" />
              <span class="track-length">11:11</span>
            </div>
            <div class="track-play-control">
              <span class="play-previous">
                <IoPlaySkipBack />
              </span>
              <span class="play-stop">
                <IoPlay />
              </span>
              <span class="play-next">
                <IoPlaySkipForward />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
