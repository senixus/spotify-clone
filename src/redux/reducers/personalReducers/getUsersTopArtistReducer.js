import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserTopArtistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_TOP_ARTIST:
      return {
        ...state,
        topArtists: action.payload,
      };
    default:
      return state;
  }
};
