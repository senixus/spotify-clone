import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getPlaylistById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/playlists/${id}`);

      dispatch({
        type: actionTypes.GET_PLAYLIST_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
