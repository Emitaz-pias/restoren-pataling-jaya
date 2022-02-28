import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./Components/CartPage/CartPage";
import Checkout from "./Components/Checkout/Checkout";
import HomePage from "./Components/Home/HomePage";
import LogIn from "./Components/Login/LogIn";
import ProductDetails from "./Components/ProductDetails/ProductDetail/ProductDetails";
import { Provider } from "react-redux";
import Store from "./redux/Store";


export const ProductsContext = createContext();
function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSeletedProduct] = useState({});
  const [deliveryOption, setDeliveryOption] = useState("");
  const [indgredients, setIndgredients] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [remarks, setRemarks] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addonsPrice, setAddonsPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  console.log(totalPrice, addonsPrice)
  return (
    <ProductsContext.Provider
      value={{
        detailsPage: [showDetails, setShowDetails],
        showCheckoutPage: [showCheckout, setShowCheckout],
        productSelection: [selectedProduct, setSeletedProduct],
        selectDeliveryOption: [deliveryOption, setDeliveryOption],
        selectIngredients: [indgredients, setIndgredients],
        selectAddons: [selectedAddons, setSelectedAddons],
        getRemarks: [remarks, setRemarks],
        cart: [cartData, setCartData],
        price: [totalPrice, setTotalPrice],
        addonPrice: [addonsPrice, setAddonsPrice],
      }}
    >
      <Provider store={Store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/product">
              <ProductDetails />
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ProductsContext.Provider>
  );
}

export default App;
