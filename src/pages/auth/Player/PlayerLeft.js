import React from "react";

const PlayerLeft = () => {
  return (
    <>
      <div className="song__image">
        <img
          width={60}
          //   height={30}
          src="https://images.pexels.com/photos/2982889/pexels-photo-2982889.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>

      <div className="song__title">
        <h6 className="title">Rabta</h6>
        <small>Artist</small>
      </div>
    </>
  );
};

export default PlayerLeft;
