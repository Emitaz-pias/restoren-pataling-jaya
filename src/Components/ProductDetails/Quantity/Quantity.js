import React, { useContext, useState } from "react";
import "./Quantity.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Quantity = ({ quantityCart, setQuantityCart }) => {
  const handleIncrementQty = () => {
    setQuantityCart((quantityCart += 1));
  };
  const handleDecrementQty = () => {
    if (quantityCart > 1) {
      setQuantityCart((quantityCart -= 1));
    }
  };
  return (
    <div className="quantityContainer">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Quantity</h3>
        <span onClick={handleDecrementQty}>
          <FontAwesomeIcon icon={faMinus} />
        </span>
        <span>{quantityCart}</span>
        <span onClick={handleIncrementQty}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
    </div>
  );
};

export default Quantity;
