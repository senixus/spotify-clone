import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserRecentlyPlaybackTrackReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_USER_RECENTLY_PLAYED_TRACK:
      return {
        ...state,
        recentlyTrack: action.payload,
      };
    default:
      return state;
  }
};
