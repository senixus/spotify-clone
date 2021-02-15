import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getAllNewReleasesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NEW_RELEASES:
      return {
        ...state,
        newReleases: action.payload,
      };
    default:
      return state;
  }
};
