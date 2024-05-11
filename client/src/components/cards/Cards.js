import React from "react";
// import twoPaws from "../../../../assets/two-paws.png";
// import "./styles.css";

function Card({
  name,
  specialization,
  city,
  address,
  breed,
  description,
  image,
  gender,
}) {
  return (
    <div className="max-w-sm rounded-xl gap-4 overflow-hidden shadow-lg m-8">
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={image}
          alt={name}
        />
        <div className="absolute bottom-0 left-0 m-2 rounded-xl font-bold  p-2 text-lg bg-white">
          {specialization}
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center ml-5">
          <div className="font-bold right-14  text-2xl">
            {name}
          </div>
          {/* <img src={twoPaws} alt="pawprint" className="right-[0px] w-16 h-12 " /> */}
        </div>
        {/* <p className="text-gray-700 text-base">Gender: {gender}</p> */}
        <p className="text-gray-700 text-base">Address: {address}</p>
        <p className="text-gray-700 text-base">City: {city}</p>
        {/* <p className="text-gray-700 text-base">Breed: {breed}</p> */}
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}

export default Card;
