import React from 'react'
import RouteAccount from './RouteAccount'
import Sidebar from './Sidebar'
import './Account.css'
import { BrowserRouter } from 'react-router-dom' 
import { Toaster } from 'react-hot-toast'
import { Routes, Route}  from 'react-router-dom'
import Info from './Info'
import { Outlet } from 'react-router-dom';


const Account = () => {
  return (
    <div class= "account-container">
        <Sidebar />
        {/* <RouteAccount /> */}
        <Outlet />
        <Toaster />
    </div>
  )
}

export default Account
