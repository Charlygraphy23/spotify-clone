import React, { memo } from "react";

const AlbumHeader = ({ playlistTracks }) => {
  return (
    <>
      <div className=" image__feed">
        <img src={playlistTracks?.images[0]?.url} alt="album_image" />
      </div>
      <div className="album__info">
        <span>
          {" "}
          <b>{playlistTracks?.type?.toUpperCase()}</b>
        </span>
        <h2 className="album__title">{playlistTracks?.name}</h2>
        {/* margin bottum */}
        <p>{playlistTracks?.description ? playlistTracks.description : ""}</p>
        <p>
          <b>Spotify </b> {playlistTracks?.tracks?.total} songs , 2 hr 55min
        </p>
      </div>
    </>
  );
};

export default memo(AlbumHeader);
