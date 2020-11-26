import React from "react";
import {CreateColumns} from '../Constructors';
import {aboutColumnImg} from '../../images/images';

const AboutPage = () => {
    const img = (<img src={aboutColumnImg} className="columns__img" />);

    const header = <h2 className="columns__headline">ABOUT</h2>;

    const text = (
        <>
        <p className="columns__text">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <p className="columns__text">This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
        </>
    );

    return (
        <div className="about">
            <CreateColumns img={img} header={header} text={text}/>
        </div>
    )
}

export default AboutPage;