import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { beverageData } from "./BeverageData";

const Beverage = () => {
  return (
    <div>
      <h1 className="text-secondary categoryHeader">Beverage</h1>
      {beverageData.map((beverageData) => (
        <MenuCard productData={beverageData} />
      ))}
    </div>
  );
};

export default Beverage;
