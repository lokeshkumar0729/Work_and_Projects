import React, { useContext, useEffect, useState } from "react";
import { Mail, KeyRound } from "lucide-react";

const Login = ({ handleLogin }) => {
  useEffect(() => {
    alert(`Please use these mails for login 
Employee mail_id : emp1@example.com
Employee Password : 123
Admin Mail_id: admin@example.com
Admin Password: 123

You can login for any employee by just doing emp1, emp2...`);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(email, password);
    handleLogin(email, password, rememberMe);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="min-h-screen w-full flex bg-[url('https://plus.unsplash.com/premium_photo-1669050065878-53fb3d9dfc15?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] items-center justify-center bg-black p-4">
      <div className="flex w-full max-w-4xl h-125 rounded-2xl bg-white overflow-hidden shadow-lg">
        {/* LEFT IMAGE (hidden on small screens) */}
        <img
          className="hidden md:block md:w-1/2 object-cover"
          src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1974&auto=format&fit=crop"
          alt="login"
        />

        <div className="w-full md:w-1/2 flex flex-col gap-6 p-6">
          <h2 className="text-2xl font-semibold text-center">
            Login into account
          </h2>

          <form
            className="flex flex-col gap-4 relative"
            onSubmit={submitHandler}
          >
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-full outline-none border-2 border-gray-300 p-2 pl-10 rounded-2xl"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full outline-none border-2 border-gray-300 p-2 pl-10 rounded-2xl"
                type="password"
                placeholder="Password"
                required
              />
            </div>

            {/* REMEMBER */}
            <div className="flex gap-2 items-center  text-sm">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <h4>Remember me</h4>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition cursor-pointer text-white p-3 rounded-full"
            >
              LOGIN
            </button>
          </form>
          <a
            className="self-end"
            href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop"
            target="_blank"
          >
            {" "}
            <span className="text-blue-900 cursor-pointer font-semibold text-sm self-end">
              Forget Password?
            </span>
          </a>

          <span className="text-center text-lg">or login with</span>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://www.facebook.com/login/" target="_blank">
              <button className="bg-blue-900 cursor-pointer px-4 py-2 flex gap-2 items-center text-white rounded-full">
                <img
                  className="h-5"
                  src="https://img.icons8.com/?size=100&id=118468&format=png&color=ffffff"
                  alt="Facebook"
                />
                Facebook
              </button>
            </a>

            <a href="https://accounts.google.com/v3/signin/accountchooser?continue=https%3A%2F%2Faccounts.google.com%2F&dsh=S1228464012%3A1767175245179574&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=Ac2yZaW-M62k-aAUYpRbyCp7lAZ4QHQ7rchVcrKbe3faC9ehCeILJzVZaDmIA8q2oaN8dWZ-geDaBA&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
              {" "}
              <button
                className="bg-gray-300 px-4 py-2 flex gap-2 cursor-pointer items-center text-black rounded-full"
                target="_blank"
              >
                <img
                  className="h-5"
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="Google"
                />
                Google
              </button>
            </a>

            <a href="https://x.com/" target="_blank">
              <button className="bg-black px-4 py-2 flex gap-2  cursor-pointer items-center text-white rounded-full">
                <img
                  className="h-5"
                  src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=FFFFFF"
                  alt="Twitter"
                />
                Twitter
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
