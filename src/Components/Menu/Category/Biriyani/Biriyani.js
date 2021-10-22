import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { biriyaniData } from "./BiriyaniData";

const Biriyani = () => {
  return (
    <div>
      {biriyaniData.map((biriyani) => (
        <MenuCard
          productName={biriyani.name}
          productDescription={biriyani.description}
          productImage={biriyani.image}
          productPrice={biriyani.price}
          deletedPrice={biriyani.deletedPrice}
        />
      ))}
    </div>
  );
};

export default Biriyani;
