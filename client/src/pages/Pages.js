import { Routes, Route, Router,withRouter,BrowserRouter }  from 'react-router-dom'
import * as React from 'react';
import ReactDOM from "react-dom";

import HomePage from './HomePage/HomePage'
import News from './News'
import Signup from '../LoginForm/Signup'
import Login from '../LoginForm/Login'
import Product from './Product/Product'


import { Toaster } from 'react-hot-toast'
import Contact from './Contact';
import Cart from './Cart/Cart';
import WishList from './Wishlist/WishList';
import  { useState } from "react";
import Checkout from './Checkout/Checkout';
import Account from './Account/Account';
import ProductDetail from './ProductDetail/ProductDetail';
import Info from './Account/Info';
import CheckOrder from './Account/CheckOrder';
import ChangePass from './Account/ChangePass';


const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />}></Route>
        <Route path="/news" element={<News />}></Route>
        {/* <Route path="/keyboard" element={<Product />}></Route> */}
        <Route path="/keyboard/:pageNumber" element={<Product />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account" element= {<Account/>}>
          <Route path="info" element= {<Info/>}></Route>
          <Route path="changepass" element= {<ChangePass/>}></Route>
          <Route path="listorder" element= {<CheckOrder/>}></Route>
          </Route> 
        <Route path="/product-detail/:product_id" element= {<ProductDetail/>}></Route>        
        <Route path="/keyboard/:search" element= {<Product/>}></Route>
        
        <Route path="checkorder" element= {<CheckOrder/>}></Route>
        <Route path="changepass" element= {<ChangePass/>}></Route>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default Pages
