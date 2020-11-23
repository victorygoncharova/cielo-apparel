import React from "react";
import Header from "../Header";

import Footer from "../Footer";

import { footerListData, headerListData} from "../../data";

const AboutPage = () => {
    return(

        <>
        <Header data={headerListData} type="header" />
        <Footer data={footerListData} type="footer" />
        </>
    )
}

export default AboutPage;