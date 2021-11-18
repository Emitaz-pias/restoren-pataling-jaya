import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./Components/CartPage/CartPage";
import HomePage from "./Components/Home/HomePage";
import LogIn from "./Components/Login/LogIn";
import ProductDetails from "./Components/ProductDetails/ProductDetail/ProductDetails";

export const ProductsContext = createContext();
function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSeletedProduct] = useState({});
  const [deliveryOption, setDeliveryOption] = useState("");
  const [indgredients, setIndgredients] = useState("");
  const [selectedAddons, setSelectedAddos] = useState("");
  const [remarks, setRemarks] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addonsPrice, setAddonsPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        detailsPage: [showDetails, setShowDetails],
        showCheckoutPage: [showCheckout, setShowCheckout],
        productSelection: [selectedProduct, setSeletedProduct],
        selectDeliveryOption: [deliveryOption, setDeliveryOption],
        selectIngredients: [indgredients, setIndgredients],
        selectAddons: [selectedAddons, setSelectedAddos],
        getRemarks: [remarks, setRemarks],
        cart: [cartData, setCartData],
        price: [totalPrice, setTotalPrice],
        addonPrice: [addonsPrice, setAddonsPrice],
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/product">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
    </ProductsContext.Provider>
  );
}

export default App;
