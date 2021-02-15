import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getUserCurrentlyPlayingTrack = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "/me/player/currently-playing?market=ES"
      );

      dispatch({
        type: actionTypes.GET_USER_CURRENTLY_PLAYING,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
