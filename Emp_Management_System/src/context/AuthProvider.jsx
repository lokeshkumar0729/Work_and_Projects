import React, { useState, createContext } from "react";
import { employee, admin } from "../Utils/LocalStorage";
console.log("AUTH FILE LOADED");
console.log("EMPLOYEE:", employee);
console.log("ADMIN:", admin);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    empdata: employee,
    admindata: admin,
  });

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
