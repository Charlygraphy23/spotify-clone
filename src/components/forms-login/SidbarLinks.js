import React, { memo } from "react";

const SidbarLinks = ({ iconLabels, text, imageUrl }) => {
  return (
    <>
      <li>
        {imageUrl ? (
          <img src={imageUrl} alt="logo" />
        ) : (
          <i className={iconLabels}></i>
        )}
        <p>{text}</p>
      </li>
    </>
  );
};

export default memo(SidbarLinks);
