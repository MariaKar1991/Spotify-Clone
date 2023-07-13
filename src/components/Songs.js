import React from "react";
import gloveTalk from "../tracks/E.V.P - Glove Talk - 01 Glove Talk.mp3";
import razzo from "../tracks/Razzo - Endless Cycles (EP) - 02 Razzo - Natrón 152Bpm (1).mp3";
import cerebral from "../tracks/Headworks - Cerebral - 03 Cerebral.mp3";
import southwild from "../tracks/Southwild - Wild Times - 01 -It's On.mp3";
import koko from "../tracks/Slide - Slide - Kokopelli 13.mp3";
import swing from "../tracks/Slide - Swingadelic '20s.mp3";
import archaic from "../tracks/Archaic - Tree Dome.mp3";
import fagins from "../tracks/Fagin's Reject - 99 Bitches (Dirty Saffi remix) (1).mp3";
import demons from "../tracks/Chris Rich - These are New Demons.mp3";
import cat from "../tracks/V.A ◦ Discovalley Records - Synesthesia (Compiled by Teo) - 06 Paul Karma vs Satyros - Black Cat Blonde Hair.mp3";
import ReactAudioPlayer from "react-audio-player";

const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Glove Talk",
    artist: "E.V.P",
    song: gloveTalk,
    imgSrc: "https://f4.bcbits.com/img/a3676619956_10.jpg",
  },
  {
    id: 2,
    favourite: false,
    songName: "Natr​ó​n",
    artist: "Razzo",
    song: razzo,
    imgSrc: "https://f4.bcbits.com/img/a3189717115_10.jpg",
  },
  {
    id: 3,
    favourite: false,
    songName: "Cerebral",
    artist: "Headworks",
    song: cerebral,
    imgSrc: "https://f4.bcbits.com/img/a2528189452_10.jpg",
  },
  {
    id: 4,
    favourite: false,
    songName: "It's On!",
    artist: "Southwild",
    song: southwild,
    imgSrc: "https://f4.bcbits.com/img/a2520124184_10.jpg",
  },
  {
    id: 5,
    favourite: false,
    songName: "Slide",
    artist: "Kokopelli 13",
    song: koko,
    imgSrc: "https://f4.bcbits.com/img/a3819414444_10.jpg",
  },
  {
    id: 6,
    songName: "Swingadelic '20s",
    artist: "Slide",
    song: swing,
    imgSrc: "https://f4.bcbits.com/img/a4136020965_10.jpg",
  },
  {
    id: 7,
    favourite: false,
    songName: "Tree Dome",
    artist: "Archaic",
    song: archaic,
    imgSrc: "https://f4.bcbits.com/img/a0253161142_10.jpg",
  },
  {
    id: 8,
    favourite: false,
    songName: "99 Bitches",
    artist: "Fagin's Reject - (Dirty Saffi remix)",
    song: fagins,
    imgSrc: "https://f4.bcbits.com/img/a0106283081_10.jpg",
  },
  {
    id: 9,
    favourite: false,
    songName: "These are New Demons",
    artist: "Chris Rich",
    song: demons,
    imgSrc: "https://f4.bcbits.com/img/a3421703982_10.jpg",
  },
  {
    id: 10,
    favourite: false,
    songName: "Black Cat Blonde Hair",
    artist: "Paul Karma vs Satyros ",
    song:
      cat,
    imgSrc: "https://f4.bcbits.com/img/a0510614858_10.jpg",
  },
];

export { Songs };
