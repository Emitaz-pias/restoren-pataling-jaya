import React, { useContext } from "react";
import { ProductsContext } from "../../App";

const CartPage = () => {
  const { productSelection, cart } = useContext(ProductsContext);
  const [selectedProduct, setSeletedProduct] = productSelection;
  const [cartData, setCartData] = cart;
  return (
    <div>
      <h1>our cart page</h1>
    </div>
  );
};

export default CartPage;
