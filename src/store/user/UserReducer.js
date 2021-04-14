/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

import { VIEW_USER_DETAILS, GET_PLAYLIST } from "./action.types";

let initialState = {
  userDetails: null,
  playlist: null,
};

export default (state = initialState, action) => {
  const { userDetails, playlist } = action;

  switch (action.type) {
    case VIEW_USER_DETAILS:
      return {
        ...state,
        userDetails,
      };
    case GET_PLAYLIST:
      return {
        ...state,
        playlist,
      };

    default:
      return state;
  }
};
