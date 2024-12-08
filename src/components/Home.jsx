import React from 'react'
import Navbar from '../Pages/Navbar'
import CategoryMenu from '../Pages/CategoryMenu'
import FoodItem from '../Pages/FoodItem'
import Cart from '../Pages/Cart'
const Home = () => {
  return (
    <>
      <Navbar/>
      <CategoryMenu/>
      <FoodItem/>
      <Cart/>
    </>
  )
}

export default Home
