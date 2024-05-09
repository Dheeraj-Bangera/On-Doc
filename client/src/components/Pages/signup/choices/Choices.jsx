// Choices.jsx

import React from "react";
import { Link } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlineWork } from "react-icons/md";
import ChoicesImg from "../../../../assets/choices.jpg"
import Card from "./Card";

const Choices = () => {
  const cards = [
    {
      title: "Doctor",
      description: "",
      link: "/doc/signup",
      icon: <PiStudentBold />,
    },
    {
      title: "Patient",
      description: "",
      link: "patient/signup",
      icon: <MdOutlineWork />,
    },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <img src={ChoicesImg} alt="doc" className="absolute inset-0 w-full h-screen object-cover  " />

      <h1 className="text-2xl font-bold mb-4 text-center absolute top-[200px]">Choose Your Role</h1>
      <div className="flex gap-4">
        {cards.map((card, index) => (
          <Link key={index} to={card.link}>
            <Card
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Choices;
