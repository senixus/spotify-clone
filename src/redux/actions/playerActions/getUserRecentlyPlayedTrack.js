import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

//?market=EN

export const getUserRecentlyPlayedTrack = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me/player/recently-played");
      dispatch({
        type: actionTypes.GET_USER_RECENTLY_PLAYED_TRACK,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
