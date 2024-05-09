import React from 'react';

const Card = ({ title, description,icon }) => {
  return (
    
    <div className="card bg-[#AEC3AE]   p-12 rounded-md
     transition-transform transform hover:scale-110 flex items-centre justify-centre">
        <div className='flex gap-x-3 items-centre '>
        <p className='text-2xl'>{icon}</p>
      <h2 className="text-2xl font-normal">{title}</h2>

        </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
