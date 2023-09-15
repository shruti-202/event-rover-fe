import React from 'react'
import Header from '../components/main/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/main/Footer'

function MainLayout() {
  return (
    <div>
      <main>
        <Header/>
        <Outlet/>
        <Footer/>
      </main>
    </div>
  )
}

export default MainLayout
