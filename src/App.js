import './App.css';
import React, { Suspense, lazy } from 'react';
import {Route, BrowserRouter, Switch } from 'react-router-dom';

const Home =  lazy(()=>import('./pages/Home/Home'));
const Product =  lazy(()=>import('./pages/ProductView/Product'));
const Checkout =  lazy(()=>import('./pages/Checkout/Checkout'));
const Cart =  lazy(()=>import('./pages/Cart/Cart'));

function App() {

  localStorage.setItem("details", JSON.stringify({
      cartItem: 0
  }))
  return (
    <BrowserRouter>
      <Suspense fallback="f">
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/product/:id" component={Product}/>
          <Route path = "/cart" component={Cart}/>
          <Route path = "/checkout" component={Checkout}/>
        </Switch>
      </Suspense>
    
    </BrowserRouter>

  );
}

export default App;
