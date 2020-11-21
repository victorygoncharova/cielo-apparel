import React from "react";
import "./Button.scss";

const Button = ({ text, url, mod }) => {
  return (
    <a className={`btn btn__${mod}`} href={url}>
      {text}
    </a>
  );
};

export default Button;
