import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { juiceData } from "./JuiceData";

const Juice = () => {
  return (
    <div>
      <h1 className=" text-secondary categoryHeader">Juice</h1>
      {juiceData.map((juice) => (
        <MenuCard
          productName={juice.name}
          productDescription={juice.description}
          productImage={juice.image}
          productPrice={juice.price}
          deletedPrice={juice.deletedPrice}
        />
      ))}
    </div>
  );
};

export default Juice;
