import React, { useContext } from "react";
import { ProductsContext } from "../../App";

const CartPage = () => {
  const { productSelection, cart } = useContext(ProductsContext);
  const [selectedProduct, setSeletedProduct] = productSelection;
  const [cartData, setCartData] = cart;
  console.log("our cart data from cart page", cartData);

  cartData.map((oneProduct) => console.log("one product", oneProduct));

  return (
    <div>
      <h1>our cart page</h1>
    </div>
  );
};

export default CartPage;
