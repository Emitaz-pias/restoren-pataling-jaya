import React, { useContext, useState } from "react";
import { ProductsContext } from "../../../App";
import "./ProductDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Ingredients from "../Ingredients/Ingredients";
import AddOn from "../AddOn/AddOn";
import Remarks from "../Remarks/Remarks";
import Quantity from "../Quantity/Quantity";
import { Link } from "react-router-dom";
import Cart from "../../Menu/Footer/Cart/Cart";
import { useForm } from "react-hook-form";

const ProductDetails = () => {
  const { productSelection } = useContext(ProductsContext);
  const [sectedProduct, setSeletedProduct] = productSelection;
  const [getOrderType, setGetOrderType] = useState("");
  const [showIngredient, setShowIngredient] = useState(false);
  // const [showAddOn, setShowAddOn] = useState(false);
  // const [showRemarks, setShowRemarks] = useState(false);
  // const [showReview, setShowReview] = useState(false);

  console.log("our selected product", sectedProduct);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setShowIngredient(true);
  };
  console.log(errors);
  return (
    <div style={{ backgroundColor: "#D7D3D3" }}>
      <div className="productCard">
        <img className="mainImg" src={sectedProduct.image} alt="" />
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
          <h2 className="mt-2 mb-3">{sectedProduct.name}</h2>
          <h3 className="mt-3 mb-4 text-danger">{sectedProduct.price}</h3>
        </p>
      </div>

      <div className="orderTypeSection text-center">
        <small className="text-danger mt-2 ">
          Choose your order type to see the details *(required)
        </small>
        <div className="d-flex align-items-center justify-content-around mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("Delivery Options", { required: true })}
              type="radio"
              onChange={(e) => handleSubmit(onSubmit(e.target.value))}
              value="Dine-In "
              id="DineIn"
              class="form-check-input customRadioStyles"
            />
            <label class="form-check-label" for="DineIn">
              Dine-In
            </label>
            <input
              {...register("Delivery Options", { required: true })}
              type="radio"
              onChange={(e) => handleSubmit(onSubmit(e.target.value))}
              value="Take Away "
              id="takeAway"
              class="form-check-input customRadioStyles"
            />
            <label class="form-check-label" for="takeAway">
              Take Away
            </label>
            <input
              {...register("Delivery Options", { required: true })}
              type="radio"
              onChange={(e) => handleSubmit(onSubmit(e.target.value))}
              value="Deliver"
              id="Delivery"
              class="form-check-input customRadioStyles"
            />
            <label class="form-check-label" for="Delivery">
              Delivery
            </label>
          </form>
          {/* <div class="form-check">
            <input
              class="form-check-input customRadioStyles"
              type="radio"
              name="deliveryOption"
              id="DineIn"
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
              name="deliveryOption"
              id="TakeAway"
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
              name="deliveryOption"
              id="Deliver"
              onChange={(e) => {
                handleDeliver(e.target.value);
              }}
            />
            <label htmlFor="Deliver">Deliver</label>
            <label class="form-check-label" for="flexRadioDefault2">
              Deliver
            </label>
          </div> */}
        </div>
      </div>

      {showIngredient ? (
        <div>
          {sectedProduct.ingredients !== undefined && (
            <Ingredients ingredients={sectedProduct.ingredients} />
          )}
          {sectedProduct.addOns !== undefined && (
            <AddOn addOns={sectedProduct.addOns} />
          )}

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
