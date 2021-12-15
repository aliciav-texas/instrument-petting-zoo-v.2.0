import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
declare const Firebase: firebase.app.App;
export declare const Providers: {
    google: firebase.auth.GoogleAuthProvider;
};
export declare const auth: firebase.auth.Auth;
export default Firebase;
