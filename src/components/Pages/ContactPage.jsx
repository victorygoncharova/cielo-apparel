import React from "react";

import {contactColumnImg} from '../../images/images';
import {CreateColumns} from '../Constructors/';


const ContactPage = () => {
    const img = (<img src={contactColumnImg} className="columns__img" />);

    const header = <h2 className="columns__headline">Contact</h2>;

    const text = (
        <>
        <span className="columns__label">Visit our store</span>
        <p className="columns__text">Address: 500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Phone: 123-456-7890<br/>Email:  <a href="mailto:info@my-domain.com" className='columns__link'>info@my-domain.com</a></p>

        <form action="" method="POST" className="columns__form form">
            <div className="form__row">

            <input type="text" className="form__field" id="input-1" name="name" placeholder="Name" required/>
            <input type="email" className="form__field" id="input-2" name="email" placeholder="Email" required/>
           
            </div>
            <input type="text" className="form__field form__field_text" id="input-3" name="email" placeholder="Type your message here..." required/>
            <button className="form__btn">Submit</button>
        </form>
        <span className="columns__label">Stocklist</span>
        <p className="columns__text">Store 1<br/>500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Tel: 123-456-7890</p>
        <p className="columns__text">Store 2<br/>500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Tel: 123-456-7890</p>
        <p className="columns__text">Store 3<br/>500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Tel: 123-456-7890</p>
        <p className="columns__text">Store 4<br/>500 Terry Francois Street<br/>San Francisco, CA 94158<br/>Tel: 123-456-7890</p>
        </>
    );

    return (
        <div className="contact">
            <CreateColumns img={img} header={header} text={text}/>
        </div>
    )
}

export default ContactPage;