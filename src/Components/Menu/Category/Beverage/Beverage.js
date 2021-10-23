import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { beverageData } from "./BeverageData";

const Beverage = () => {
  return (
    <div>
      <h1 className="text-secondary categoryHeader">Beverage</h1>
      {beverageData.map((beverageData) => (
        <MenuCard
          productName={beverageData.name}
          productDescription={beverageData.description}
          productPrice={beverageData.price}
          productImage={beverageData.image}
          deletedPrice={beverageData.deletedPrice}
        />
      ))}
    </div>
  );
};

export default Beverage;
