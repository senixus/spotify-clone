import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserCurrentlyPlayingTrackReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_USER_CURRENTLY_PLAYING:
      return {
        ...state,
        currentlyPlaying: action.payload,
      };
    default:
      return state;
  }
};
