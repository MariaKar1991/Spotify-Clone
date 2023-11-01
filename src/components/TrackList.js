import React from "react";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from "../img/track.png";

function TrackList() {
  return (
    <div className="trackList">
      {/* Top section with track image and name */}
      <div className="top">
        {/* Track image */}
        <img src={Track} alt="" />

        {/* Track name with artist */}
        <p className="trackName">
          Sample Name <span className="trackSpan">Artist</span>
        </p>
      </div>

      {/* Bottom section with volume icon, volume range input, music note list icon, and desktop icon */}
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        {/* Volume range input */}
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export { TrackList };
