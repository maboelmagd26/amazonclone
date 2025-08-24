import React, { useState } from "react";
import "./login.css";
import amazonLogo from "../../assets/ui/login-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../baas/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAmazon } from "../../store/globalStateHooks";
import { useSnackbar } from "../../store/globalStateHooks";
const Login = () => {
  // user from context
  const { user } = useAmazon();
  const { onSbOpen } = useSnackbar();
  console.log(user);
  //register functionality for create new amazon acc
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const handleCreateUser = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const { email, password } = newUser;
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      if (auth) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } else {
        return;
      }
      onSbOpen(`Welcome Back ${email}`, "success");
    } catch (error) {
      console.log(error);
      onSbOpen(error.message, "error");
    }
  };
  const registerAcc = async (e) => {
    e.preventDefault();
    try {
      if (auth) {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } else {
        return;
      }
      onSbOpen(`Successfully sign Up. Hello ${email.split("@")[0]}`, "success");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        onSbOpen("Email Already in Use", "error");
      } else {
        console.log("sth went wrong", error);
        onSbOpen("Something went wrong. Try again Later", "error");
      }
    }
  };
  return (
    <div className="login">
      <Link to="/">
        <img src={amazonLogo} alt="amazon Logo" className="login-logo" />
      </Link>
      <form className="login-container">
        <h1>Sign In</h1>
        <label htmlFor="email">
          <h5>Email</h5>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={newUser.email}
          onChange={handleCreateUser}
        />
        <label htmlFor="pass">
          <h5>Password</h5>
        </label>
        <input
          type="password"
          name="password"
          id="pass"
          value={newUser.password}
          onChange={handleCreateUser}
        />
        <button
          type="submit"
          className="login-signInBtn"
          onClick={handleSignIn}
        >
          Sign in
        </button>
        <p>
          By continuing, you agree to Amazon's Fake Clone
          <a href="#" style={{ color: "blue", marginInline: "5px" }}>
            <u> Conditions of Use</u>
          </a>
          and
          <a href="#" style={{ color: "blue", marginInline: "5px" }}>
            <u>Privacy Notice</u>
          </a>
          .
        </p>
        <button className="login-registerBtn" onClick={registerAcc}>
          Create your Amazon account
        </button>
      </form>
    </div>
  );
};

export default Login;
