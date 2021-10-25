import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cartContainer">
      <div className="cartBody d-flex align-items-center justify-content-around">
        <a className="cartButton" href="/cart">
          Cart
        </a>
        <a className="cartButton" href="/items">
          Items
        </a>
        <a className="cartButton" href="/Price">
          RM00.00
        </a>
      </div>
    </div>
  );
};

export default Cart;
