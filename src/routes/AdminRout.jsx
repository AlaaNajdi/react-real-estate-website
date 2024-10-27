import React from 'react'
import { Outlet } from 'react-router-dom'
import Signin from '../pages/Signin'


const AdminRout = () => {
  const logininfo = JSON.parse(localStorage.getItem("signin"))

  return (
    <div>
      {logininfo !== null && logininfo.IsSignin && logininfo.userdata.isAdmin ? <Outlet /> : <Signin />}
    </div>
  )
}

export default AdminRout
