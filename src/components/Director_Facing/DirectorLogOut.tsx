import React from "react";
import { auth } from "../../../config/firebase";
import AuthDirectorContainer from "../AuthRoute/AuthDirectorContainer";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router";

interface IPageProps {
  name: string;
}
const DirectorLogOut: React.FunctionComponent<IPageProps> = () => {
  const navigate = useNavigate();

  const Logout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/");
      })
      .catch((errorLoggingOut) => {
        console.log(errorLoggingOut);
      });
  };

  return (
    <AuthDirectorContainer>
      <p>Are you sure you want to log out? </p>
      <div>
        <Button
          className="mr-2"
          onClick={() => {
            navigate("/DirectorMain");
          }}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          className="mr-2"
          onClick={() => {
            Logout();
          }}
        >
          Logout
        </Button>
      </div>
    </AuthDirectorContainer>
  );
};

export default DirectorLogOut;
