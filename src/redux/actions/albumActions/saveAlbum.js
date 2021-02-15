import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

// id bak
export const saveAlbums = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/me/albums");
      dispatch({
        type: actionTypes.SAVE_ALBUMS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
