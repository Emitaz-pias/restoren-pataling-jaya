import React from "react";
import "./Slider.css";
import slide1 from "../../../images/pic1.jpg";
import slide2 from "../../../images/pic2.jpg";
import slide3 from "../../../images/pic3.jpg";
import slider1 from "../../../images/slider4.jpg";
import { Carousel } from "react-bootstrap";

const OurSlider = () => {
  return (
    <div style={{ marginLeft: "3%", marginRight: "3%" }} className="mt-3">
      {/* <h4 className="hotDealTitile">Promotions</h4> */}
      <Carousel interval={5000}>
        <Carousel.Item
          style={{
            backgroundColor: "transparent",
          }}
        >
          <img
            className="d-block w-100 sliderSectionImg"
            src={slider1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            backgroundColor: "transparent",
          }}
        >
          <img
            className="d-block w-100  sliderSectionImg"
            src={slider1}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            backgroundColor: "transparent",
          }}
        >
          <img
            className="d-block w-100  sliderSectionImg"
            src={slider1}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            backgroundColor: "transparent",
          }}
        >
          <div>
            <img
              className="d-block w-100 sliderSectionImg"
              src={slider1}
              alt="Third slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item
          style={{
            backgroundColor: "transparent",
          }}
        >
          <img
            className="d-block w-100 sliderSectionImg"
            src={slider1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default OurSlider;
