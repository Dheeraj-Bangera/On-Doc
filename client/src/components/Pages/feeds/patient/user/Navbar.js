import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../../assets/logo.png";
// import { IoSearch } from "react-icons/io5";
import DropDown from "../navbar/DropDown";


const FeedsNav = ({  }) => {

  return (
    <div className=" flex justify-between  w-[92%] mx-auto ">
      <div>
        <NavLink to="/feeds">
          <img src={logo} alt="Kennel" className="w-36" />
        </NavLink>
      </div>
      
      
       
        
      

      <div className="mt-2"> 
<DropDown/>
     
      </div>


    </div>
  );
};

export default FeedsNav;
