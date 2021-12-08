// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import "firebase";
// import config from "./config";

// const Firebase = initializeApp(config.firebase);

// export const Providers = {
//   google: new firebase.auth.GoogleAuthProvider(),
// };

// export const auth = getAuth(Firebase);

// export default Firebase;
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import config from "./config";

const Firebase = firebase.initializeApp(config.firebase);

export const Providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export const auth = firebase.auth();

export default Firebase;
