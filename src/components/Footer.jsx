import React from "react";
import { Container, Typography, Link, Box } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Instrument Petting Zoo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer(props) {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <link
          rel="icon"
          href="https://emojipedia-us.s3.amazonaws.com/source/skype/289/musical-notes_1f3b6.png"
        />

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          onClick={() => {
            console.log("click");
          }}
        >
          Welcome to the band family!
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
