import React from "react";

import Products from "../Product";
import "./Shop.scss";
import Accordion from "../Accordion";

const Shop = ({ data, clickFilter }) => {
  return (
    <div className="shop">
      <div className="shop__row">
        <div className="filters">
          <Accordion clickFilter={(text) => clickFilter(text)} />
        </div>
        <div className="shop__products">
          <Products data={data} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
