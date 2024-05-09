import React, { useState } from "react";
import category from "./data";

const Categories = () => {
  const [items, setItems] = useState(category);

  return (
    < div className="bg-white">
      <div className="">
        <h1 className="text-2xl font-bold flex items-center justify-center">
          Explore our Centres of Clinical Excellence
        </h1>
      </div>

      <div>
        <section className="section flex justify-center items-center  w-screen my-5">
          <div className="work__container grid grid-cols-6 gap-3">
            {items &&
              items.map((elem) => {
                const { id, img, name, title, category } = elem;
                return (
                  <>
                    <div
                      className="p-1 border border-orange-500 rounded-lg flex items-center justify-center flex-col"
                      key={id}
                    >
                      <div className="work__thumbnail">
                        <img src={img} alt="" className="work__img" />
                      </div>
                      <span>
                        <h3 className="work__title text-sm">{name}</h3>
                      </span>
                    </div>
                  </>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;
