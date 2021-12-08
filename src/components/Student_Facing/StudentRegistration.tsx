import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
// Materia-UI
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function StudentInterestForm(): JSX.Element {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
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

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm)
      setError("Please make sure your passwords match.");
    if (error !== "") setError("");
    setRegistering(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((successfulNewAccount) => {
        console.log(successfulNewAccount);
        // if successful console.loghen re-direct back to home page
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        if (error.code.includes("auth/weak-password")) {
          setError("Please enter a stronger password");
        } else if (error.code.includes("auth/email-already-in-use")) {
          setError("Email already in use");
        } else {
          setError("Unable to register. Please wait and try again");
        }
        setRegistering(false);
      });
  };

  return (
    <form className={classes.root}>
      Hey, there! Register to join our band family!
      <TextField label="First Name" variant="filled" required />
      <TextField label="Last Name" variant="filled" required />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
      />
      <div>
        <Button variant="contained">Cancel</Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
}
