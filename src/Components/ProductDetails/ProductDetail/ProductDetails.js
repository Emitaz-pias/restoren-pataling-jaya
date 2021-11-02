import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../App";
import "./ProductDetails.css";
import BurgerPic from "../../../images/burger2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Ingredients from "../Ingredients/Ingredients";
import AddOn from "../AddOn/AddOn";
import Remarks from "../Remarks/Remarks";
import Quantity from "../Quantity/Quantity";
import { Link } from "react-router-dom";
import Cart from "../../Menu/Footer/Cart/Cart";

const ProductDetails = () => {
  // const { productSelection } = useContext(ProductsContext);
  // const [sectedProduct, setSeletedProduct] = productSelection;
  const [getOrderType, setGetOrderType] = useState("");
  const [showIngredient, setShowIngredient] = useState(false);
  // const [showAddOn, setShowAddOn] = useState(false);
  // const [showRemarks, setShowRemarks] = useState(false);
  // const [showReview, setShowReview] = useState(false);

  // console.log(sectedProduct);
  const handleTakeOut = () => {
    setShowIngredient(true);
  };
  const handleDeliver = () => {
    setShowIngredient(true);
  };

  const handleDineIn = () => {
    setShowIngredient(true);
  };
  return (
    <div style={{ backgroundColor: "#D7D3D3" }}>
      <div className="productCard">
        <img className="mainImg" src={BurgerPic} alt="" />
        <p className="arrowBtn">
          <Link
            style={{
              textDecoration: "none",
              color: "#D7D3D3",
            }}
            to="/"
          >
            {" "}
            <FontAwesomeIcon size="3x" icon={faArrowLeft} />
          </Link>
        </p>
        <p className="descriptions">
          <h2 className="mt-2 mb-3">Best Biriyani</h2>
          <h3 className="mt-3 mb-4">RM20.00</h3>
        </p>
      </div>

      <div className="orderTypeSection text-center">
        <small className="text-danger mt-2 ">
          Choose your order type to see the details *(required)
        </small>
        <div className="d-flex align-items-center justify-content-around mt-4">
          <div class="form-check">
            <input
              class="form-check-input customRadioStyles"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={(e) => {
                handleDineIn(e.target.value);
              }}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Dine-In
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input customRadioStyles"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={(e) => {
                handleTakeOut(e.target.value);
              }}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Take Away
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input customRadioStyles"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onChange={(e) => {
                handleDeliver(e.target.value);
              }}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Deliver
            </label>
          </div>
        </div>
      </div>

      {showIngredient ? (
        <div>
          <Ingredients />
          <AddOn />
          <Remarks />
          <Quantity />
        </div>
      ) : null}
      <div className="mt-5">
        <Cart />
      </div>
    </div>
  );
};

export default ProductDetails;
