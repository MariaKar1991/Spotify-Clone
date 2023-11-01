import React, { useState, useRef, useEffect } from "react";
import "../Styles/MusicPlayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaStepBackward,
  FaBackward,
  FaPause,
  FaPlay,
  FaForward,
  FaStepForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
//import ReactAudioPlayer from "react-audio-player";

function MusicPlayer({ song, imgSrc }) {
  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    // Calculate the total duration of the audio track
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    // Play or pause the audio track and manage animation frame
    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }

    setPlaying(!isPlaying);
  };

  const CalculateTime = (sec) => {
    // Convert seconds to minutes and seconds in the format "MM:SS"
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };

  const whilePlaying = () => {
    // Update the progress bar and current time while the audio is playing
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeProgress = () => {
    // Change the current time of the audio track based on the progress bar value
    audioPlayer.current.currentTime = progressBar.current.value;
  };

  const changeCurrentTime = () => {
    // Update the custom CSS property for progress bar styling
    progressBar.current.style.setProperty(
      "--player-played",
      `${(progressBar.current.value / duration) * 100}%`
    );

    // Update the current time state
    setCurrentTime(progressBar.current.value);
  };

  const changeLoved = () => {
    // Toggle the loved state
    setLoved(!isLove);
  };

  return (
    <div className="musicPlayer">
      {/* Display song image */}
      <div className="songImage">
        <img src={imgSrc} alt="" />
      </div>
      {/* Display song attributes and controls */}
      <div className="songAttributes">
        {/* Audio element for playing the song */}
        <audio src={song} preload="metadata" ref={audioPlayer} />

        {/* Top section with love icon, download icon, and controls */}
        <div className="top">
          <div className="left">
            {/* Love icon */}
            <div className="loved" onClick={changeLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            {/* Download icon */}
            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            {/* Backward, Play/Pause, and Forward controls */}
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            {/* Share icon */}
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        {/* Bottom section with current time, progress bar, and duration */}
        <div className="bottom">
          {/* Display current time */}
          <div className="currentTime">{CalculateTime(currentTime)}</div>
          {/* Progress bar for tracking the current time */}
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            onChange={changeProgress}
          />
          {/* Display total duration of the song */}
          <div className="duration">
            {duration && !isNaN(duration) && CalculateTime(duration)
              ? CalculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
