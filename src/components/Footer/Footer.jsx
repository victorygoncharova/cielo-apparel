import React from "react";
import { CreateList } from "../Constructors";

import "./Footer.scss";

const Footer = ({ data, type }) => {
  return (
    <footer className="footer">
      <CreateList data={data} type={type} />
    </footer>
  );
};

export default Footer;

/* const CreateColumn = ({data}) => {

const lists = data.map((item) => {
    const i = item.map((items) => {
        return <li>{items.id}</li>
    })
return <ul>{i}</ul>;
});

return (<div>
    {lists} 
    </div>);
    };

 */
/* 
const items = lists.map((item) => {
return <li>{item.id}</li>;
})

console.log(items); */

/* 
                <div className='footer__content'>
                    <div className='footer__column'>
                        <h3 className='footer__headline'>Cielo Apparel</h3>
                        <ul className='footer__list'>
                            <li className="footer__item"><a href="https://ilyaillych.wixsite.com/mysite-18/" className="footer__link"><span>Home</span></a></li>
                            <li className="footer__item"><a href="https://ilyaillych.wixsite.com/mysite-18/shop" className="footer__link"><span>Shop</span></a></li>
                            <li className="footer__item"><a href="https://ilyaillych.wixsite.com/mysite-18/about" className="footer__link"><span>About</span></a></li>
                            <li className="footer__item"><a href="https://ilyaillych.wixsite.com/mysite-18/" className="footer__link"><span>Forum</span></a></li>
                            <li className="footer__item"><a href="https://ilyaillych.wixsite.com/mysite-18/contact" className="footer__link"><span>Contact</span></a></li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                        <h3 className='footer__headline'>Explore</h3>
                        <ul className='footer__list'>
                            <li className="footer__item"><a href="#" className="footer__link"><span>FAQ</span></a></li>
                            <li className="footer__item"><a href="https://ilyaillych.wixsite.com/mysite-18/shipping-returns" className="footer__link"><span>Shipping & Returns</span></a></li>
                            <li className="footer__item"><a href="https://ilyaillych.wixsite.com/mysite-18/" className="footer__link"><span>Store Policy</span></a></li>
                            <li className="footer__item"><a href="#" className="footer__link"><span>Payment Methods</span></a></li>
                        </ul>
                    </div>
                    <div className='footer__column'>
                        <h3 className='footer__headline'>Join our Newsletter</h3>

                    </div>
                    <div className='footer__column'>
                        <h3 className='footer__headline'>Follow Us</h3>
                        <ul className='footer__list'>
                            <li className="footer__item"><a href="http://www.facebook.com/wix" className="footer__link"><span>Facebook</span></a></li>
                            <li className="footer__item"><a href="http://www.twitter.com/wix" className="footer__link"><span>Twitter</span></a></li>
                            <li className="footer__item"><a href="http://instagram.com/wix" className="footer__link"><span>Instagram</span></a></li>
                            <li className="footer__item"><a href="http://pinterest.com/wixcom/" className="footer__link"><span>Pinterest</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer__copyright'><span>© 2023 by Cielo Apparel. Proudly created with Wix.com</span></div> */
