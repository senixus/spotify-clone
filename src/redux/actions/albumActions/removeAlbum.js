import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

// ids

export const removeAlbums = () => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/me/albums");
      dispatch({
        type: actionTypes.REMOVE_ALBUM,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
