export const VIEW_USER_DETAILS = "VIEW_USER_DETAILS";
export const GET_PLAYLIST = "GET_PLAYLIST";
export const GET_PLAYLIST_TRACKS = "GET_PLAYLIST_TRACKS";

export const getUserDetails = (userDetails) => {
  return {
    type: VIEW_USER_DETAILS,
    userDetails,
  };
};

export const getPlaylist = (playlist) => {
  return {
    type: GET_PLAYLIST,
    playlist,
  };
};

export const setPlaylistTracks = (playlistTracks) => {
  return {
    type: GET_PLAYLIST_TRACKS,
    playlistTracks,
  };
};
