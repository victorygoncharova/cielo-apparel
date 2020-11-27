import React, { Component } from "react";
import ReactDOM from "react-dom";

import { productData } from "../../data";

export default class QuickView extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    document.getElementById("modal").appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById("modal").removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
