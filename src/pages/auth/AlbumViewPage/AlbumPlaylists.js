import React, { memo, useEffect } from "react";
import SingleTrackInfo from "./SingleTrackInfo";

const AlbumPlaylists = ({ headerRef, playlistTracks }) => {
  return (
    <>
      <div className="d-flex justify-content-start header">
        <button className="play__button">
          <i class="bi bi-play-fill"></i>
        </button>

        <i className="bi bi-heart like"></i>
      </div>
      <div ref={headerRef} className="table__header">
        <div className="hash pl-4">#</div>
        <div className="table__title">TITLE</div>
        <div className="table__time">
          <i className="bi bi-clock"></i>
        </div>
      </div>
      <>
        {playlistTracks?.tracks?.items?.map((value, i) => (
          <SingleTrackInfo key={i} value={value} index={i} />
        ))}
      </>
    </>
  );
};

export default memo(AlbumPlaylists);
