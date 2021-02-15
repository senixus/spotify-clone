import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getUserProfile = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/users/${id}`);
      dispatch({ type: actionTypes.GET_CURRENT_USER, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
