import React from 'react'
import { Routes, Route, Router,withRouter,BrowserRouter }  from 'react-router-dom'
import { Toast, Toaster } from 'react-hot-toast'

import Info from './Info'
import ChangePass from './ChangePass'
import CheckOrder from './CheckOrder'

const RouteAccount = () => {
  return (
    <>
        {/* <Info /> */}
        {/* < ChangePass /> */}
        < CheckOrder />
    </>
  )
}

export default RouteAccount
