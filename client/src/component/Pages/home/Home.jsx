import React from 'react'
import { NavbarDefault } from '../../Navbar'
import Banner from './Banner'
import Buttons from './Buttons'
import Categories from './Categories.jsx'

const Home = () => {
  return (
    <div>
      <NavbarDefault />
      <Banner />
      <Buttons />
      <Categories />
    </div>
  )
}

export default Home
