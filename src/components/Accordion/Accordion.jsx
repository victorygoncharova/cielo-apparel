import React, { Component } from "react";
import "./Accordion.scss";

class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        "All",
        "Sport Bras",
        "Leggings",
        "Shirts",
        "Shorts",
        "New Arrivals",
        "Best Sellers",
      ].map((item, index) => ({ text: item, id: index + 1 })),
      activeFilter: "All",
    };

    this.activeFilter = (e) => {
      this.setState({
        activeFilter: e.target.dataset.filter,
      });
    };
  }

  clickHandler = (text, e) => {
    this.activeFilter(e);
    this.props.clickFilter(text);
  };

  render() {
    const { items, activeFilter } = this.state;

    return (
      <>
        <h3 className="filters__headline">Filter by</h3>
        <ul className="filters__list">
          <li className="filters__item filter">
            <button className="filter__btn">Collection</button>
            <ul className="filter__list">
              {items.map((item, index) => {
                const text = item.text;
                return (
                  <li
                    key={item.id}
                    className={
                      item.text === activeFilter
                        ? "filter__item active"
                        : "filter__item"
                    }
                    data-index={index}
                    data-filter={item.text}
                    onClick={this.clickHandler.bind(this, text)}
                  >
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </>
    );
  }
}

export default Accordion;
