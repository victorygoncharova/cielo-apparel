import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

import { footerListData, headerListData, previewListData } from "../../data";

import "./App.scss";

function App() {
  return (
    <div className="wrapper">
      <Header data={headerListData} type="header" />
      <Main data={previewListData} type="preview" />
      <Footer data={footerListData} type="footer" />
    </div>
  );
}

export default App;
