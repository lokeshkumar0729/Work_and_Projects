import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

useEffect(() => {
  alert("AUTH PROVIDER IS RUNNING");

  console.log("localStorage BEFORE:", localStorage);

  setLocalStorage();

  console.log("localStorage AFTER:", localStorage);

  console.log("employee:", localStorage.getItem("employee"));
  console.log("admin:", localStorage.getItem("admin"));

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
