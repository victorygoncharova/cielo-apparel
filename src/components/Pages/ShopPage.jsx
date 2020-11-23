import React, {Component} from "react";
import Header from "../Header";
import Shop from '../Shop';
import Footer from "../Footer";

import { footerListData, headerListData, productData } from "../../data";

export default class ShopPage extends Component {

    render() {
        const {data, clickFilter} = this.props
        return(

            <>
            <Header data={headerListData} type="header" />
            <Shop data={data} clickFilter={(text) => clickFilter(text)}/>
            <Footer data={footerListData} type="footer" />
            </>
        )
    }
}
