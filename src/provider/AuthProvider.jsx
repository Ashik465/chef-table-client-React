import React, { createContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);


// email  password sign-up 
const createEmailUser =(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// email password log-in 
 
const signIn = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };





//git-hub-log-in 

const githubLogIn =()=>{

    setLoader(true)
    return signInWithPopup(auth,githubProvider)
}



  // google log in
  const googleLogIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  //logout
  const logout = () => {
    return signOut(auth);
  };

  //observer user authstate

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    // stop observing while unmounting

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = { googleLogIn, logout,user,githubLogIn,createEmailUser,loader,signIn,setLoader,setUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
