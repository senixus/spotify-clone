import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getPlaylistIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYLIST_BY_ID:
      return {
        ...state,
        playlistId: action.payload,
      };

    default:
      return state;
  }
};
