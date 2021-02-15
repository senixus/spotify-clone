import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getUserTopArtist = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me/top/artists?limit=7");
      dispatch({
        type: actionTypes.GET_USER_TOP_ARTIST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserTopTracks = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me/top/tracks?limit=7");
      dispatch({
        type: actionTypes.GET_USER_TOP_TRACKS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
