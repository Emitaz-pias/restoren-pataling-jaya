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
  const { productSelection, cart, selectDeliveryOption } =
    useContext(ProductsContext);
  const [selectedProduct, setSeletedProduct] = productSelection;
  const [cartData, setCartData] = cart;
  const [showIngredient, setShowIngredient] = useState(false);
  const [deliveryOpiton, setDeliveryOpiton] = selectDeliveryOption;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setDeliveryOpiton(data);
    setShowIngredient(true);
  };
  return (
    <div style={{ backgroundColor: "#D7D3D3" }}>
      <div className="productCard">
        <img className="mainImg" src={selectedProduct.image} alt="" />
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
          <h2 className="mt-2 mb-3">{selectedProduct.name}</h2>
          <h3 className="mt-3 mb-4 text-danger">{selectedProduct.price}</h3>
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
        </div>
      </div>

      {showIngredient ? (
        <div>
          {selectedProduct.ingredients !== undefined && (
            <Ingredients ingredients={selectedProduct.ingredients} />
          )}
          {selectedProduct.addOns !== undefined && (
            <AddOn addOns={selectedProduct.addOns} />
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
