import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getAllFeaturedPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_FEATURED:
      return {
        ...state,
        featured: action.payload,
      };
    default:
      return state;
  }
};
