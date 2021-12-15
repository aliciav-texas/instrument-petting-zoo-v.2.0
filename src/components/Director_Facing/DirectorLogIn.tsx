import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../config/firebase";
import ErrorText from "../ErrorText/index";
// Material-UI
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function DirectorLogIn(): JSX.Element {
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),

      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "300px",
      },
      "& .MuiButtonBase-root": {
        margin: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  const signInWithEmailAndPassword = () => {
    if (error !== "") setError("");
    setAuthenticating(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((successfulLogin) => {
        console.log(successfulLogin);
        // if successful re-direct back to director home page
        navigate("/DirectorMain");
      })
      .catch((error) => {
        console.log(error);
        setAuthenticating(false);
        setError("Unable to sign-in, please try again later");
      });
  };

  return (
    <form className={classes.root}>
      Hey, there! Login to view your band roster!
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <div>
        <Button variant="contained">Cancel</Button>
        <Button
          disabled={authenticating}
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => signInWithEmailAndPassword()}
        >
          Login
        </Button>
        <small>
          <p className="m-1 text-center">
            Forgot your password? <Link to="/login">Login</Link>{" "}
          </p>
        </small>
        <ErrorText error={error} />
      </div>
    </form>
  );
}
