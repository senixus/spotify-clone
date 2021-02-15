import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};
