import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

//?market=EN

export const getPlaylistsTracks = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/playlists/${id}/tracks`);
      dispatch({
        type: actionTypes.GET_PLAYLIST_TRACKS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
