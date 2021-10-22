import React from "react";
import "./MenuCard.css";

const MenuCard = ({
  productName,
  productImage,
  productPrice,
  productDescription,
  deletedPrice,
}) => {
  return (
    <div className="cardBody d-flex align-items-center">
      <img className="cardImage" src={productImage} alt="bbq chiken burger" />
      <div className="productDetails ">
        <h3 className="productName">{productName}</h3>
        <p className="productDescription">{productDescription}</p>
        <div className="priceSeciton d-flex align-items-center">
          <p className="productPrice">{productPrice}</p>
          <p className="deletedPrice">
            <del>{deletedPrice}</del>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
