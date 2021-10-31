import { createContext, useState } from "react";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Components/Login/LogIn";
import ProductDetails from "./Components/ProductDetails/ProductDetail/ProductDetails";

export const ProductsContext = createContext();
function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [sectedProduct, setSeletedProduct] = useState({});
  const [cartData, setCartData] = useState({});
  return (
    <ProductsContext.Provider
      value={{
        detailsPage: [showDetails, setShowDetails],
        productSelection: [sectedProduct, setSeletedProduct],
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
        </Switch>
      </Router>
    </ProductsContext.Provider>
  );
}

export default App;
