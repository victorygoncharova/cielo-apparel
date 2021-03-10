import React, { Component } from "react";
import "./Main.scss";
import Preview from "../Preview";
import { productData, slideShowData, previewListData } from "../../data";
import { CreateLatestArrivals } from "../Constructors/";
import { HeadlineUpperCase } from "../Headline";
import SlideShow from "../SlideShow";
import { CreateColumns } from "../Constructors";
import { homeColumnVideo } from "../../images/images";
import Button from "../Button";

export default class Main extends Component {
  render() {
    const img = (
      <video
        className="columns__video"
        preload="auto"
        autoPlay={true}
        loop={true}
        muted="muted"
      >
        <source src={homeColumnVideo} type="video/mp4" />
      </video>
    );
    const header = (
      <>
        <h1 className="columns__headline">
          Introducing Your New Workout Wardrobe
        </h1>
        {<Button text="Start Shopping" url="/shop" mod="main" />}
      </>
    );

    return (
      <main className="main">
        <CreateColumns img={img} header={header} />
        <Preview data={previewListData} type="preview" />
        <section className="new-arrival">
          <HeadlineUpperCase text="Latest Arrivals" />
          <CreateLatestArrivals data={productData} />
        </section>
        <section className="follow-section">
          <SlideShow data={slideShowData} />
          <div className="follow">
            <HeadlineUpperCase text="Follow us on Instagram" />
          </div>
        </section>
      </main>
    );
  }
}
