import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getUserCurrentPlayback = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me/player?market=ES");

      dispatch({
        type: actionTypes.GET_USER_CURRENTLY_PLAYBACK,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
