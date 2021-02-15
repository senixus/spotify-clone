import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getUserTrack = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me/tracks");
      dispatch({ type: actionTypes.GET_USER_TRACK, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
