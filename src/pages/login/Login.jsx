import React, { useState } from "react";
import "./style.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  const [eye, setEye] = useState(false);
  const [changeOne, setChangeOne] = useState(true);
  const [changeTwo, setChangeTwo] = useState(false);
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="login__content">
            <h1>Login</h1>
            <form>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address..." />

              <label> Password</label>
              <div className="password">
                <input
                  type={`${eye ? "text" : "password"}`}
                  placeholder="Enter your password"
                />
                {eye ? (
                  <button type="button" onClick={() => setEye(false)}>
                    <FaEyeSlash />
                  </button>
                ) : (
                  <button type="button" onClick={() => setEye(true)}>
                    <FaEye />
                  </button>
                )}
              </div>
            </form>
            <div className="forgot">
              <button>Forgot your password?</button>
            </div>
            <button className="signIn">Sign In</button>
            <p>or</p>
            <button className="google">
              <FcGoogle className="icon" />
              Sign In with Google
            </button>
            <Link to={"/signUp"} className="signUpBtn">
              Don’t have an account ? <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
