import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import LoginPage from "./Login/LoginPage";
import ProductsList from "./ProductsList/ProductsList"
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/products-list" component={ProductsList} />
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
