import React, { useEffect, useState, createContext } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if employee/admin data already exists
    let { empdata, admindata } = getLocalStorage();

    // If data doesn't exist, create it first
    if (!empdata || !admindata) {
      setLocalStorage();

      // Read the newly created data
      ({ empdata, admindata } = getLocalStorage());
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
