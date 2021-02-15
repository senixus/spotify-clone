import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserCurrentlyPlaybackReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_USER_CURRENTLY_PLAYBACK:
      return {
        ...state,
        currentlyPlayback: action.payload,
      };
    default:
      return state;
  }
};
