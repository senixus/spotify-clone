import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getRecommendationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload,
      };
    default:
      return state;
  }
};
