import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

 useEffect(() => {
  alert("AUTH PROVIDER IS RUNNING");

  setLocalStorage();

  alert("LOCAL STORAGE SET");

  const { empdata, admindata } = getLocalStorage();

  console.log("EMP DATA:", empdata);
  console.log("ADMIN DATA:", admindata);

  setUserData({ empdata, admindata });
}, []);
  

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
