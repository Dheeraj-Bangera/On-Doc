import React, { useState } from 'react';
import category from './categories';



const Categories = () => {
    const [items, setItems] = useState(category);

    const filterItem = (categoryItem) => {
        const updatedItems = category.filter((curElem) => {
            return curElem.category === categoryItem;
        });

        setItems(updatedItems);
    };

    return (
        <>
            <section className="section__title flex items-center justify-center my-10 w-50  h-auto" id="work">
                <div className="flex items-center justify-center text-xl w-2/3 h-2/3 rounded-lg font-semibold bg-[#B3A398]">
                    <span className="cursor-pointer mr-10 my-2 text-[#D7E4C0] hover:text-[#BBC3A4]" onClick={() => filterItem("Specialties")}>Specialties</span>
                    <span className="cursor-pointer mr-10 my-2 text-[#D7E4C0] hover:text-[#BBC3A4]" onClick={() => filterItem("Procedures")}>Procedures</span>
                    <span className="cursor-pointer mr-10 my-2 text-[#D7E4C0] hover:text-[#BBC3A4]" onClick={() => filterItem("ProHealth")}>ProHealth</span>
                </div>
            </section>

            <div className=''>
                <h1 className='text-2xl font-bold flex items-center justify-center'>Explore our Centres of Clinical Excellence</h1>
            </div>

            <div>
            <section className='section flex justify-center items-center  w-screen my-5'>
                <div className="work__container grid grid-cols-6 gap-3">
                    {items && items.map((elem) => {
                        const { id, img, name, title, category } = elem;
                        return (
                            <>
                                <div className="p-1 border border-orange-500 rounded-lg flex items-center justify-center flex-col" key={id}>
                                    <div className="work__thumbnail">
                                        <img src={img} alt="" className='work__img' />
                                    </div>
                                    <span>
                                        <h3 className='work__title text-sm'>{name}</h3>
                                    </span>
                                </div>
                            </>
                        );
                    })}
                </div>
            </section>
            </div>
        </>
    );
};

export default Categories;