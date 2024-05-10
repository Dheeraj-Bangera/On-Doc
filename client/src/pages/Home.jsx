import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import firstAid from "../images/firstaidlogo.jpg"
import FirstAidComponent from "./FirstAidComponent";
 import  { useState } from 'react'

const Home = () => {


  const [showFirstAidComponent, setShowFirstAidComponent] = useState(false);

  const firstAidHandler = () => {
    setShowFirstAidComponent(!showFirstAidComponent);
  };

  const closeFirstAidComponent = () => {
    setShowFirstAidComponent(false);
  };
  return (
    <>
      <Navbar />
      <Hero />
      <div className='relative'>
        <img
          src={firstAid}
          alt=""
          className='absolute right-0 bottom-4 cursor-pointer h-20 w-20 rounded-xl z-10 bg-white p-4'
          onClick={firstAidHandler}
        />
      </div>
      {showFirstAidComponent && <FirstAidComponent closeFirstAidComponent={closeFirstAidComponent} />}
    
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};
function App() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
        {/* Topbar content */}
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
        {/* Navbar content */}
      </nav>
      {/* Navbar End */}

      {/* Header Start */}
      <div className="container-fluid header bg-primary p-0 mb-5">
        {/* Header content */}
      </div>
      {/* Header End */}
    </div>
  );
}


export default Home;
