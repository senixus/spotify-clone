import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const playlist = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/users/${id}/playlists`);
      dispatch({ type: actionTypes.GET_USER_PLAYLIST, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
