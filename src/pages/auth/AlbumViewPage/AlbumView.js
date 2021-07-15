import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import AlbumHeader from "./AlbumHeader";
import AlbumPlaylists from "./AlbumPlaylists";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderColor } from "../../../store/style/action.types";

const AlbumView = () => {
  const tableHeaderRef = useRef(null);
  const [header, setHeader] = useState(null);
  const { playlistTracks } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

  const handleScroll = useCallback(
    (e) => {
      if (e.target.scrollTop >= header) {
        dispatch(setHeaderColor("black"));

        tableHeaderRef.current.classList.add("table__header__stiky");
      } else {
        dispatch(setHeaderColor("transparent"));
        tableHeaderRef.current.classList.remove("table__header__stiky");
      }
    },
    [header, dispatch]
  );

  useEffect(() => {
    setHeader(tableHeaderRef?.current?.offsetTop);
  }, [handleScroll]);

  return (
    <div className="album" onScroll={handleScroll}>
      <div className="album__header">
        <AlbumHeader playlistTracks={playlistTracks} />
      </div>
      <div className="album__playlist">
        <AlbumPlaylists
          playlistTracks={playlistTracks}
          headerRef={tableHeaderRef}
        />
      </div>
    </div>
  );
};

export default memo(AlbumView);
