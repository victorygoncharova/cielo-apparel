import React, { Component } from "react";
import { HeadlineProduct } from "../Headline";
import { Link } from "react-router-dom";
import "./Product.scss";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      hoverId: null,
      isHovered: false,
    };
  }

  onFocus = (e) => {
    this.setState(({ isHovered, hoverId }) => {
      return {
        hoverId: +e.target.dataset.id,
        isHovered: !isHovered,
      };
    });
  };

  offFocus = (e) => {
    this.setState(({ isHovered, hoverId }) => {
      return {
        hoverId: 0,
        isHovered: false,
        activeModal: null,
        showModal: false,
      };
    });
  };

  createList = (data) => {
    const li = data.map((item) => {
      const id = item.id;
      return (
        <li
          key={item.id}
          className="product"
          data-id={item.id}
          onMouseEnter={this.onFocus}
          onMouseLeave={this.offFocus}
        >
          {" "}
          {this.checkProduct(item, id)}{" "}
        </li>
      );
    });

    return <>{li}</>;
  };

  checkProduct = (item, id) => {
    if (item.filters.collection.includes("New Arrivals")) {
      return this.createNewProduct(item, id);
    } else if (item.filters.collection.includes("Best Sellers")) {
      return this.createBestProduct(item, id);
    } else {
      return this.createProduct(item, id);
    }
  };

  createNewProduct = (item, id) => {
    return (
      <>
        {this.createRibbon("New Arrival", "new")}
        {this.productBody(item, id)}
      </>
    );
  };

  createBestProduct = (item, id) => {
    return (
      <>
        {this.createRibbon("Best Seller", "best")}
        {this.productBody(item, id)}
      </>
    );
  };

  createQuickView = (id) => {
    this.setState(({ activeModal, showModal }) => {
      return {
        activeModal: id,
        showModal: !showModal,
      };
    });
  };

  createProduct = (item, id) => {
    return <>{this.productBody(item, id)}</>;
  };

  productBody = (item, id) => {
    return (
      <>
        <Link
          to={`/shop/${item.id}`}
          data-id={item.id}
          href="/"
          className="product__img"
        >
          <img className="product__pic" src={item.images.path} alt="" />
        </Link>
        <HeadlineProduct text={item.title} url="#" />
        <span
          data-id={item.id}
          className="product__price"
        >{`${item.price}.00₴`}</span>
      </>
    );
  };

  createRibbon = (text, type) => {
    return <span className={`ribbon ribbon_${type}`}>{text}</span>;
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <ul className="products">{this.createList(data)}</ul>
      </>
    );
  }
}

export default Products;
