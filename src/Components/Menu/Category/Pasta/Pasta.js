import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { pastaData } from "./PastaData";

const Pasta = () => {
  return (
    <div>
      <h1 className=" text-secondary categoryHeader">Pasta</h1>
      {pastaData.map((pasta) => (
        <MenuCard productData={pasta} />
      ))}
    </div>
  );
};

export default Pasta;
