import React, {Component} from 'react';
import './Accordion.scss';

class Accordion extends Component {
    constructor() {
        super();
        this.state = {
            items: ['All','Sport Bras', 'Leggings', 'Shirts', 'Shorts', 'New Arrivals', 'Best Sellers'].map((item, index) => ({text: item, id: index + 1 })),
            activeFilter: 'All',
            sizes: ['Large', 'Medium', 'Small'].map((item, index) => ({text: item, id: index + 1 })),
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
                <button className="filter__btn">Size</button>
                <ul className="filter__list sizes">
                {

                    sizes.map((item, index) => {
                        const size = item.text;
                        return (
                            <li key={item.index} data-filter={item.text} onClick = {this.clickHandler.bind(this, size)}> 
                            <input type="checkbox" value={size}/> {item.text}
                            </li>
                        )
                    })  
                }
 
                </ul> 

            </li>
            <li>Price</li>
            <li></li>
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