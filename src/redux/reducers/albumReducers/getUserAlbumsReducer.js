import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getUserAlbumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_ALBUMS:
      return {
        ...state,
        userAlbums: action.payload,
      };
    default:
      return state;
  }
};
