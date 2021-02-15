import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getUserAlbums = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me/albums?limit=7");

      dispatch({
        type: actionTypes.GET_USER_ALBUMS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
