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
  cartData.length > 0 &&
    cartData.map((oneProduct, index) => {
      return oneProduct.map((info) => {
        return (
          <div key={index} className="">
            <img
              src="https://i.ibb.co/fFGpFK2/biriyani.png"
              alt="selecte product pic"
            ></img>
            <h1>ishlk{info.deliveryOption}</h1>
          </div>
        );
      });
    });

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
      {cartData.map((oneProduct, index) => {
        return oneProduct.map((info) => {
          return (
            <section>
              <div key={index} className="cartProductContainer d-flex">
                <img
                  className="productImage"
                  src="https://i.ibb.co/fFGpFK2/biriyani.png"
                  alt="selecte product pic"
                ></img>
                <div className="pdDetailsContainer">
                  <p> {info.selectedProduct.name}</p>
                  {info.selectedProduct.ingredients && (
                    <p>{info.selectedProduct.ingredients}</p>
                  )}
                  <p>RM.{info.totalPrice}.00</p>
                  <p>addOns</p>
                </div>
                <div className="deliveryOptionContainer">
                  <small className="deliveryOption">
                    {info.deliveryOption}
                  </small>
                  <br />
                  <small className="fw-bold mt-5 pt-5">Edit</small>
                </div>
              </div>
              <hr />
            </section>
          );
        });
      })}
    </main>
  );
};

export default CartPage;
