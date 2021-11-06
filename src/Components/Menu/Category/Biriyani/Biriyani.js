import React from "react";
import MenuCard from "../../../Home/MenuCard/MenuCard";
import { biriyaniData } from "./BiriyaniData";

const Biriyani = () => {
  return (
    <div>
      <h1 className="text-secondary categoryHeader">Biriyani</h1>
      {biriyaniData.map((biriyani) => (
        <MenuCard productData={biriyani} />
      ))}
    </div>
  );
};

export default Biriyani;
