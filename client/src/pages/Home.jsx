import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";
import firstAid from "../images/firstaidlogo.jpg"
import FirstAidComponent from "./FirstAidComponent";
import Chatbot from "../components/chatbot/Chatbot"
import Buttons from "../components/Buttons"
import { Link } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";

 import  { useState } from 'react'
// import Categories from "../components/Categories";

const Home = () => {


  const [showFirstAidComponent, setShowFirstAidComponent] = useState(false);
  const [chatBotHandler, setchatBotHandler] = useState(false);
  
  const firstAidHandler = () => {
    setShowFirstAidComponent(!showFirstAidComponent);
  };

  const chatBotClickHandler = () => {
    setchatBotHandler(!chatBotHandler);
  };

  const closeFirstAidComponent = () => {
    setShowFirstAidComponent(false);
  };

  
  return (
    <>
      <Navbar />
      
      <div className='relative'>
            <Link to="/news" className="bg-blue-500 rounded-xl p-3 text-white absolute right-0 top-0 mt-4 gap-1 flex">
                <IoNewspaperOutline className="text-black text-2xl" />
                 Latest news
            </Link>
        </div>
      <Hero />
      <div className='absolute'>
        <img
          src={firstAid}
          alt=""
          className='fixed right-0 bottom-4 cursor-pointer h-20 w-20 rounded-xl z-10 bg-white p-4'
          onClick={firstAidHandler}
        />
   

      </div>
      {showFirstAidComponent && <FirstAidComponent closeFirstAidComponent={closeFirstAidComponent} />}
      <div className='absolute'>
        <img
          src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg"
          alt=""
          className='fixed left-0 bottom-4 cursor-pointer h-20 w-20 rounded-xl z-50 bg-white p-4 '
          onClick={chatBotClickHandler}
        />
       
      </div>
      {chatBotHandler && <Chatbot chatBotClickHandler={chatBotClickHandler}  />}
    
    
      <AboutUs />
     
      <Buttons chatBotClickHandler={chatBotClickHandler}/>
      {/* <Categories/> */}
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
