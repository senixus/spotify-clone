import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

//?market=EN

export const pausePlayback = () => {
  return async (dispatch) => {
    try {
      await axios.post("/me/player/pause");
      dispatch({
        type: actionTypes.PAUSE_PLAYBACK,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
