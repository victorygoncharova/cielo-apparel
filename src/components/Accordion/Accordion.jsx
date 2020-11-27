import React, {Component} from 'react';
import './Accordion.scss';

import {colors} from '../../data';

class Accordion extends Component {
    constructor() {
        super();
        this.state = {
            items: ['All','Sport Bras', 'Leggings', 'Shirts', 'Shorts', 'New Arrivals', 'Best Sellers'].map((item, index) => ({text: item, id: index + 1 })),
            activeFilter: 'All',
            sizes: ['Large', 'Medium', 'Small'].map((item, index) => ({text: item, id: index + 1 })),
            colors: colors,
            activeSize: false,
            
        };

        this.activeFilter = (e) => {
            this.setState( {
                activeFilter: e.target.dataset.filter,
            })
        }
    };

    clickHandler = (text, e) => {
        this.activeFilter(e);
        this.props.clickFilter(text);
    }


render() {

   const { items, activeFilter, sizes } = this.state;
   const { clickFilter } = this.props;
    
    return (
        <>
        <h3 className="filters__headline">Filter by</h3>
        <ul className="filters__list">
            <li className="filters__item filter">
                <button className="filter__btn">Collection</button>
                <ul className="filter__list">
                {
                    items.map((item, index) => {
                        const text = item.text;
                        return (
                            <li key={item.id} className={item.text === activeFilter ? 'filter__item active' : 'filter__item'} data-index={index} data-filter={item.text} onClick = {this.clickHandler.bind(this, text)}> {item.text} </li>
                        )
                    })  
                }
 
                </ul> 
            </li>
            

            <li className="filters__item filter">
                <button className="filter__btn">Color</button>
                <ul className="filter__list colors">
                {
                    colors.map(item => {
                        const color = {
                            backgroundColor: item.code,
                        }
                        return (
                            <li key={item.id} className="filter__colors" style={color}> 
                                {/* <span className="filter__color" ></span> */}
                            </li>
                        )
                    })
                }
                </ul>
            </li>

            <li className="filters__item filter">
                <button className="filter__btn">Size</button>
                <ul className="filter__list">
                {
                    sizes.map((item, index) => {
                        const size = item.text;
                        return (
                            <li key={item.index} data-filter={item.text} onClick = {this.clickHandler.bind(this, size)} className="filter__sizes"> 
                            <input type="checkbox" value={size}/> {item.text}
                            </li>
                        )
                    })  
                }
 
                </ul> 
            </li>

        </ul>
       
        </>
    );
}
}

export default Accordion;


