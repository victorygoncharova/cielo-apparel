import React, { Component } from "react";
import "./Main.scss";

import Preview from "../Preview";
import { ProductList } from "../Product";
import { productData } from "../../data";
import { CreateLatestArrivals } from "../Constructors/";
import { HeadlineUpperCase } from '../Headline';

export default class Main extends Component {
  render() {
    const { data, type } = this.props;
    return (
      <main className="main">
        <Preview data={data} type={type} />

        <section className='new-arrival'>
          <HeadlineUpperCase text="Latest Arrivals" />
          <CreateLatestArrivals data={productData} />
        </section>
        

        {/* <ProductList data={productData} /> */}
        <HeadlineUpperCase text="Follow us on Instagram" />
      </main>
    );
  }
}
