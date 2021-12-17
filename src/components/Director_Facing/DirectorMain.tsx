import React from "react";
import { Link } from "react-router-dom";

export default function DirectorMain(): JSX.Element {
  return (
    <div>
      <h1>Director Main Page</h1>
      <p>
        Change your password <Link to="/directorChangePassword" /> Here{" "}
      </p>
    </div>
  );
}
