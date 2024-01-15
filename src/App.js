import React from 'react';
import './App.css';
import Main from './Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilteredProducts from './Components/FilteredProducts/FilteredProducts';
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import { useSelector } from 'react-redux';
import SignIn from './Components/SignIn/SignIn';

function App() {

  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log("cart", cart);
  console.log("totalAmount", cart);
  console.log("totalPrice", totalPrice);

  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log("user", user);
  console.log("authUser", authUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            // element={authUser ? <Main /> : <SignIn /> }
            element={<Main />}
            >
          </Route>
          <Route
            path="/FilteredProducts/:type"
            element={<FilteredProducts />}>
          </Route>
          <Route
            path="/FilteredProducts/:type/:id"
            element={<SingleProduct />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
