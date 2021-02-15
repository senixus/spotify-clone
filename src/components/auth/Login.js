import React from "react";
import { accessURL } from "../../spotify/spotify";
import "./login.scss";

const Login = () => {
  return (
    <main className="auth">
      <div className="auth-child">
        <a href={accessURL} className="auth-child__btn">
          Login
        </a>
      </div>
    </main>
  );
};

export default Login;
