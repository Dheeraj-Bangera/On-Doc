import React, { useState } from 'react'
import { NavbarDefault } from '../../Navbar'
import Banner from './Banner'
import Buttons from './Buttons'
import Categories from "./Categories.jsx"

const Home = () => {
  const [option,setOption]=useState("Procedures")
  return (
    <div>
      <Navbardefault />
      <Banner />
      <section className=" flex items-center justify-center mt-52" id="work">
                <div className="flex items-center justify-center text-xl w-2/3 h-2/3 rounded-lg font-semibold bg-[#B3A398]">
                    <span className="cursor-pointer mr-10 my-2 text-[#D7E4C0] hover:text-[#BBC3A4]" onClick={()=>{setOption("Specialties")}}>Specialties</span>
                    <span className="cursor-pointer mr-10 my-2 text-[#D7E4C0] hover:text-[#BBC3A4]" onClick={()=>{setOption("Procedures")}}>Procedures</span>
                    <span className="cursor-pointer mr-10 my-2 text-[#D7E4C0] hover:text-[#BBC3A4]" onClick={()=>{setOption("ProHealth")}}>ProHealth</span>
                </div>
      </section>
      {option==="Procedures"?<Categories />:<Buttons />}
      
      
    </div>
  )
}

export default Home
