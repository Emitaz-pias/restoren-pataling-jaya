import React, { useContext } from "react";
import { ProductsContext } from "../../../../App";
import "./Cart.css";

const Cart = () => {
  const { productSelection, cart, selectIngredients, selectDeliveryOption } =
    useContext(ProductsContext);
  const [selectedProduct, setSeletedProduct] = productSelection;
  const [indgredients, setIndgredients] = selectIngredients;
  const [deliveryOpiton, setDeliveryOpiton] = selectDeliveryOption;
  const [cartData, setCartData] = cart;

  const cartObj = {
    deliveryOpiton: deliveryOpiton,
    indgredients: indgredients,
  };
  console.log("our cart  frm cart page", cartObj);
  return (
    <div className="cartContainer">
      <div className="cartBody d-flex align-items-center justify-content-around">
        <a className="cartButton" href="/cart">
          Cart
        </a>
        <a className="cartButton" href="/cart">
          Items
        </a>
        <a className="cartButton" href="/cart">
          RM00.00
        </a>
      </div>
    </div>
  );
};

export default Cart;
