import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./Utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  // useEffect(() => {
  //   setLocalStorage();
  // }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser({ role: parsed.role });

      if (parsed.role === "employee") {
        setLoggedInUserData(parsed.data);
      }
    }
  }, []);

  const handleLogin = (email, password, rememberMe) => {
    if (
      !userData ||
      !Array.isArray(userData.admindata) ||
      !Array.isArray(userData.empdata)
    ) {
      console.log("UserData not ready:", userData);
      return;
    }

    // ADMIN LOGIN
    const admin = userData.admindata.find(
      (e) => e.email === email && e.password === password
    );

    if (admin) {
      const data = { role: "admin" };
      setUser(data);

      if (rememberMe) {
        localStorage.setItem("loggedInUser", JSON.stringify(data));
      }
      return;
    }

    // EMPLOYEE LOGIN
    const emp = userData.empdata.find(
      (e) => e.email === email && e.password === password
    );

    if (emp) {
      const data = { role: "employee", data: emp };
      setUser({ role: "employee" });
      setLoggedInUserData(emp);

      if (rememberMe) {
        localStorage.setItem("loggedInUser", JSON.stringify(data));
      }
      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}

      {user?.role === "admin" && (
        <AdminDashboard
          user={user}
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}

      {user?.role === "employee" && loggedInUserData && (
        <EmployeeDashboard
          user={user}
          changeUser={setUser}
          data={loggedInUserData}
        />
      )}

      {user?.role === "employee" && !loggedInUserData && (
        <p className="flex items-center h-screen w-full justify-center text-4xl font-bold">
          Loading...
        </p>
      )}
    </div>
  );
};

export default App;
