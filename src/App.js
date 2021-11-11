import { createContext, useState } from "react";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Components/Login/LogIn";
import ProductDetails from "./Components/ProductDetails/ProductDetail/ProductDetails";
import CartPage from "./Components/CartPage/CartPage";

export const ProductsContext = createContext();
function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSeletedProduct] = useState({});
  const [indgredients, setIndgredients] = useState("");
  const [deliveryOpiton, setDeliveryOpiton] = useState("");
  const [cartData, setCartData] = useState([]);

  return (
    <ProductsContext.Provider
      value={{
        detailsPage: [showDetails, setShowDetails],
        productSelection: [selectedProduct, setSeletedProduct],
        selectIngredients: [indgredients, setIndgredients],
        selectDeliveryOption: [deliveryOpiton, setDeliveryOpiton],
        cart: [cartData, setCartData],
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
