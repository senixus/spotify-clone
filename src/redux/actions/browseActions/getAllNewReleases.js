import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getAllNewReleases = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/browse/new-releases?limit=7");

      dispatch({
        type: actionTypes.GET_NEW_RELEASES,
        payload: response.data.albums,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
