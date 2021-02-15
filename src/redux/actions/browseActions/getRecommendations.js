import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

// zorunlu parametreler var bak

export const getRecommendations = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/recommendations");
      dispatch({
        type: actionTypes.GET_RECOMMENDATIONS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
