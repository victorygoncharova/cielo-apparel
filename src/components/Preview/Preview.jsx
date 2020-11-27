import React from "react";
import { CreateList } from "../Constructors";
import "./Preview.scss";

import { previewFirst } from "../../images/images";
import { previewSecond } from "../../images/images";

const Preview = ({ data, type }) => {
  return (
    <section className="preview">
      <CreateList data={data} type={type} />
    </section>
  );
};

export default Preview;
