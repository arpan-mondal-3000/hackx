import { createContext, useContext } from "react";
import conf from "../conf/conf";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: conf.firebase_apiKey,
  authDomain: conf.firebase_authDomain,
  projectId: conf.firebase_projectId,
  storageBucket: conf.firebase_storageBucket,
  messagingSenderId: conf.firebase_messagingSenderId,
  appId: conf.firebase_appId,
  measurementId: conf.firebase_measurementId,
  databaseURL: conf.firebase_databaseURL,
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  const loginUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);
  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, loginUserWithEmailAndPassword }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
