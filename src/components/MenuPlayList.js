import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

function MenuPlayList() {
  return (
    <div className="playListContainer">
      {/* Container for Playlist name and add icon */}
      <div className="nameContainer">
        <p>PlayList</p>
        <i>
          {/* Icon for adding a new playlist */}
          <FaPlus />
        </i>
      </div>

      {/* Scrollable container for displaying playlists */}
      <div className="playListScroll">
        {/* Mapping through the PlayList array to display each playlist */}
        {PlayList &&
          PlayList.map((list) => (
            <div className="playList" key={list.id}>
              {/* Icon representing a music note list */}
              <i className="list">
                <BsMusicNoteList />
              </i>

              {/* Playlist name */}
              <p>{list.name}</p>

              {/* Icon for deleting the playlist (trash icon) */}
              <i className="trash">
                <BsTrash />
              </i>
            </div>
          ))}
        ;
      </div>
    </div>
  );
}

export { MenuPlayList };
