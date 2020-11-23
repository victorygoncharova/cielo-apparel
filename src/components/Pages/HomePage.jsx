import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";
import { footerListData, headerListData, previewListData, productData } from "../../data";

const HomePage = () => {
    return(

        <>
        <Header data={headerListData} type="header" />
        <Main data={previewListData} type="preview" />
        <Footer data={footerListData} type="footer" />

        </>
    )
}

export default HomePage;