import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
      };

    default:
      return state;
  }
};
