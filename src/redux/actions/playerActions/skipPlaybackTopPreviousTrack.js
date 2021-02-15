import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const skipPlaybackToPreviousTrack = () => {
  return async (dispatch) => {
    try {
      await axios.post("/me/player/previous");
      dispatch({
        type: actionTypes.SKIP_PLAYBACK_PREVIOUS,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
