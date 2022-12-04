import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Sidebar from "./Sidebar/Sidebar";
// import Player from "./SongPlayer/Player";
// import Account from "./SidebarPages/Account";
// import Liked from "./SidebarPages/Liked";
// import Create from "./SidebarPages/Create";
// import Home from "./SidebarPages/Home";
// import Library from "./SidebarPages/Library";
// import Search from "./SidebarPages/Search";
// import Settings from "./SidebarPages/Settings";
import Layout from "./MainLayout/Layout";
// import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Layout />
    {/* <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="index/search" element={<Search />} />
        <Route path="index/library" element={<Library />} />
        <Route path="index/create" element={<Create />} />
        <Route path="index/liked" element={<Liked />} />
        <Route path="index/account" element={<Account />} />
        <Route path="index/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
    <Player  class="i-player"/> */}
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
