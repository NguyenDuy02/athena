import { React } from 'react';
import { ProductManager } from "../views/ProductManager";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { CartItem } from "../views/CartItem";
import { User } from "../views/User";
import { Register } from "../views/Register";
import { Switch, Route } from "react-router-dom";
export const Routers = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route exact={true} path="/log-in">
        <Login />
      </Route>
      <Route exact={true} path="/register">
        <Register />
      </Route>
      <Route exact={true} path="/cart-item">
        <CartItem />
      </Route>
      <Route exact={true} path="/product-manager">
        <ProductManager />
      </Route>
      <Route exact={true} path="/user">
        <User />
      </Route>
    </Switch>
  );
};
