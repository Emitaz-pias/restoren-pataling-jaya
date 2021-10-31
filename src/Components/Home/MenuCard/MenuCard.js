import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../App";
import "./MenuCard.css";
import ProductDetails from "../../ProductDetails/ProductDetail/ProductDetails";

const MenuCard = ({
  productName,
  productImage,
  productPrice,
  productDescription,
}) => {
  return (
    <div>
      {productImage ? (
        <Link to="/product">
          <div className="cardBody d-flex align-items-center">
            <img
              className="cardImage"
              src={productImage}
              alt="bbq chiken burger"
            />

            <div className="productDetails">
              <h3 className="productName">{productName}</h3>
              <p className="productDescription">{productDescription}</p>
              <p className="productPrice">{productPrice}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="cardBodyWithoutImage d-flex align-items-center">
          <div className="productDetailsOnlyText">
            <h3 className="productName">{productName}</h3>
            <p className="productDescription">{productDescription}</p>
          </div>
          <p className="priceSection">{productPrice}</p>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
