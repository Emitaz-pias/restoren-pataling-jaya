import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ProductsContext } from "../../../../App";
import { getCartItems } from "../../../../redux/actions/CartAction";
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = ({ showIngredient, quantityCart, cartBtn }) => {
  const dispatch = useDispatch();
  const { productSelection, showCheckoutPage, cart, selectDeliveryOption, selectIngredients, selectAddons, getRemarks, addonPrice, detailsPage, price
  } = useContext(ProductsContext);

  const [selectedProduct, setSeletedProduct] = productSelection;
  const [indgredients, setIndgredients] = selectIngredients;
  const [selectedAddons, setSelectedAddos] = selectAddons;
  const [deliveryOption, setDeliveryOption] = selectDeliveryOption;
  const [cartData, setCartData] = cart;
  const [addonsPrice, setAddonsPrice] = addonPrice;
  const [showDetails, setShowDetails] = detailsPage;
  const [remarks, setRemarks] = getRemarks;
  const [totalPrice, setTotalPrice] = price;

  const addedProduct = {
    name: selectedProduct.name,
    image: selectedProduct.image,
    orderOption: deliveryOption,
    addOns: selectedAddons,
    remarks: remarks,
    subTotal: addonPrice > 0 ? addonsPrice * quantityCart : selectedProduct.price,
    quantity: quantityCart
  }

  // console.log(addedProduct, cartData)
  const [buttonName, setButtonName] = useState("");
  const getTheButton = document.getElementById(`cartButton`);
  const [setShowCheckout] = showCheckoutPage;

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
    dispatch(getCartItems(newCartData));
  };
  // console.log("our cart data", cartData);
  return (
    <div className="cartContainer" >
      <div className="cartBody d-flex align-items-center justify-content-around">
        {/* <button
          id="cartButton"
          onClick={
            buttonName === "Add To Cart"
              ? handleAddToCartButton
              : handleShowCart
          }
          className="cartButton btn"
        >
          {cartBtn}
        </button> */}
        <Link><button className="cartButton btn" onClick={handleAddToCartButton}>Add To Cart</button></Link>
        <Link to="/cart"><button className="cartButton btn">Cart</button></Link>
        <p className="cartButton">Items {cartData.length}</p>
        <p id="cartPrice" className="cartButton">
          {showIngredient === true ? (
            addonsPrice === 0 ? (
              <p>RM {selectedProduct.price}</p>
            ) : (
                <p>RM {addonsPrice * quantityCart}.00</p>
              // <p>{totalPrice}</p>
            )
          ) : (
            <p>RM 00.00</p>
          )}
        </p>
      </div>
    </div >
  );
};

export default Cart;
