import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../config/firebase";
import ErrorText from "../ErrorText/index";
// Material-UI
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function DirectorChangePassword(): JSX.Element {
  const [changing, setChanging] = useState<boolean>(false);
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
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

  const passwordChangeRequest = () => {
    if (newPassword !== confirmPassword) {
      setError("Make sure your passwords are matching");
      return;
    }

    if (error !== "") setError("");
    setChanging(true);
    auth.currentUser
      ?.updatePassword(newPassword)
      .then((successfulChange) => {
        console.log("changed password successful", successfulChange);
        // if successful re-direct back to director home page
        navigate("/DirectorMain");
      })
      .catch((error) => {
        console.log(error);
        setChanging(false);
        setError("Unable to change password, please try again later");
      });
  };

  if (auth.currentUser?.providerData[0]?.providerId !== "password") {
    navigate("/");
  }

  return (
    <form className={classes.root}>
      Change Password Below
      <TextField
        label="Old-Password"
        variant="filled"
        type="password"
        required
        placeholder="Enter Old Password"
        value={oldPassword}
        onChange={(event) => {
          setOldPassword(event.target.value);
        }}
      />
      <TextField
        label="New-Password"
        variant="filled"
        type="password"
        required
        value={newPassword}
        placeholder="Set New Password"
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <TextField
        label="Confirm-Password"
        variant="filled"
        type="password"
        required
        value={confirmPassword}
        placeholder="Confirm New Password"
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
      />
      <div>
        <Button variant="contained">Cancel</Button>
        <Button
          disabled={changing}
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => passwordChangeRequest()}
        >
          Change Password
        </Button>
      </div>
      <ErrorText error={error} />
    </form>
  );
}
