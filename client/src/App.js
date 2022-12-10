import { Routes, Route, Router,withRouter }  from 'react-router-dom'
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './pages/Header'
import Pages from './pages/Pages'
import Footer from './pages/Footer'

import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/style.css'
import './css/magnific-popup.css'



function App() {
  const check = false;
  return (
   <>


{window.location.pathname !== "/signup" && window.location.pathname !== "/login" ? (
          <>
          <Header />
          <Pages />
          <Footer />
          </>
) : (
  <>
    <Pages />
  </>
)}
    
   </>
    
  ); 
}

export default (App);
