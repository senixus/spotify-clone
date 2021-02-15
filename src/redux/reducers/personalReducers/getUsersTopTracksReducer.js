import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserTopTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_TOP_TRACKS:
      return {
        ...state,
        topTracks: action.payload,
      };
    default:
      return state;
  }
};
