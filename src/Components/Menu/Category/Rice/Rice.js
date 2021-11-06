import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { riceData } from "./RiceData";

const Rice = () => {
  return (
    <div>
      <h1 className="text-secondary categoryHeader">Rice</h1>
      {riceData.map((rice) => (
        <MenuCard productData={rice} />
      ))}
    </div>
  );
};

export default Rice;
