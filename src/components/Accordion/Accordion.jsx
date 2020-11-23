import React, {Component} from 'react';
import './Accordion.scss';

class Accordion extends Component {
    constructor() {
        super();
        this.state = {
            items: ['All','Sport Bras', 'Leggings', 'Shirts', 'Shorts', 'New Arrivals', 'Best Sellers'].map((item, index) => ({text: item, id: index + 1 })),
            activeFilter: 'All',
            
        };
        this.activeFilter = (e) => {
            this.setState({
                activeFilter: e.target.dataset.filter,
            })
        }
    };

render() {

   const { items, activeFilter } = this.state;
    const { clickFilter } = this.props;
    
    return (
        <>
        <h3 className="filters__headline">Filter by</h3>
        <ul className="filters__list">
            <li className="filters__item filter">
                <button className="filter__btn">Collection</button>
                <ul className="filter__list">
                {

                    items.map((item, index) => (
                        
                        <li key={item.index} data-index={index} data-filter={item.text} onClick={() => clickFilter(item.text)}> {item.text} </li>
                    ))
                        
                }
 
                </ul> 
            </li>
            
            <li>Price</li>
            <li>Color</li>
            <li>Size</li>
        </ul>
       
        </>
    );
}
}

export default Accordion;


/* class Accordion extends Component {

    constructor() {
        super();
        this.state = {
            items: ['All','Sport Bras', 'Leggings', 'Shirts', 'Shorts', 'New Arrivals', 'Best Sellers'].map((item, index) => ({text: item, id: index + 1 })),
            activeIndex: 0,
            
        };
        this.activeItem = (e) => {
            this.setState({
                activeIndex: +e.target.dataset.index,
            })
        } 
    };

render() {
   const { items, activeIndex } = this.state;
   const {data} = this.props;
    
    return (
        <>
        <h3 className="filters__headline">Filter by</h3>
        <ul className="filters__list">
            <li className="filters__item filter">
                <button className="filter__btn">Collection</button>
                <ul className="filter__list">
                    {
                    items.map((item, index) => (
                        <li key={item.index} data-index={index} className={index === activeIndex ? 'filter__item active' : 'filter__item'} onClick={this.activeItem}>{item.text}</li>
                    ))

                   
                }
 
                </ul> 
            </li>
            
            <li>Price</li>
            <li>Color</li>
            <li>Size</li>
        </ul>
       
        </>
    );
}
}

export default Accordion; */