import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../App";
import "./ProductDetails.css";
import BurgerPic from "../../../images/burger2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Ingredients from "../Ingredients/Ingredients";
import AddOn from "../AddOn/AddOn";
import Remarks from "../Remarks/Remarks";

const ProductDetails = () => {
  // const { productSelection } = useContext(ProductsContext);
  // const [sectedProduct, setSeletedProduct] = productSelection;
  const [getOrderType, setGetOrderType] = useState("");
  const [showIngredient, setShowIngredient] = useState(false);
  const [showAddOn, setShowAddOn] = useState(false);
  const [showRemarks, setShowRemarks] = useState(false);
  const [showReview, setShowReview] = useState(false);

  // console.log(sectedProduct);
  const handleTakeOut = () => {
    setShowIngredient(true);
  };
  const handleDeliver = () => {
    setShowIngredient(true);
  };

  return (
    <div style={{ backgroundColor: "rgb(215,211,211)" }}>
      <div className="productCard">
        <img className="mainImg" src={BurgerPic} alt="" />
        <p className="arrowBtn">
          <FontAwesomeIcon size="3x" icon={faArrowLeft} />
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
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
