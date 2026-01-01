import React, { useEffect, useState } from "react";
import { LogOut } from "lucide-react";

const Header = (props) => {
  const [name, setName] = useState("User");

  useEffect(() => {
    const role = props?.data?.user?.role;

    if (role === "admin") {
      const adminLS = localStorage.getItem("admin");
      if (!adminLS) {
        setName("Admin");
      } else {
        const adminArr = JSON.parse(adminLS); // array
        setName(adminArr[0]?.name || "Admin");
      }
    } else if (role === "employee") {
      setName(props?.data?.data?.name || "Employee");
    }
  }, [props]);

  const logOut = () => {
    localStorage.removeItem("loggedInUser");
    props.data.changeUser(null);
  };

  return (
    <div className="flex items-center justify-around h-15 w-full bg-gradient-to-r from-sky-500 to-sky-900">
      <div className="flex items-center gap-2">
        <img
          className="h-7 w-7 rounded-full"
          src="https://plus.unsplash.com/premium_photo-1766340004307-35a65c64aa8c"
          alt=""
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm text-white">Welcome back</span>
          <span className="text-lg font-bold text-white">{name}</span>
        </div>
      </div>

      <button
        onClick={logOut}
        className="bg-[#45116d] p-2 text-sm rounded-xl text-white flex items-center gap-1 hover:opacity-70"
      >
        <LogOut className="h-5" /> Logout
      </button>
    </div>
  );
};

export default Header;
