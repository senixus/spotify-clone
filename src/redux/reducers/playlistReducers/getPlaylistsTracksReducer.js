import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getPlaylistsTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PLAYLIST_TRACKS:
      return {
        ...state,
        playlistTracks: action.payload,
      };

    default:
      return state;
  }
};
