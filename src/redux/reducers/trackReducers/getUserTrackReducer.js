import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_TRACK:
      return {
        ...state,
        userTrack: action.payload,
      };

    default:
      return state;
  }
};
