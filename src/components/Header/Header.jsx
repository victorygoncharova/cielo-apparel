import React, { Component } from "react";
import "./Header.scss";
import {Link} from 'react-router-dom';

import Avatar from "../svg/Avatar";
import CartIcon from "../svg/CartIcon";
import Promo from "../Promo";

import { CreateList, CreateLogo } from "../Constructors";

const Header = ({ data, type }) => {
  return (
    <header className="header">
      <Promo />
      <div className="header__body">
        <CreateLogo />

        <nav className="header__nav">
          <div className="header__burger">
            <span></span>
          </div>
          <CreateList data={data} type={type} />
        </nav>
        <div className="user-nav">
          <div className="user-nav__login">
            <Avatar />
            <span className="user-nav__text">Log In</span>
          </div>
          <CartIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
