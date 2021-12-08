import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";

export default function StudentInterestForm(): JSX.Element {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

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
      });
  };

  return (
    <div>
      <h6>Student Interest Form</h6>
    </div>
  );
}
