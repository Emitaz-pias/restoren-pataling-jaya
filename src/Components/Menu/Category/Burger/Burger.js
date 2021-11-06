import React from "react";
import "./Burger.css";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { burgerData } from "./BurgerData";

const Burger = () => {
  return (
    <section className="burgers">
      <h1 className=" text-secondary categoryHeader">Burger</h1>
      {burgerData.map((burger) => (
        <div>
          <MenuCard productData={burger} />
        </div>
      ))}
    </section>
  );
};

export default Burger;
