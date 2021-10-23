import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { riceData } from "./RiceData";

const Rice = () => {
  return (
    <div>
      <h1 className="text-secondary categoryHeader">Rice</h1>
      {riceData.map((rice) => (
        <MenuCard
          productName={rice.name}
          productDescription={rice.description}
          productImage={rice.image}
          productPrice={rice.price}
          deletedPrice={rice.deletedPrice}
        />
      ))}
    </div>
  );
};

export default Rice;
