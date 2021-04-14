import React, { memo, useCallback, useEffect, useState } from "react";
import { getAccessToken } from "../../config/app.config";
import LoginPage from "./LoginPage";
import SpotifyWebApi from "spotify-web-api-js";

import AuthRoute from "../../routes/AuthRoute";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../../store/user/action.types";

const spotify = new SpotifyWebApi();

const HomePage = () => {
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const getMe = useCallback(() => {
    spotify
      .getMe()
      .then((user) => {
        console.log(user);
        dispatch(getUserDetails(user));
        window.location.hash = "";
      })
      .catch((err) => {
        console.error("Token expire ", err);
        localStorage.removeItem("token%");
      });
  }, [dispatch]);

  const setPlaylist = useCallback(() => {
    spotify.getUserPlaylists().then((data) => {
      console.log("Get Playlists", data);
    });
  }, []);

  useEffect(() => {
    // console.log(getAccessToken());

    let hasToken = getAccessToken();

    if (hasToken.access_token) {
      setToken(hasToken.access_token);
      spotify.setAccessToken(hasToken.access_token);
      localStorage.setItem("token%", JSON.stringify(hasToken.access_token));
      getMe();
      setPlaylist();
    } else {
      if (localStorage.getItem("token%")) {
        let token = JSON.parse(localStorage.getItem("token%"));
        spotify.setAccessToken(token);
        setToken(token);
        getMe();
        setPlaylist();
      }
    }
  }, [dispatch, getMe]);

  return (
    <>
      {token ? (
        <div className="container-fluid">
          <AuthRoute />
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
};

export default memo(HomePage);
