import React from "react";
import "./MenuCard.css";

const MenuCard = ({
  productName,
  productImage,
  productPrice,
  productDescription,
}) => {
  return (
    <div>
      {productImage ? (
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
      ) : (
        <div className="cardBodyWithoutImage d-flex align-items-center justify-content-between">
          <div className="productDetailsOnlyText">
            <h3 className="productName">{productName}</h3>
            <p className="productDescription">{productDescription}</p>
          </div>

          <p className="productPrice">{productPrice}</p>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
