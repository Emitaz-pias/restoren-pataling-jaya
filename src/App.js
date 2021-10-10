import "./App.css";
import HomePage from "./Components/Home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Components/Login/LogIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
