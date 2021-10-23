import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { pastaData } from "./PastaData";

const Pasta = () => {
  return (
    <div>
      <h1 className=" text-secondary categoryHeader">Pasta</h1>
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
