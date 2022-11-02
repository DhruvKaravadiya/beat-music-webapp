import './sidebar.css';
import beatlogo from './BeatLogoSidebar.jpg'; 
import Create from './Create.png'; 
import Home from './Home.png'; 
import Library from './Library.png'; 
import Liked from './Liked.png'; 
import Profile from './Profile.png'; 
import Search from './Search.png'; 
import Setting from './Setting.png'; 

export default function Sidebar(){
    return(
        <div class = "sidebar text-center">
            <div class = "sidebar-logo">
                <img src={beatlogo} alt=""/>
            </div>

            <div class = "sidebar-icons sidebar-home-icon">
            <img src={Home} alt=""/>

            </div>
            
            <div class = "sidebar-icons sidebar-search-icon">
            <img src={Search} alt=""/>

            </div>
            
            <div class = "sidebar-icons sidebar-library-icon">
            <img src={Library} alt=""/>

            </div>
            
            <div class = "sidebar-icons sidebar-create-icon">
            <img src={Create} alt=""/>

            </div>
            
            <div class = "sidebar-icons sidebar-liked-icon">
            <img src={Liked} alt=""/>

            </div>
            
            <div class = "sidebar-icons sidebar-profile-icon">
            <img src={Profile} alt=""/>

            </div>

            <div class = "sidebar-icons sidebar-settings-icon">
            <img src={Setting} alt=""/>

            </div>
        </div>
    );
}