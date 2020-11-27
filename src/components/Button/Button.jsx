import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ text, url, mod }) => {
  return (
    <Link to={url} className={`btn btn__${mod}`}>
      {text}
    </Link>
  );
};

export default Button;
