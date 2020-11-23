import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import Shop from "../Shop"

import { footerListData, headerListData, previewListData, productData } from "../../data";


import {HomePage, ShopPage, ShippingPage, AboutPage, ContactPage} from '../Pages';



import "./App.scss";

export default class App extends Component {

constructor() {
  super();
  this.state = {
    productData: productData,
  }

  this.clickFilter = (text) => {

    const newData = productData.filter(item => item.filters.collection.includes(text));
    this.setState(({productData}) => {
      return {
        productData: newData
      };
    })  
  }

}


render() {
  const { productData } = this.state;
  return (

    <Router>
    <div className="wrapper">
    {/* <Header data={headerListData} type="header" /> */}
      <Route path="/" component={HomePage} exact/>


      <Route path="/shop"><ShopPage data = {this.state.productData} clickFilter={this.clickFilter}/></Route>


      <Route path="/shipping-returns" component={ShippingPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    {/* <Footer data={footerListData} type="footer" /> */}
  </div>
  </Router>
  );
}

}
