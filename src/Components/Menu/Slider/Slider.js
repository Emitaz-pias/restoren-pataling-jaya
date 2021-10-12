import React from "react";
import "./Slider.css";
import slider1 from "../../../images/slider4.jpg";
import { Carousel } from "react-bootstrap";

const OurSlider = () => {
  return (
    <div style={{ marginLeft: "2%", marginRight: "2%" }} className="mt-3">
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
