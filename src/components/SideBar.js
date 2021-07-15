import React from "react";
import logo from "../assets/Spotify_Logo_RGB_White.png";
import SidbarLinks from "./forms-login/SidbarLinks";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { playlist } = useSelector((state) => state.UserReducer);

  return (
    <>
      <div className="d-flex justify-content-start mx-3 mt-3">
        <img className="mt-3" width={130} src={logo} alt="logo" />
      </div>

      <ul className="side_menu hover_shadow_li mt-4">
        <SidbarLinks iconLabels="bi bi-house-door-fill" text="Home" />
        <SidbarLinks iconLabels="bi bi-search" text="Search" />
        <SidbarLinks iconLabels="bi bi-collection" text="Library" />
      </ul>

      <ul className="side_menu mt-4">
        <SidbarLinks
          iconLabels="bi bi-plus-square-fill"
          text="Create Playlist"
        />
        <li>
          <div className="liked_div mx-2">
            <i className="bi bi-heart-fill"></i>
          </div>
          <p>Liked Song</p>
        </li>
      </ul>
      <p className="m-0 mx-3" style={{ fontSize: "0.8rem" }}>
        <span className="text-white">PLAYLIST</span>
      </p>
      <hr className="mt-2 mx-3" style={{ backgroundColor: "gray" }} />

      <ul className="side_menu_playlist mt-4">
        {playlist &&
          playlist.map((value, i) => (
            <SidbarLinks key={i} iconLabels="" text={value?.name} />
          ))}
      </ul>
    </>
  );
};

export default SideBar;
