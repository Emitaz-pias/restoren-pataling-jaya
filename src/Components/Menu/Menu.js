import React from "react";
import Category from "./Category/Category";
import "./Menu.css";
import Slider from "./Slider/Slider";
import Beverage from "../Menu/Category/Beverage/Beverage";
import Biriyani from "../Menu/Category/Biriyani/Biriyani";
import Burger from "../Menu/Category/Burger/Burger";
const Menu = () => {
  const changeBackgroundColor = () => {
    console.log("scrollded is", window.scrollY);
  };

  document.addEventListener("scroll", changeBackgroundColor);
  return (
    <section>
      <Slider></Slider>
      <div style={{ position: "sticky", top: "10px" }}>
        <Category />
      </div>
      <div>
        <Beverage />
        <Biriyani />
        <Burger />
      </div>
    </section>
  );
};

export default Menu;
