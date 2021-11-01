import React, { useContext, useState } from "react";
import "./Quantity.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrementQty = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrementQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="quantityContainer">
      <div className="d-flex justify-content-between align-items-center">
        <h3>Quantity</h3>
        <span onClick={handleDecrementQty}>
          <FontAwesomeIcon icon={faMinus} />
        </span>
        <span>{quantity}</span>
        <span onClick={handleIncrementQty}>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
    </div>
  );
};

export default Quantity;
