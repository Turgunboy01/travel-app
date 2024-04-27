import React, { useState } from "react";
import "./style.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [eye, setEye] = useState(false);

  return (
    <div className="signUp">
      <div className="container">
        <div className="row">
          <div className="signUp__content">
            <h1>Create Account</h1>
            <form>
              <label>Name and Surname</label>
              <input type="text" placeholder="Enter your name and surname" />
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
            <div className="check">
              <input type="checkbox" />
              <p>
                I agree with <span>Terms</span> and
                <span> Privacy</span>
              </p>
            </div>
            <button className="signIn">Sign In</button>
            <p>or</p>
            <button className="google">
              <FcGoogle className="icon" />
              Sign In with Google
            </button>
            <Link to={"/login"} className="loginBtn">
              Already have an account? <span>Log In</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
