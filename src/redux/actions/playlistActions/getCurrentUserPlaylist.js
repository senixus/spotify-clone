import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getCurrentUserPlaylist = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me/playlists");
      dispatch({
        type: actionTypes.GET_CURRENT_USER_PLAYLIST,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
