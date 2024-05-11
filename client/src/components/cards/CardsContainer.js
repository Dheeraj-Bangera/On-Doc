import React from "react";
import { Link } from "react-router-dom";
import Card from "./Cards";
import doctorData from "./CardsData";

function CardsContainer() {
  return (
    <div className=" bg-[#E1F7F5]">
      <div className="flex flex-col gap-2 mt-4  justify-center">
        {doctorData.map((doctor, index) => (
          <Link to={`/doctors/${index}`} key={index} >
            <Card
              name={doctor.name}
              specialization={doctor.specialization}
              city={doctor.city}
              address={doctor.address}
              clinic={doctor.clinic}
              description={doctor.description}
              image={doctor.image}
              phoneNumber={doctor.phoneNumber}
              email={doctor.email}
             
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardsContainer;
