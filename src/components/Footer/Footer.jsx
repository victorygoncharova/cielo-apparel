import React from "react";
import { CreateList } from "../Constructors";

import "./Footer.scss";

const Footer = ({ data, type }) => {
  return (
    <footer className="footer">
      <CreateList data={data} type={type} />
    </footer>
  );
};

export default Footer;