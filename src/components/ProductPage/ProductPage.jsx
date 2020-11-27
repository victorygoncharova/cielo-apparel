import React, { Component } from "react";
import ReactDOM from "react-dom";

import { productData } from "../../data";
import "./ProductPage.scss";

export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      data: productData,
      currentProduct: this.activeProduct,
      select: null,
      activeAccordion: 1,
      viewHideText: false,
      height: 0,
      openSelect: false,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector(".accordion__text").scrollHeight;
      this.setState({
        height,
      });
    }, 333);
  }

  openAccordion = (e) => {
    this.setState(({ viewHideText, activeAccordion }) => {
      return {
        activeAccordion: e.target.dataset.id,
        viewHideText: !viewHideText,
      };
    });
  };

  /* 
    componentDidMount() {
            const height = this.divElement.scrollHeight;
            this.setState({ maxHeight: height });
          } */

  openSelect = () => {
    this.setState(({ openSelect }) => {
      return {
        openSelect: !openSelect,
      };
    });
  };

  render() {
    const {
      currentProduct,
      select,
      activeAccordion,
      viewHideText,
      data,
      height,
      openSelect,
    } = this.state;
    const { id } = this.props;

    const activeProduct = +id;

    const innerStyle = {
      maxWidth: `${openSelect ? height : 0}px`,
    };

    const product = data.filter((item) => item.id === activeProduct);
    const productItem = product.map((item) => {
      return (
        <>
          <div className="product-page__left">
            <div className="product-page__img">
              <img src={item.images.path} alt={item.title} />
            </div>
            <p className="product-page__descr">{item.descr}</p>
          </div>
          <div className="product-page__right">
            <h1 className="product-page__title">{item.title}</h1>

            <span className="product-page__sku">SKU: {item.sku}</span>
            <span className="product-page__price">{item.price},00₴</span>
            <span className="product-page__label">Size</span>

            <div
              className={
                openSelect
                  ? "product-page__select select active"
                  : "product-page__select select"
              }
            >
              <button className="select__title" onClick={this.openSelect}>
                Select
              </button>
              <ul className="select__options">
                <li className="select__item">
                  <button className="select__option">Small</button>
                </li>
                <li className="select__item">
                  <button className="select__option">Medium</button>
                </li>
                <li className="select__item">
                  <button className="select__option">Large</button>
                </li>
              </ul>
            </div>

            <span className="product-page__label">Quantity</span>

            <input
              type="number"
              className="product-page__input"
              name="quantity"
              min="1"
              max="999"
            ></input>
            <button className="form__btn product-page__btn">Add To Card</button>

            <div
              className={
                activeAccordion == 1 && viewHideText
                  ? "columns__accordion accordion active"
                  : "columns__accordion accordion"
              }
            >
              <button
                className="accordion__btn"
                data-id="1"
                onClick={this.openAccordion}
              >
                Product Info
              </button>

              <div className="accordion__text" id="text" style={innerStyle}>
                <p>{item.info}</p>
              </div>
            </div>

            <div
              className={
                activeAccordion == 2 && viewHideText
                  ? "columns__accordion accordion active"
                  : "columns__accordion accordion "
              }
            >
              <button
                className="accordion__btn"
                data-id="2"
                onClick={this.openAccordion}
              >
                Return & Refund Policy
              </button>
              <div className="accordion__text" id="text" style={innerStyle}>
                <p>{item.return}</p>
              </div>
            </div>

            <div
              className={
                activeAccordion == 3 && viewHideText
                  ? "columns__accordion accordion active"
                  : "columns__accordion accordion "
              }
            >
              <button
                className="accordion__btn"
                data-id="3"
                onClick={this.openAccordion}
              >
                Shipping Info
              </button>
              <div className="accordion__text" style={innerStyle} id="text">
                <p>{item.shipping}</p>
              </div>
            </div>
          </div>
        </>
      );
    });

    return (
      <div className="product-page">
        <div className="product-page__row">{productItem}</div>
      </div>
    );
  }
}
