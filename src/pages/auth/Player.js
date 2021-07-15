import React from "react";
import PlayerLeft from "./Player/PlayerLeft";
import PlayerRight from "./Player/PlayerRight";
import PlaylistCenter from "./Player/PlaylistCenter";

const Player = () => {
  return (
    <div className="player">
      <div className="player__left">
        <PlayerLeft />
      </div>

      <div className="player__center">
        <PlaylistCenter />
      </div>

      <div className="player__right">
        <PlayerRight />
      </div>
    </div>
  );
};

export default Player;
