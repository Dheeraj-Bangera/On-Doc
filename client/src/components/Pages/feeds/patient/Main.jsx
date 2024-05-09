import React from 'react'
// import Banner from "./Banner";
import Buttons from './Buttons';
import Categories from "./Categories"
import Cards from './cards/CardsContainer';
import Nav from "./navbar/FeedsNav"
const Main = () => {
  return (
    <div className='bg-[#9AC8CD]'>
      {/* <Banner/> */}
      <Nav />
      <Buttons/>
      <Cards/>
      <Categories/>
    </div>
  )
}

export default Main
