import React from "react";
import { auth } from "../../../config/firebase";
import { Navigate } from "react-router-dom";

export interface IAuthRouteProps {}

const AuthDirectorRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;

  if (!auth.currentUser) {
    console.log("No user detected, redirecting");
    return <Navigate to="/DirectorLogIn" />;
  }
  return <div>{children}</div>;
};

export default AuthDirectorRoute;
