import React from 'react'
import KeyBoard from './KeyBoard'
import Sidebar from './Sidebar'
import { Routes, Route, Router,withRouter,BrowserRouter }  from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Product = () => {
  return (
    <>
    <section class="shop spad">
        <div class="container">
            <div class="row">
                <>
                <Sidebar />
                <KeyBoard />
                
                </>
                
            </div>
        </div>
    </section>
        
    </>
  )
}

export default Product
