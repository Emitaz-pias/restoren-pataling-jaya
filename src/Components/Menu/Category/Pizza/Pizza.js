import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { pizzaData } from "./PizzaData";

const Pizza = () => {
  return (
    <div>
      <h1 className="text-secondary categoryHeader">Pizza</h1>
      {pizzaData.map((pizza) => (
        <MenuCard productData={pizza} />
      ))}
    </div>
  );
};

export default Pizza;
