import React from "react";
import "./Slider.css";
import slide1 from "../../../images/pic1.jpg";

const Slider = () => {
  return (
    <div>
      <h4 className="hotDealTitile">Hot deals </h4>
      <div className="">
        <img className="sliderSection" src={slide1} alt="akdalkd"></img>
      </div>
    </div>
  );
};

export default Slider;
