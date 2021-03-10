import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Avatar from "../svg/Avatar";
import CartIcon from "../svg/CartIcon";
import Promo from "../Promo";

import { CreateList, CreateLogo } from "../Constructors";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isOpened: false,
    };

    this.onToggleBurger = () => {
      this.setState(({ isOpened }) => {
        return {
          isOpened: !isOpened,
        };
      });
    };

    this.onClickMenuItem = ({ target }) => {
      const isItem = target.closest(".header__item");

      if (!isItem) return;

      this.setState(({ isOpened }) => {
        return {
          isOpened: !isOpened,
        };
      });
    };
  }

  render() {
    const { data, type } = this.props;
    const { isOpened } = this.state;
    const classes = "header__body";

    return (
      <header className="header">
        <Promo />
        <div className={isOpened ? `${classes} open` : classes}>
          <CreateLogo />
          <button className="header__burger" onClick={this.onToggleBurger}>
            <span></span>
          </button>
          <nav className="header__nav" onClick={this.onClickMenuItem}>
            <CreateList data={data} type={type} />
          </nav>
          <div className="user-nav">
            <Link to="/sign-up" className="user-nav__login">
              <Avatar />
              <span className="user-nav__text">Log In</span>
            </Link>
            <CartIcon />
          </div>
        </div>
      </header>
    );
  }
}
