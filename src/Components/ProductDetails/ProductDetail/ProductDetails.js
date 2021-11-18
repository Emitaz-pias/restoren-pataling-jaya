import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductsContext } from "../../../App";
import Cart from "../../Menu/Footer/Cart/Cart";
import AddOn from "../AddOn/AddOn";
import Ingredients from "../Ingredients/Ingredients";
import Quantity from "../Quantity/Quantity";
import Remarks from "../Remarks/Remarks";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productSelection, cart, selectDeliveryOption, price, detailsPage } =
    useContext(ProductsContext);

  const [showDetails, setShowDetails] = detailsPage;
  const [selectedProduct, setSeletedProduct] = productSelection;
  const [cartData, setCartData] = cart;
  const [showIngredient, setShowIngredient] = useState(false);
  const [deliveryOption, setDeliveryOption] = selectDeliveryOption;
  const [totalPrice, setTotalPrice] = price;
  const [quantityCart, setQuantityCart] = useState(1);

  if (showIngredient === true) {
    setTotalPrice(selectedProduct.price);
  }

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setDeliveryOption(data);
    setShowIngredient(true);
  };

  return (
    <div style={{ backgroundColor: "#D7D3D3" }}>
      <div className="productCard">
        <img className="mainImg" src={selectedProduct.image} alt="" />
        <p onClick={() => setShowDetails(false)} className="arrowBtn">
          <FontAwesomeIcon size="3x" icon={faArrowLeft} />
        </p>
        <p className="descriptions">
          <h2 className="mt-2 mb-3">{selectedProduct.name}</h2>
          <h3 className="mt-3 mb-4 text-danger">RM {selectedProduct.price}</h3>
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
              className="form-check-input customRadioStyles"
            />
            <label className="form-check-label" for="DineIn">
              Dine-In
            </label>
            <input
              {...register("Delivery Options", { required: true })}
              type="radio"
              onChange={(e) => handleSubmit(onSubmit(e.target.value))}
              value="Take Away "
              id="takeAway"
              className="form-check-input customRadioStyles"
            />
            <label className="form-check-label" for="takeAway">
              Take Away
            </label>
            <input
              {...register("Delivery Options", { required: true })}
              type="radio"
              onChange={(e) => handleSubmit(onSubmit(e.target.value))}
              value="Deliver"
              id="Delivery"
              className="form-check-input customRadioStyles"
            />
            <label className="form-check-label" for="Delivery">
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
          {selectedProduct.addOns !== undefined && <AddOn />}

          <Remarks />
          <Quantity
            quantityCart={quantityCart}
            setQuantityCart={setQuantityCart}
          />
        </div>
      ) : null}
      <div className="mt-5">
        <Cart
          cartBtn={"Add To Cart"}
          showIngredient={showIngredient}
          quantityCart={quantityCart}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
