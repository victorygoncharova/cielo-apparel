import React from "react";
import { HeadlineSmall } from "../Headline";
import {Link} from 'react-router-dom';
import Logo from "../svg/Logo.jsx";
import { ProductList } from "../Product";



const CreateLatestArrivals = ({ data }) => {
  const newData = data.filter(item => item.filters.collection.includes('New Arrivals'));
  return <ProductList data={newData} />;
};


const CreateImage = ({ src }) => {
  return <img src={src} />;
};



const CreateColumns = ({ count }) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    const el = <div className="column"></div>;
    arr.push(el);
  }
  return <>{arr}</>;
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
        </div>
      );
    } else {
      return (
        <>
          {ul}
        </>
      );
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
      <Link to="/" className="logo__text"><span>Cielo Apparel</span></Link>
    </div>
  );
};

export { CreateList, CreateListItem, CreateColumns, CreateLogo, CreateImage, CreateLatestArrivals };
