import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

// let spotifyApi = new SpotifyWebApi();

const PlayPage = () => {
  useEffect(() => {
    // let token = JSON.parse(localStorage.getItem("token%"));
    // console.log("log", token);
    // if (token) {
    //   spotifyApi.setAccessToken(token);
    //   spotifyApi.getUserPlaylists().then((data) => {
    //     console.log("User playlists", data);
    //   });
    // }
  }, []);
  return (
    <>
      <div className="play_page">
        <h1>Hi This is play Page</h1>
      </div>
    </>
  );
};

export default PlayPage;
