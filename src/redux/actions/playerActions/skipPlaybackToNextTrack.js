import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const skipPlaybackNextToTrack = () => {
  return async (dispatch) => {
    try {
      await axios.post("/me/player/next");
      dispatch({
        type: actionTypes.SKIP_PLAYBACK_NEXT,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
