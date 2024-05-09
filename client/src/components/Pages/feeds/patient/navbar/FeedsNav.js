import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import DropDown from "./DropDown";


const FeedsNav = ({  }) => {

  return (
    <div className=" flex justify-between  w-[92%] mx-auto">
      <div>
        <NavLink to="/patient/main">
          <img src={logo} alt="Kennel" className="w-48" />
        </NavLink>
      </div>
      
      
        <div className="flex justify-center w-full items-center ">
          <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <IoSearch className="w-5 h-5 absolute ml-3 pointer-events-none" />
  
            <input
              type="text"
              name="search"
              placeholder="Search the doctor..."
              className="w-[100%] p-2 pr-3 pl-10 rounded-full  border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
            />
          </div>
        </div>
        
      

      <div className="mt-2"> 
<DropDown/>
     
      </div>


    </div>
  );
};

export default FeedsNav;
