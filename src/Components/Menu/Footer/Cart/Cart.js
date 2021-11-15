import React, { useContext } from "react";
import { ProductsContext } from "../../../../App";
import "./Cart.css";

const Cart = ({ showIngredient, quantityCart }) => {
  const { productSelection, cart, selectIngredients, selectDeliveryOption, addonPrice } =
    useContext(ProductsContext);
  const [selectedProduct, setSeletedProduct] = productSelection;
  const [indgredients, setIndgredients] = selectIngredients;
  const [deliveryOption, setDeliveryOption] = selectDeliveryOption;
  const [cartData, setCartData] = cart;
  const [addonsPrice, setAddonsPrice] = addonPrice

  const cartObj = {
    deliveryOption: deliveryOption,
    indgredients: indgredients,
    selectedProduct: selectedProduct,
    totalPrice: addonsPrice,
    orderQuantity: quantityCart
  };
  console.log("our cart  frm cart page", cartObj, cartData);
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
          {showIngredient === true ?

            addonsPrice === 0 ? <p>RM {selectedProduct.price}</p> : <p>RM {addonsPrice * quantityCart}.00</p>

            :
            <p>RM00.00</p>}
        </a>
      </div>
    </div>
  );
};

export default Cart;
