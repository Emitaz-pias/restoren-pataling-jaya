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
  const [indgredients, setIndgredients] = useState("");
  const [selectedAddons, setSelectedAddos] = useState("");
  const [deliveryOption, setDeliveryOption] = useState("");
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addonsPrice, setAddonsPrice] = useState(0);

  return (
    <ProductsContext.Provider
      value={{
        detailsPage: [showDetails, setShowDetails],
        productSelection: [selectedProduct, setSeletedProduct],
        selectIngredients: [indgredients, setIndgredients],
        selectAddons: [selectedAddons, setSelectedAddos],
        selectDeliveryOption: [deliveryOption, setDeliveryOption],
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
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </Router>
    </ProductsContext.Provider>
  );
}

export default App;
