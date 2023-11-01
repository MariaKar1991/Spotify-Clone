import React from "react";
import "../Styles/LeftMenu.css";

import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { MenuList } from "./MenuList";
import { Menu } from "../components/Menu.js";
import { FaBroadcastTower } from "react-icons/fa";
import { MenuPlayList } from "./MenuPlayList";
import { TrackList } from "./TrackList";

function LeftMenu() {
  return (
    <div className="leftMenu">
      {/* Logo Section */}
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>

      {/* Search Box */}
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>

      {/* Main Menu */}
      {/* Assuming MenuList is an array of menu items */}
      <Menu title={"Menu"} menuObject={MenuList} />

      {/* Playlist Menu */}
      <MenuPlayList />

      {/* Track List */}
      <TrackList />
    </div>
  );
}

export { LeftMenu };
