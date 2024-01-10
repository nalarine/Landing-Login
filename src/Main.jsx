import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import About from './components/About/About'
import Companies from './components/Companies/Companies'
import Footer from './components/Footer/Footer'

function Main() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Categories/>
      <Companies/>
      <About/>
      <Footer/>
    </>
  )
}

export default Main