import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getAllFeatured = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/browse/featured-playlists?limit=7");
      dispatch({
        type: actionTypes.GET_ALL_FEATURED,
        payload: response.data.playlists,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
