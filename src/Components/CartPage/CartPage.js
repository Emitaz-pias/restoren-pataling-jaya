import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./CartPage.css";
import { ProductsContext } from "../../App";

const CartPage = () => {
  const { productSelection, cart, showCheckoutPage } =
    useContext(ProductsContext);
  const [selectedProduct, setSeletedProduct] = productSelection;
  const [cartData, setCartData] = cart;
  const [showCheckout, setShowCheckout] = showCheckoutPage;

  console.log("our cart data from cart page", cartData);

  return (
    <main>
      <div className="cartHeader">
        <div
          onClick={() => setShowCheckout(false)}
          className="cartArrowBtn d-flex align-items-center "
        >
          <FontAwesomeIcon size="3x" icon={faArrowLeft} />
          <h4 className="titleCart"> Cart</h4>
        </div>
      </div>
      {cartData.length > 0 &&
        cartData.map((oneProduct, index) => (
          <div key={index} className="cartItem">
            {selectedProduct.forEach((product, index) => (
              <div key={index} className="">
                <img src={product.image} alt={"lkasdjf"} />
              </div>
            ))}
          </div>
        ))}
    </main>
  );
};

export default CartPage;
