import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
  console.log("AUTH PROVIDER STARTED");

  let { empdata, admindata } = getLocalStorage();

  console.log("BEFORE:", empdata, admindata);

  if (!empdata || !admindata) {
    console.log("CREATING LOCAL STORAGE");

    setLocalStorage();

    ({ empdata, admindata } = getLocalStorage());

    console.log("AFTER:", empdata, admindata);
  }

  setUserData({ empdata, admindata });
}, []);
  

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
