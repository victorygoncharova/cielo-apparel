import React from "react";
import "./Headline.scss";

const HeadlineUpperCase = ({ text }) => {
  const mod = "headline_upper";
  return <h2 className={`headline ${mod}`}>{text}</h2>;
};

const HeadlineProduct = ({ text, url }) => {
  return (<> <h3 className="product__headline">
  <a href={url} className="product__link">
    {text}
  </a>
</h3></>);
};

const HeadlineSmall = ({ text }) => {
  const mod = "headline_small";
  return <h4 className={`headline ${mod}`}>{text}</h4>;
};

export { HeadlineUpperCase, HeadlineProduct, HeadlineSmall };
