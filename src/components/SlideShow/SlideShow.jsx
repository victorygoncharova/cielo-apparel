import React, { Component } from "react";

import "./SlideShow.scss";

import { slideShowData } from "../../data";

export default class SlideShow extends Component {
  constructor() {
    super();

    this.state = {
      onFocus: false,
    };
  }
  render() {
    const { data } = this.props;
    const { onFocus } = this.state;

    const slide = data.map((item) => {
      const id = item.id;
      return (
        <li
          className={onFocus ? "slide-show__slide active" : "slide-show__slide"}
          key={item.id}
        >
          <img src={item.img} className="slide-show__img" alt="" />
        </li>
      );
    });

    return (
      <div className="slide-show">
        <ul id="slider" className="slide-show__container">
          {slide}
        </ul>
      </div>
    );
  }
}
