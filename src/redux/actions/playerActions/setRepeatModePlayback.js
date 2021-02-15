import * as actionTypes from "../actionTypes";
import axios from "../../../api/api";

export const setRepeatMode = () => {
  return async (dispatch) => {
    try {
      await axios.put("/me/player/repeat?state=context");

      dispatch({
        type: actionTypes.SET_REPEAT_MODE,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
