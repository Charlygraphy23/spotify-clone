import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const PlayerRight = () => {
  return (
    <Grid className="grid__vol" container spacing={2}>
      <Grid item>
        <VolumeDown />
      </Grid>
      <Grid item xs>
        <Slider
          // value={value}
          // onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
      </Grid>
      <Grid item>
        <VolumeUp />
      </Grid>
    </Grid>
  );
};

export default PlayerRight;
