import React from "react";
// import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Grid } from "@mui/material";
// === Icons
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customizeToolbar: {
    minHeight: "200px",
  },
});

export default function Header(): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ background: "#fcb865" }}>
      <Toolbar className={classes.customizeToolbar}>
        <Grid container direction="row" justifyContent="space-between">
          <IconButton
            edge="start"
            // color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <Link to="/"> */}
            <QueueMusicIcon />
            {/* </Link> */}
          </IconButton>
          <Grid item xs={8}>
            <Typography variant="h3" color="inherit" component="div">
              H. Reactor Instrument Petting Zoo
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography> Add a student</Typography>
              </Grid>
              <Grid item>
                {/* <Link to="/studentInterest"> */}
                <PersonAddIcon />
                {/* </Link> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography> Assess </Typography>
              </Grid>
              <Grid item>
                {/* <Link to="/instrumentAssesment"> */}
                <AssignmentOutlinedIcon />
                {/* </Link> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography> Director </Typography>
              </Grid>
              <Grid item>
                {/* <Link to="/director"> */}
                <MusicNoteOutlinedIcon />
                {/* </Link> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
