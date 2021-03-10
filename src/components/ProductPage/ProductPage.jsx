import React, { Component } from "react";
import { productData } from "../../data";
import "./ProductPage.scss";

export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      data: productData,
    };
  }

  render() {
    const { data } = this.state;

    const { id } = this.props;

    const activeProduct = +id;

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
            <span className="product-page__label">Quantity</span>
            <input
              type="number"
              className="product-page__input"
              name="quantity"
              min="1"
              max="999"
            ></input>
            <button className="form__btn product-page__btn">Add To Card</button>
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
