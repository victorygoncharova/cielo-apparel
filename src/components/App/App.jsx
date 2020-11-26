import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { footerListData, headerListData, productData } from "../../data";
import {ShopPage, AboutPage, ContactPage} from '../Pages';
import {SignUp, Login} from '../Login';

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

    <Switch>
      
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/log-in" component={Login} />
      <Header data={headerListData} type="header"/>
      
    </Switch>

     
      <Route exact path="/" component={Main} />
      <Route exact path="/shop"><ShopPage data = {this.state.productData} clickFilter={this.clickFilter}/></Route>

      <Route path="/shop/:id" render={({match}) => {
                const { id } = match.params;
                return <Login />
              }
}/>

      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/(|shop|about|contact)"><Footer exact data={footerListData} type="footer" /></Route>


  </div>
  </Router>
  );
}

}
