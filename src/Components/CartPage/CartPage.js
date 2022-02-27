import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import "./CartPage.css";
import { ProductsContext } from "../../App";
import burgerJpg from "../../images/burger2.jpg";
import { Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom';

const cartData = [
  {
    id: 1, name: "BBQ Chicken Burger", image: burgerJpg, addOn:
      ("Pink Salt", "Ugandian Natural Letus"), subTotal: 40, Quantity: 3, orderOption: "take away"
  }
]

const CartPage = () => {
  const { productSelection, cart, showCheckoutPage } =
    useContext(ProductsContext);
  // const [selectedProduct, setSeletedProduct] = productSelection;
  // const [cartData, setCartData] = cart;
  const [showCheckout, setShowCheckout] = showCheckoutPage;

  const increment = (name) => {
    // addOns.forEach((item) => {
    //   if (item.name.toString() === name.toString()) {
    //     item.quantity += 1;
    //   }
    // });
    // setAddOns([...addOns]);
    //setAddonsPrice((parseInt(addOns.price) * addOns.quantity))
  };

  const decrement = (name) => {
    // addOns.forEach((item) => {
    //   if (item.name.toString() === name.toString()) {
    //     item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
    //   }
    // });
    // setAddOns([...addOns]);
    //setAddonsPrice((parseInt(addOns.price) * addOns.quantity))
  };

  return (
    <main>
      <div className="cartHeader">
        <div
          onClick={() => setShowCheckout(false)}
          className="cartArrowBtn d-flex align-items-center "
        >
          <FontAwesomeIcon size="2x" icon={faArrowLeft} />
          <h4 className="titleCart mb-0"> Cart</h4>
        </div>
      </div>
      <Row style={{ margin: "0px 15px", borderBottom: "2px solid lightgrey", marginTop: "15px" }}>
        <Col xs={8} sm={9}>
          <div className="d-flex">
            <img className="dish_image me-2" src={burgerJpg} alt="" />
            <div className="">
              <h4 className="mb-0 dish_name">ikran</h4>
              <h4 className="mb-0 dish_name">Add on</h4>
              <ul className="dish_list">
                <li> - adr</li>
                <li> - adr</li>
                <li> - adr</li>
              </ul>
              <p>RM 40.00</p>
            </div>
          </div>
        </Col>
        <Col xs={4} sm={3} className="text-center">
          <button type="button" class="btn btn-info">Take Away</button>
          <p className="mt-3">Edit</p>
          <div className="">
            <span
              className="decBtn"
              onClick={() => decrement()}
            >
              -
            </span>
            <span>{ }</span>
            <span
              className="incBtn"
              onClick={() => increment()}
            >
              +
            </span>
          </div>
        </Col>
      </Row>
      <Link to="/checkout">
        <section className="checkout_page">
          <div className="checkout d-flex justify-content-between">
            <p>Checkout</p>
            <p>RM 40.00</p>
          </div>
        </section>
      </Link>
    </main >
  );
};

export default CartPage;
