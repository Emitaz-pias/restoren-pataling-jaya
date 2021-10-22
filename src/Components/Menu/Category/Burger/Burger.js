import React from "react";
import "./Burger.css";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { burgerData } from "./BurgerData";

const Burger = () => {
  return (
    <section className="burgers">
      {burgerData.map((burger) => (
        <MenuCard
          productImage={burger.image}
          productName={burger.name}
          productDescription={burger.description}
          productPrice={burger.price}
          deletedPrice={burger.deletedPrice}
        />
      ))}
    </section>
  );
};

export default Burger;
