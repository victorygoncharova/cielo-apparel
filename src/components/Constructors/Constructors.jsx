import React from "react";
import { HeadlineSmall } from "../Headline";
import { Link } from "react-router-dom";
import Logo from "../svg/Logo.jsx";
import Products from "../Product";
import "./Constructors.scss";

const CreateLatestArrivals = ({ data }) => {
  const newData = data.filter((item) =>
    item.filters.collection.includes("New Arrivals")
  );
  return <Products data={newData} />;
};

const CreateColumns = ({ text, img, header }) => {
  return (
    <div className="columns">
      <div className="columns__left">
        <div className="columns__content">
          {header}
          {text}
        </div>
      </div>
      <div className="columns__right">{img}</div>
    </div>
  );
};

const CreateList = ({ data, type }) => {
  const el = data.map((item) => {
    const ul = (
      <ul className={`${type}__list`} key={item.id}>
        <CreateListItem data={item} type={type} />
      </ul>
    );
    if ("items" in item && "headline" in item) {
      return (
        <div className={`${type}__column`}>
          <HeadlineSmall text={item.headline} />
          {ul}
        </div>
      );
    } else if (!("items" in item)) {
      return (
        <div className={`${type}__column`}>
          <HeadlineSmall text={item.headline} />
          <form
            action=""
            method="POST"
            className="columns__form form form_footer"
          >
            <input
              type="email"
              className="form__field"
              id="input-1"
              name="email"
              placeholder="Enter your email here"
              required
            />
            <button className="btn btn_footer">Submit</button>
          </form>
        </div>
      );
    } else {
      return <>{ul}</>;
    }
  });

  return <>{el}</>;
};

const CreateListItem = ({ data: { items }, type }) => {
  const li = items.map((item) => {
    return (
      <li className={`${type}__item`} key={item.id}>
        <Link to={item.url} className={`${type}__link`} target="_self">
          <span>{item.label}</span>
        </Link>
      </li>
    );
  });

  return <>{li}</>;
};

const CreateLogo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <Logo />
      </Link>
      <Link to="/" className="logo__text">
        <span>Cielo Apparel</span>
      </Link>
    </div>
  );
};

export {
  CreateList,
  CreateListItem,
  CreateColumns,
  CreateLogo,
  CreateLatestArrivals,
};
