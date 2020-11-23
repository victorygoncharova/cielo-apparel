import React, {Component} from 'react';

import {ProductList} from '../Product';
import './Shop.scss';
import Accordion from '../Accordion';

const Shop = ({data, clickFilter}) => {

    return (
        <div className='shop'>
            <div className='shop__row'>
                <div className='shop__filters filters'>
                <Accordion clickFilter={(text) => clickFilter(text)}/>
                </div>
                <div className="shop__products">
                <ProductList data={data} />
                </div>
            </div>
        </div>
    );
}












export default Shop;

