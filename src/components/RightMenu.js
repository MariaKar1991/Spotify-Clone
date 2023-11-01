import React from "react";
import "../Styles/RightMenu.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile4 from "../img/profile4.jpeg";

function RightMenu() {
  return (
    <div className="rightMenu">
      {/* Go Pro section with crown icon, "Go Pro" text, bell icon, and heart icon */}
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            Go <span>Pro</span>
          </p>
        </i>
        <i>
          <FaBell />
        </i>
        <i>
          <FaRegHeart />
        </i>
      </div>

      {/* Profile section with sun icon, settings icon, and user profile image */}
      <div className="profile">
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>

        {/* User profile image */}
        <div className="profileImage">
          <img src={Profile4} alt="" />
        </div>
      </div>
    </div>
  );
}

export { RightMenu };
