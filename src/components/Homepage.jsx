import React from "react";

import ReactPlayer from "react-player/youtube";
import { Typography, Grid } from "@material-ui/core";

export default function Homepage() {
  return (
    <>
      <Grid
        container
        spacing={10}
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h1"> Welcome! </Typography>
        </Grid>
        <Grid item>
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=u0TcmfEVhfw"
          />
        </Grid>
        <Grid item align="center">
          <Typography variant="h4">
            We are excited to have you join our band family!{" "}
          </Typography>
          <Typography variant="h4">
            Be sure to watch the video and get an idea of an instrument you
            would like to play then submit your interest form here
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
