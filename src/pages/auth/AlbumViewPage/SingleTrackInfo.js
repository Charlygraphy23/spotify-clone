import moment from "moment";
import React, { memo } from "react";

const SingleTrackInfo = ({ value, index }) => {
  return (
    <>
      <div className="table__body">
        <div className="index pl-4">{index + 1}</div>
        <div className="song__info">
          <p>{value?.track?.name}</p>
          <span>
            {value?.track?.artists?.map((v) => (
              <>{v.name} </>
            ))}
          </span>
        </div>
        <div className="time">
          {/* {console.log("dddd", value?.track?.duration_ms)} */}
          {moment.duration(value?.track?.duration_ms).minutes()}:{" "}
          {moment.duration(value?.track?.duration_ms).seconds()}
        </div>
      </div>
    </>
  );
};

export default memo(SingleTrackInfo);
