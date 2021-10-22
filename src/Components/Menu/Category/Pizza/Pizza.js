import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { pizzaData } from "./PizzaData";

const Pizza = () => {
  return (
    <div>
      {pizzaData.map((pizza) => (
        <MenuCard
          productName={pizza.name}
          productImage={pizza.image}
          productPrice={pizza.price}
          productDescription={pizza.description}
          deletedPrice={pizza.deletedPrice}
        />
      ))}
    </div>
  );
};

export default Pizza;
