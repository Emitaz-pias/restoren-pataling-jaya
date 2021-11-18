import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../../App";
import "./Cart.css";

const Cart = ({ showIngredient, quantityCart, cartBtn }) => {
  const {
    productSelection,
    showCheckoutPage,
    cart,
    selectDeliveryOption,
    selectIngredients,
    selectAddons,
    getRemarks,
    addonPrice,
    detailsPage,
  } = useContext(ProductsContext);
  const [selectedProduct, setSeletedProduct] = productSelection;
  const [indgredients, setIndgredients] = selectIngredients;
  const [selectedAddons, setSelectedAddos] = selectAddons;
  const [deliveryOption, setDeliveryOption] = selectDeliveryOption;
  const [cartData, setCartData] = cart;
  const [addonsPrice, setAddonsPrice] = addonPrice;
  const [showDetails, setShowDetails] = detailsPage;
  const [remarks, setRemarks] = getRemarks;

  let addedProduct = [
    {
      selectedProduct: selectedProduct,
      deliveryOption: deliveryOption,
      indgredients: indgredients,
      addOns: selectedAddons,
      remarks: remarks,
      totalPrice: addonsPrice * quantityCart,
      orderQuantity: quantityCart,
    },
  ];
  const [buttonName, setButtonName] = useState("");
  const getTheButton = document.getElementById(`cartButton`);
  const [showCheckout, setShowCheckout] = showCheckoutPage;

  useEffect(() => {
    if (getTheButton !== null) {
      const detectButton = getTheButton.innerText;
      setButtonName(detectButton);
    }
  }, [getTheButton]);
  const handleShowCart = () => {
    setShowCheckout(true);
  };
  const handleAddToCartButton = () => {
    const newCartData = [...cartData, addedProduct];
    setCartData(newCartData);
    setShowDetails(false);
  };
  // console.log("our cart data", cartData);
  return (
    <div className="cartContainer">
      <div className="cartBody d-flex align-items-center justify-content-around">
        <button
          id="cartButton"
          onClick={
            buttonName === "Add To Cart"
              ? handleAddToCartButton
              : handleShowCart
          }
          className="cartButton btn"
        >
          {cartBtn}
        </button>
        <p className="cartButton">Items{cartData.length}</p>
        <p id="cartPrice" className="cartButton">
          {showIngredient === true ? (
            addonsPrice === 0 ? (
              <p>RM {selectedProduct.price}</p>
            ) : (
              <p>RM {addonsPrice * quantityCart}.00</p>
            )
          ) : (
            <p>RM00.00</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default Cart;
