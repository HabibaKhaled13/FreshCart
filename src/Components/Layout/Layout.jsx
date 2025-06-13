import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

export default function Layout() {
  return <>
  <Navbar/>
  <div className="container  mt-4 mb-12">
  <Outlet/>
  </div>
  <Footer/>
  </>
}
