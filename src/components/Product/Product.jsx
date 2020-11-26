import React, {Component} from "react";
import {HeadlineProduct} from '../Headline';
import {Link} from 'react-router-dom';
import './Product.scss';
import QuickView from '../QuickView';



class Products extends Component {
  
  constructor() {
    super();
    this.state = {
      hoverId: null,
      isHovered: false,
    };
  }

  onFocus = (e) => { 
    
    this.setState(({isHovered, hoverId}) => {       
      return {
        hoverId: +e.target.dataset.id,
        isHovered: !isHovered,

      }
     })
     
  }

  offFocus = (e) => { 
    
    this.setState(({isHovered, hoverId}) => {       
      return {
        hoverId: 0,
        isHovered: false,
        activeModal: null,
        showModal: false,
      }
     })
     
  }

  createList = (data) => {

    const li = data.map(item => {
      const id = item.id;
      return <li key={item.id} className="product" data-id={item.id} onMouseEnter={this.onFocus} onMouseLeave={this.offFocus}> {this.checkProduct(item, id)} </li>

    })

    return <>{li}</>
  }

  checkProduct = (item, id) => {


    if (item.filters.collection.includes('New Arrivals')) {
      return (this.createNewProduct(item, id))
    } else if (item.filters.collection.includes('Best Sellers')) {
      return (this.createBestProduct(item, id))
    } else {
      return (this.createProduct(item, id))
    }
    
  };


 createNewProduct = (item, id) => {
  return (
    <>
    {this.createRibbon('New Arrival', 'new') }
    {this.productBody(item, id)}
    </>
  )
  };

  createBestProduct = (item, id) => {
    return (
        <>
            {this.createRibbon('Best Seller', 'best') }
            {this.productBody(item, id)}
         </>
         )
  };

  createQuickView = (id) => {
    console.log(id);
    this.setState(({activeModal, showModal}) => {       
      return {
        activeModal: id,
        showModal: !showModal,
      }
     }
  );

  }

  createProduct = (item, id) => {
     return <>
     {this.productBody(item, id)}
     </>
  }


  productBody = (item, id) => {
    const classes = 'quick-view-button';
    const activeId = id;
    return (
      <>   
        <a data-id={item.id} href="/" className="product__img">
            <img className="product__pic" src={item.images.path} />
        </a>
        
        <button data-id={item.id} className={(this.state.isHovered && (this.state.hoverId === activeId)) ? `${classes} active` : classes} onClick={() => this.createQuickView(item.id)}>
          Quick View 
        </button>

        <HeadlineProduct text={item.title} url="#"/>
        <span data-id={item.id} className="product__price">{`${item.price}.00₴`}</span>


        </>

    )
  };

  createRibbon = (text, type) => {
    return <span className={`ribbon ribbon_${type}`}>{text}</span>;
  };

  render() {

    const { data } = this.props;
    const { isHovered, hoverId, showModal, activeModal} = this.state;

    
    return (
      <>
        <ul className='products'>{this.createList(data)}</ul>
        {this.state.showModal && (<QuickView>
          <div className="zzz">hhhhh</div>
      </QuickView>)}
      </>
    )
  }
}

export default Products;