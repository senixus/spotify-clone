import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getUserShows = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me/shows?limit=7");
      dispatch({ type: actionTypes.GET_USER_SHOWS, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
