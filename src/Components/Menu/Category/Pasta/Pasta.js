import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { pastaData } from "./PastaData";

const Pasta = () => {
  return (
    <div>
      {pastaData.map((pasta) => (
        <MenuCard
          productImage={pasta.image}
          productName={pasta.name}
          productDescription={pasta.description}
          productPrice={pasta.price}
          deletedPrice={pasta.deletedPrice}
        />
      ))}
    </div>
  );
};

export default Pasta;
