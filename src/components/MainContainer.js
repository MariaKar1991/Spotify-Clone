import React, { useEffect } from "react";
import "../Styles/MainContainer.css";
import { Banner } from "./Banner";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "./AudioList";

function MainContainer() {
  // Effect to handle menu item click events
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  return (
    <div className="mainContainer">
      {/* Banner Section */}
      <Banner />

      {/* Menu List Section */}
      <div className="menuList">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>

        {/* Followers Information */}
        <p>
          <i>
            <FaUsers />
          </i>
          12.4M <span>Followers</span>
        </p>
      </div>

      {/* Audio List Section */}
      <AudioList />
    </div>
  );
}

export { MainContainer };
