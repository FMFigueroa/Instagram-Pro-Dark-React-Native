import React, { useEffect, useState } from "react";
import { SignedInSatck, SignedOutStack } from "./navigation";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = (user) => {
    user ? setCurrentUser(user) : setCurrentUser(null);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => userHandler(user));
  }, []);

  return <>{currentUser ? <SignedInSatck /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
