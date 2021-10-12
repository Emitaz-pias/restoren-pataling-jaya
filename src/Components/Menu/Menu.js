import React from "react";
import Category from "./Category/Category";
import "./Menu.css";
import Slider from "./Slider/Slider";
const Menu = () => {
  return (
    <section>
      <Slider></Slider>
      <Category />
      <sction>
        <div id="all" style={{ height: "100vh", backgroundColor: "wheat" }}>
          <h3>all menus here </h3>
        </div>
      </sction>
    </section>
  );
};

export default Menu;
