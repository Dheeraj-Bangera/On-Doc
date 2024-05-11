import React from 'react';
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

const images = [
  image1,
  image2,
  image3
];

const FirstAidComponent = ({ closeFirstAidComponent }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
            <div className="w-1/2 max-w-lg h-full flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg overflow-y-auto max-h-full">
                    <h1 className="text-2xl font-bold mb-4">First Aid Information</h1>
                    {/* Images displayed side by side */}
                    <div className="flex">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Image ${index + 1}`} className="" />
                        ))}
                    </div>
                    {/* Close button */}
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={closeFirstAidComponent}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default FirstAidComponent;
