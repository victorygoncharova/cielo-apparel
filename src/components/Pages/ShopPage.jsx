import React, {Component} from "react";
import Shop from '../Shop';
import {shopColumnImg} from '../../images/images';

import {CreateColumns} from '../Constructors/Constructors';

import {HeadlineUpperCase} from '../Headline';


export default class ShopPage extends Component {
    render() {
        const {data, clickFilter} = this.props;
        const header = (<HeadlineUpperCase text="Shop" />);
        const img = (<img src={shopColumnImg} className="columns__img" />);

        return(
            <>
            <CreateColumns header={header} img={img} />
            <Shop data={data} clickFilter={(text) => clickFilter(text)}/>
            </>
        )
    }
}
