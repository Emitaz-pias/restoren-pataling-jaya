import React, { useState } from "react";
import Category from "./Category/Category";
import "./Menu.css";
import Slider from "./Slider/Slider";
import Beverage from "../Menu/Category/Beverage/Beverage";
import Biriyani from "../Menu/Category/Biriyani/Biriyani";
import Burger from "../Menu/Category/Burger/Burger";
import Juice from "../Menu/Category/Juice/Juice";
import Pasta from "../Menu/Category/Pasta/Pasta";
import Pizza from "../Menu/Category/Pizza/Pizza";
import Rice from "../Menu/Category/Rice/Rice";
const Menu = () => {
  const [active, setActive] = useState("");
  const changeBackgroundColor = () => {
    // console.log("scrollded is", window.scrollY);
    if (window.scrollY < 738 && window.scrollY > 0) {
      setActive("active burger");
    }
    if (window.scrollY < 1476 && window.scrollY > 739) {
      setActive("active pizza");
    }
    if (window.scrollY < 2214 && window.scrollY > 1442) {
      setActive("active biriyani");
    }
    if (window.scrollY < 2952 && window.scrollY > 2140) {
      setActive("active pasta");
    }
    if (window.scrollY < 3690 && window.scrollY > 2828) {
      setActive("active rice");
    }
    if (window.scrollY < 4428 && window.scrollY > 3519) {
      setActive("active beverage");
    }
    if (window.scrollY < 5166 && window.scrollY > 4429) {
      setActive("active juice");
    }
  };

  // console.log("from state", active);

  document.addEventListener("scroll", changeBackgroundColor);
  return (
    <section>
      <Slider></Slider>
      <div style={{ position: "sticky", top: "10px" }}>
        <Category detect={active} />
      </div>
      <div>
        <Burger />
        <Pizza />
        <Biriyani />
        <Pasta />
        <Rice />
        <Beverage />
        <Juice />
      </div>
    </section>
  );
};

export default Menu;
