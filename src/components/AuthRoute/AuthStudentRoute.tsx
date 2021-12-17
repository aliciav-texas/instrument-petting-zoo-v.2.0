import React from "react";
import { auth } from "../../../config/firebase";
import { Navigate } from "react-router-dom";

export interface IAuthRouteProps {}

const AuthStudentRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;

  if (!auth.currentUser) {
    console.log("No user detected, redirecting");
    return <Navigate to="/studentRegister" />;
  }
  return <div>{children}</div>;
};

export default AuthStudentRoute;
