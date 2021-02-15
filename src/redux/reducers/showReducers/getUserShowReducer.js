import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserShowReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_SHOWS:
      return {
        ...state,
        userShows: action.payload,
      };

    default:
      return state;
  }
};
