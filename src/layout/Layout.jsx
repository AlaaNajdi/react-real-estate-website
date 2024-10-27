import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbarlayout from './Navbarlayout'

const Layout = () => {
  return (
    <div>
      <header>
        <Navbarlayout />
      </header>
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}

export default Layout
