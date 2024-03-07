import React from 'react'

var ButtonStyle = {
  boxShadow: "6px 6px 70px rgb(16 40 81 / 23%)",
  borderRadius: "15px" ,
  background: "rgb(179,163,152)",
  background: "linear-gradient(32deg, rgba(179,163,152,1) 35%, rgba(215,228,192,1) 100%)",
};

const button = [
  {
    class: "fa-solid fa-book-medical",
    name: "Book Appointment",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookappt_icon.svg"
  },
  {
    class: "fa-solid fa-calendar-plus",
    name: "Book Health Check-Up",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/bookhelathcheck_icon.svg"
  },
  {
    class: "fa-solid fa-laptop-medical",
    name: "Consult Online",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/buymedicines_icon.svg"
  }, {
    class: "fa-solid fa-syringe",
    name: "Buy Medicine",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/consultonline_icon.svg"
  },
  {
    class: "fa-solid fa-hospital",
    name: "Find Hospital",
    img: "https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/findhsptl_icon.svg"

  }
];

const Buttons = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center items-center">
        {button.map((button, index) => (
          <button key={index} className='bg-white text-l w-52 h-40 flex no-underline flex-col content-center justify-center items-center px-5 py-5 m-5 font-semibold' style={ButtonStyle}>
            {/* <i className={button.class}></i> */}
            <img src={button.img} alt="" />
            <p className='mt-5'>{button.name}</p>
          </button>
        ))}
      </div>
    </>
  )
}

export default Buttons