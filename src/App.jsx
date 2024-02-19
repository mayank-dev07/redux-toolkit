import { useState } from "react";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
// import Form from "./components/Form";
// import Context from "./components/context";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            {/* <Route
              path="/form"
              element={
                <>
                  <Form />
                  <Context />
                </>
              }></Route> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
