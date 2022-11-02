import './sidebar.css';
import img1 from './images/sidebarlogo.png'; 
export default function Sidebar(){
    return(
        <div class = "sidebar">
            <div class = "sidebar-logo">
                <img src={require('./images/sidebarlogo.png')} alt=""/>
            </div>

            <div class = "sidebar-home-icon"></div>
            
            <div class = "sidebar-search-icon"></div>
            
            <div class = "sidebar-playlist-icon"></div>
            
            <div class = "sidebar-create-icon"></div>
            
            <div class = "sidebar-liked-icon"></div>
            
            <div class = "sidebar-profile-icon"></div>

            <div class = "sidebar-settings-icon"></div>
        </div>
    );
}