import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../App";
import "./MenuCard.css";
import ProductDetails from "../../ProductDetails/ProductDetail/ProductDetails";

const MenuCard = ({ productData }) => {
  const { productSelection } = useContext(ProductsContext);
  const [sectedProduct, setSeletedProduct] = productSelection;

  const handleSelectProduct = (selectedProduct) => {
    const product = selectedProduct;
    setSeletedProduct(product);
  };

  return (
    <div>
      {productData.image ? (
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/product"
          onClick={() => handleSelectProduct(productData)}
        >
          <div className="cardBody d-flex align-items-center">
            <img
              className="cardImage"
              src={productData.image}
              alt="bbq chiken burger"
            />

            <div className="productDetails">
              <h3 className="productName">{productData.name}</h3>
              <p className="productDescription">{productData.description}</p>
              <p className="productPrice">{productData.price}</p>
            </div>
          </div>
        </Link>
      ) : (
        <div className="cardBodyWithoutImage d-flex align-items-center">
          <div className="productDetailsOnlyText">
            <h3 className="productName">{productData.name}</h3>
            <p className="productDescription">{productData.description}</p>
          </div>
          <p className="priceSection">{productData.price}</p>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
