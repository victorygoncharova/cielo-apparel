import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  const content = (
    <div class="login__page">
      <Link to="./" className="exit"></Link>
      <h1 className="headline headline_login">Sign Up</h1>
      <div className="login__link"> Already a member?</div>
      <button className="login__btn login__btn_fb">
        Sign up with Facebook
      </button>
      <button className="login__btn login__btn_g">Sign up with Google</button>
      <span className="login__or">or</span>
      <button className="login__btn login__btn_email">
        Sign up with email
      </button>
    </div>
  );

  return <div className="login">{content}</div>;
};

export default SignUp;
