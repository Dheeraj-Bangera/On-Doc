import React from "react";
import Card from "./Cards";
import data from "./CardsData";

function CardsContainer() {
    return (
        <div className="container bg-[#E1F7F5]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-center">
                {/* Map over the itemData array and render a itemCard component for each item */}
                {data.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        specialization={item.specialization}
                        city={item.city}
                        address={item.address}
                        clinic={item.clinic}
                        description={item.description}
                        image={item.image}
                        phoneNumber={item.phoneNumber}
                        email={item.email}
                    />
                ))}
            </div>
        </div>
    );
}
export default CardsContainer;
