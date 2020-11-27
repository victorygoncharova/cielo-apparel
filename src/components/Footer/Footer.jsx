import React from "react";
import { CreateList } from "../Constructors";

import "./Footer.scss";

const Footer = ({ data, type }) => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <CreateList data={data} type={type} />
      </div>
      <div className="footer__copyright">
        <span>© 2023 by Cielo Apparel. Proudly created with Wix.com</span>
      </div>
    </footer>
  );
};

export default Footer;
