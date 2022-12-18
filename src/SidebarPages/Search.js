import React from "react";
import { ImSearch } from "react-icons/im";
import "./pages.css";
export default function Search(){
    return(
        <>
        <div class="search-page">
            <div class = "search-bar">
                <ImSearch class = "search-icon"/>
                <input type="text" placeholder="Search"/>
            </div>
        </div>
        </>
    );
}