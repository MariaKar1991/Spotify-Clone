import React from "react";
import Artist from "../img/artist.jpg";
import Check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner">
      <img src={Artist} alt="Artist" className="bannerImg" />

      <div className="content">
        <div className="breadCrumb">
          <p>
            Home <span>/ Popular Artist</span>
          </p>

          <i>
            <FaEllipsisH />
          </i>
        </div>

        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Nirvana</h2>
              <img src={Check} alt="Check" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              12,234,1911 <span>Monthly listeners</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottomLayer"></div>
    </div>
  );
}

export { Banner };

