import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaPlay, faPause, faForward, FaBackward } from "react-icons/fa";

function PlayerControl(props) {
  return (
    <div className="music-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={FaBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={FaPlay} />
      </button>
    </div>
  );
}

export default PlayerControl;
