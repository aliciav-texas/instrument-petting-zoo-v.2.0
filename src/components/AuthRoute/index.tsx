import React from "react";
import { auth } from "../../../config/firebase";
import { Navigate } from "react-router-dom";

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
  const { children } = props;

  if (!auth.currentUser) return <Navigate to="/studentRegister" />;
  return <div>{children}</div>;
};

export default AuthRoute;
