import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using React Router

const ButtonStyle = {
  borderRadius: "15px",
  // background: "rgb(168,118,118)",
  boxShadow: "12px 12px 12px rgba(0, 0, 0, 0.1)", // Add shadow
  background: "#E1F7F5",
};

const buttonData = [
  {
    id: 1,
    class: "fa-solid fa-book-medical",
    name: "Book Appointment",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg",
    path: "/book-appointment"
  },
  {
    id: 2,
    class: "fa-solid fa-calendar-plus",
    name: "Symptom Analysis",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg",
    path: "/symptom-analysis"
  },
  {
    id: 3,
    class: "fa-solid fa-laptop-medical",
    name: "Report Analysis",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg",
    path: "/report-analysis"
  },
  {
    id: 4,
    class: "fa-solid fa-syringe",
    name: "Know About your Medicine",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg",
    path: "/medicine-info"
  },
  {
    id: 5,
    class: "fa-solid fa-hospital",
    name: "BMI Calculator",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg",
    path: "/bmi-calculator"
  },
  {
    id: 6,
    class: "fa-solid fa-hospital",
    name: "Chat with Your Doctor",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg",
    path: "/chat-doctor"
  }
];

const Buttons = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {buttonData.map(button => (
        <Link to={button.path} key={button.id}>
          <button className='bg-white text-l w-60 h-52 flex no-underline flex-col 
          content-center justify-center items-center p-8 m-5 font-semibold' style={ButtonStyle}>
            <img src={button.img} alt="" />
            <p className='mt-5'>{button.name}</p>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Buttons;
