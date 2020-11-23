import React from "react";
import {HeadlineProduct} from '../Headline';

import './Product.scss';

const CreateRibbon = (text, type) => {
return <span className={`ribbon ribbon_${type}`}>{text}</span>;
};


const ProductList = ({ data }) => {
  const productItem = data.map((item) => {

    const productImage = (<img className="product__pic" src={item.images.path} />);

    const productBody = (
      <>
          <a href="#" className="product__img">
            {productImage}
          </a>
          <HeadlineProduct text={item.title} url="#"/>
          <span className="product__price">{`${item.price}.00₴`}</span>
      </>
    );

    const CreateNewProduct = () => {

      return (
        <>
          { CreateRibbon('New Arrival', 'new') }
          {productBody}
        </>
      );

    };

    const CreateBestProduct = () => {
      return (
        <>
          { CreateRibbon('Best Seller', 'best') }
          {productBody}
        </>
      );
    };

    const CreateProduct = () => {
      return <>{productBody}</>;
    };

    const checkProduct = (
      (item.filters.collection.includes('New Arrivals')) ? CreateNewProduct() :
      (item.filters.collection.includes('Best Sellers')) ? CreateBestProduct() :
      CreateProduct()

    );

    return (
      <>
        <li className="product" key={item.id}>{checkProduct}</li>
      </>
    );
  });

  return <ul className='products'>{productItem}</ul>;
};

export { ProductList };
