import React, { useState, useEffect } from "react";
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";
import { Songs } from "./Songs"; // Assuming this file contains an array of song objects
import { MusicPlayer } from "./MusicPlayer";

function AudioList() {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImage] = useState(Songs[0].imgSrc);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active"); // 'this' might not refer to the clicked element, consider using event argument.
    }

    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavourite = (id) => {
    // Use map and Object.assign for immutability
    setSongs((prevSongs) =>
      prevSongs.map((prevSong) =>
        prevSong.id === id
          ? { ...prevSong, favourite: !prevSong.favourite }
          : prevSong
      )
    );
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImage(imgSrc);
  };

  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{`${Songs.length} songs `}</span>
      </h2>

      <div className="songsContainer">
        {songs.map((song, index) => (
          <div
            className="songs"
            key={song?.id}
            onClick={() => setMainSong(song?.song, song?.imgSrc)}
          >
            <div className="count">{`#${index + 1}`}</div>
            <div className="song">
              <div className="imgBox">
                <img src={song?.imgSrc} alt="" />
              </div>

              <div className="section">
                <p className="songName">
                  {song?.songName}
                  <span className="spanArtist">{song?.artist}</span>
                </p>

                <div className="hits">
                  <p className="hit">
                    <i>
                      <FaHeadphones />
                    </i>{" "}
                    96,564,292
                  </p>

                  <p className="duration">
                    <i>
                      <FaRegClock />
                    </i>{" "}
                    03.04
                  </p>

                  <div
                    className="favourite"
                    onClick={() => changeFavourite(song?.id)} // Correcting 'onclick' to 'onClick'
                  >
                    {song?.favourite ? (
                      <i>
                        <FaHeart />
                      </i>
                    ) : (
                      <i>
                        <FaRegHeart />
                      </i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} />
    </div>
  );
}

export { AudioList };
