import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
