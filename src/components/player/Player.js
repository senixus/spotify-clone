import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserCurrentlyPlayingTrack } from "../../redux/actions/playerActions/getUserCurrentlyPlayingTrack";
import { getUserCurrentPlayback } from "../../redux/actions/playerActions/getUserCurrentPlayback";
import "./player.scss";
import { RiPlayCircleLine, RiPauseCircleLine } from "react-icons/ri";
import { MdSkipNext, MdSkipPrevious, MdRepeat } from "react-icons/md";
import { startOrResumePlayback } from "../../redux/actions/playerActions/startOrResumePlayback";
import { pausePlayback } from "../../redux/actions/playerActions/pausePlayback";
import { skipPlaybackToPreviousTrack } from "../../redux/actions/playerActions/skipPlaybackTopPreviousTrack";
import { skipPlaybackNextToTrack } from "../../redux/actions/playerActions/skipPlaybackToNextTrack";
import { setRepeatMode } from "../../redux/actions/playerActions/setRepeatModePlayback";

const Player = () => {
  const dispatch = useDispatch();
  const getCurrentPlayback = () => dispatch(getUserCurrentPlayback());
  const playback = useSelector(
    (state) => state.currentlyPlayback.currentlyPlayback
  );
  const startOrResume = () => dispatch(startOrResumePlayback());
  const pause = () => dispatch(pausePlayback());
  const skipPrevious = () => dispatch(skipPlaybackToPreviousTrack());
  const skipNext = () => dispatch(skipPlaybackNextToTrack());
  const repeat = () => dispatch(setRepeatMode());

  useEffect(() => {
    getCurrentPlayback();
  });

  const convertDurationMs = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className="player">
      {playback.item && (
        <div className="player-details" key={playback.item.id}>
          <div className="player-details__info">
            <div>
              <img src={playback.item.album.images[1].url} height="80px" />
            </div>
            <div className="artists-info">
              <p>{playback.item.name}</p>
              <p>{playback.item.artists[0].name}</p>
            </div>
          </div>
          <div className="start-or-resume">
            <button onClick={() => skipPrevious()}>
              <MdSkipPrevious />
            </button>
            <button onClick={() => startOrResume()}>
              <RiPlayCircleLine />
            </button>
            <button onClick={() => pause()}>
              <RiPauseCircleLine />
            </button>
            <button onClick={() => skipNext()}>
              <MdSkipNext />
            </button>
            <button onClick={() => repeat()}>
              <MdRepeat />
            </button>
          </div>
          <div className="duration-info">
            <p>{convertDurationMs(playback.progress_ms)}</p>
            <p>{convertDurationMs(playback.item.duration_ms)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Player;
