import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/me");
      dispatch({ type: actionTypes.GET_CURRENT_USER, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};
