/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */

import {
  VIEW_USER_DETAILS,
  GET_PLAYLIST,
  GET_PLAYLIST_TRACKS,
} from "./action.types";

let initialState = {
  userDetails: null,
  playlist: null,
  playlistTracks: null,
};

export default (state = initialState, action) => {
  const { userDetails, playlist, playlistTracks } = action;

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

    case GET_PLAYLIST_TRACKS:
      return {
        ...state,
        playlistTracks,
      };

    default:
      return state;
  }
};
