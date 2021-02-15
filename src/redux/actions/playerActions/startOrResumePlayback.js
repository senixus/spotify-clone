import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

//?market=EN

export const startOrResumePlayback = () => {
  return async (dispatch) => {
    try {
      await axios.post("/me/player/play");
      dispatch({
        type: actionTypes.START_OR_RESUME_PLAYBACK,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
