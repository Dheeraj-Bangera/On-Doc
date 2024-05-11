import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router

const ButtonStyle = {
  borderRadius: "15px",
  // background: "rgb(168,118,118)",
  boxShadow: "12px 12px 12px rgba(0, 0, 0, 0.1)", // Add shadow
  background: "#FEFAE0",
};

const buttonData = [
  {
    id: 1,
    class: "fa-solid fa-book-medical",
    name: "Book Appointment",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg",
   
  },
  {
    id: 2,
    class: "fa-solid fa-calendar-plus",
    name: "Symptom Analysis",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg",
    
  },
  
  {
    id: 3,
    class: "fa-solid fa-syringe",
    name: "Know About your Medicine",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg",
   
  },
  {
    id: 5,
    class: "fa-solid fa-hospital",
    name: "BMI Calculator",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg",
  
  },
 
];

const Buttons = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {buttonData.map(button => (
        <div  key={button.id}>
          <button className='bg-white text-l w-60 h-52 flex no-underline flex-col 
          content-center justify-center items-center p-8 m-5 font-semibold' style={ButtonStyle}>
            <img src={button.img} alt="" />
            <p className='mt-5'>{button.name}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Buttons;
